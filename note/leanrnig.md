# 


### Software  
- Node js 
- Vs Code Ide
- Postman

### Stack
- M - MongoDB A NoSQL, document-oriented database that stores data ,interact and manipulate      in flexible, JSON-like structures to 
- E - Express.js: A lightweight backend web framework running on Node.js that handles routing, requests, and middleware.
- R - React: A client-side JavaScript library used to build interactive user interfaces with reusable components.
- N - Node.js: A JavaScript runtime environment that executes server-side logic.




### How does full  Stack Work
- Client ( frontend ) Send Request   -> Server (backend)  Get req ->  Store Data ( Db )
- response sent back like (  success / Failed ) Request Response cycle


### API and why do we really need API
- API stands for Aplication program interface
- Analogy : customer ----Waiter --------Chef
- Use Case : client sends request  -- API ---- Server gets the request.
- We need API due to security concerns because , we dont allow the customer to enter to kitchen direclty they may damage or steal (scenario of worst case not all) , we someone who we can trust and the name is Waiter. Same case for Applications , If we server users directly from client to server , clients can access all the data and steal other info too. API act as checf the middleman .

### REST API and Methods , Status Code
- We have lots of API types we use REST.
- Methods - **GET** get something , **POST** create something, **PUT** update something , **DELETE** delete something.
- We can create multiple API / Endpoints / Payloads based on our requiements **create a note , delete a note , edit a note** , each works when we hit the route and the serves specific logic based on their Functions. 
- Staus Code to represent the services - 1xx to 5xx 
   1. Informational = 100 Continue, 101 Switching Protocols
   2. Success   = 200 OK, 201 Created, 204 No Content
   3. Redirection  = 301 Moved Permanently, 304 Not Modified
   4. Client Error = 400 Bad Request, 401 Unauthorized, 404 Not Found , 429 too Many request
   5. Server Error = 500 Internal Server Error, 503 Service Unavailable

- you can send the status as **res.status(xxx)** 
- you can check the status code in Browser-n/w tab or test in API or in terminal logs 


### what is endpoint
An endpoint is a combination of a URL  + HTTP method that lest client interact with a specific resource.
Ex -
app.get("/api/notes" ,(req,res) =>{
    res.status(200).send("Your notes);
})

### Middlewares


### Rate limit

### Important Links

- https://app.eraser.io/workspace/GlhY2F7ltehsjZ2z9phZ


### Used Commands
- npm init -y
- node server.js
- git rm --cached -r .   {Unstage everything in your current directory by running a dot . }
- npm install nodemon -D { -d represents to install in dev dependency alone}
- ls -R    = to list all files and subdirectories recursively.

### Used packages 
- express
- nodemon
- mongoose
- dotenv


### Learnings 
- change   "type": "module", in package.json
- change scripts as per what file you want to run in package.json