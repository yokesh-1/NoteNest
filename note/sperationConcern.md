## Why do we separate Routes and Controllers?

1. Your first approach: Route and logic are written together in one place.
2. It works perfectly for small projects, but becomes messy as your app grows.
3. Routes decide which function should handle a request.
4. Controllers decide what should happen when that request arrives.

### 🏨 Real-life analogy: A restaurant

5. Imagine a restaurant where a waiter takes your order and the chef prepares your food.
6. The waiter doesn't cook, and the chef doesn't manage every customer.
7. Each person has a separate responsibility, making the restaurant easier to manage.

### How this works in your Notes app

8. `server.js` is the restaurant entrance — it connects requests to the right route group.
9. `notesRoutes.js` is the waiter — it directs requests to the correct controller.
10. `notesControllers.js` is the chef — it handles the actual work.

js
```
// server.js
app.use("/api/notes", notesRoutes);
```

11. This says: all requests starting with `/api/notes` go to `notesRoutes`.

js
```
// notesRoutes.js
router.get("/", getAllNotes);
router.post("/", createNote);
```

12. `GET /api/notes` → fetch notes.
13. `POST /api/notes` → create a note.
14. The route selects the appropriate controller.

js
```
// notesControllers.js
export const getAllNotes = (req, res) => {
  res.status(200).json({ message: "Your Notes" });
};
```

15. The controller handles the request and sends the response.
16. Later, it can also fetch data from your database.

### Why separate them?

17. Readability: You can quickly find where each responsibility lives.
18. Maintainability: Changing note-creation logic won't clutter your routes.
19. Scalability: Adding authentication, validation, and more features becomes easier.
20. Remember: Routes decide where to go; controllers decide what to do. Separation keeps your code organized as your project grows.



### 1. Without separation — everything in one file

js
```
app.get("/notes", (req, res) => {
  // Fetch notes from database
  // Apply business logic
  // Send response
  res.json({ message: "All notes" });
});
```

### 2. With separation — each file has one job

`notesRoutes.js` — decides where the request goes.

js
```
router.get("/", getAllNotes);
```

`notesControllers.js` — handles what happens.

js
```
export const getAllNotes = (req, res) => {
  // Fetch notes from database
  res.json({ message: "All notes" });
};
```

`server.js` — connects the routes to the app.

js
```
app.use("/api/notes", notesRoutes);
```

- Why? Imagine a restaurant: the waiter takes your order (Route), and the chef prepares the food (Controller).

- If you change the recipe, you don't need to change how the waiter takes orders. That's the benefit of separation.