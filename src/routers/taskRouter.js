import express from "express";
const router = express.Router();

// what is stringfy
// changes the javascript format ddata into
let fakedb = [
  {
    id: 1,
    task: "watching tv",
    hr: 40,
    type: "entry",
  },
];
router.get("/", (req, res) => {
  res.json({
    status: "sucess",
    message: "List of the task",
    // can we send array as a json format
    // es6 syntax
    fakedb,
  });
});

// delete this fakedb when integrate with database

// Application programming interface
// API

router.post("/", (req, res, next) => {
  // request recieves all the data from the frontend
  // response sends the message to the frontend
  try {
    const data = req.body;
    fakedb.push(data);
    console.log(req.body);
    res.json({
      status: "sucess",
      message: "adding data to the db",
    });
  } catch (error) {
    error.code = 500;
    console.log(error.message);
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  try {
    // destructuring successful because the object is inside the array
    const { data, type } = req.body;
    // const data = req.body.id;
    // const type = req.body.type;

    // mutating the array is not good
    // filter is used to
    const notdage = fakedb.map((item) => {
      if (item.id === data) {
        item.type = type;
      }
    });

    // Code Optimisation

    // update
    res.json({
      status: "success",
      message: "updating data to the db",
      notdage,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

// we can put variable in the url endpoint and this is captured in req.params
// the variables can be destructured

// downcast
// ?symbol behind the variable can be useed to

// used in method for single item to delete
// router.delete("/:deleteId?", (req, res, next) => {

router.delete("/", (req, res, next) => {
  // const { deleteId } = req.params;

  // const { _idArg } = req.body;
  const _idArg = req.body;
  console.log([_idArg]);
  // console.log(deleteId);

  // fakedb.filter((item) => {
  //   if (item.id != [_idArg]) {
  //     return item;
  //   }
  // });

  fakedb = fakedb.filter(({ id }) => !_idArg.includes(id));

  try {
    res.json({
      status: "success",
      message: "This is sucess",
    });
  } catch (error) {
    // 500 is server crash error
    error.code = 500;
    next(error);
  }
});
export default router;
