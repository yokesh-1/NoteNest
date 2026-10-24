
const rateLimiter = async(req, res , next) => {

    try {
        const {success} = await rateLimiter.limit("my-rate-limit");

        if(!success) {
            return res.status(429).json({message: "Too many requests please try again later"})
        }

        next()
    } catch (error) {
       console.log("Rate limit error", error);
       next(error)
    }

}

export default rateLimiter;



// Track how many request we got , TTL(time to Live) also shows, once the request limit has been hitted , user need to wait until TTL.
 // Rate limiting to be done based on users not on the whole app