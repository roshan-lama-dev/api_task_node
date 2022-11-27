import express from "express";
const app = express();
const PORT = 8000;
// thuderclient is used instead of postman
// middlewares
// middlewares is used to run some operation between the response and request runtime
// what is middleware
app.use(express.json());

// body parser

// routers
import taskRouter from "./src/routers/taskRouter.js";

// The application run to the specific url given
app.use("/api/v1/task", taskRouter);

// handle all uncaught router request
app.use("*", (req, res, next) => {
  // res.status(400).json({
  //   status: "error",
  //   message: "404 page not found",
  // });

  const error = {
    code: 404,
    message: "404 Page Not Found!",
  };
  next(error);
});

// global error handler
app.use((error, req, res, next) => {
  const statusCode = error.code || 500;
  res.status(statusCode).json({
    status: "error",
    message: error.message,
  });
});
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
