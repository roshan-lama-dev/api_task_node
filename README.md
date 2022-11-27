# Not to do full stactk app

This app is build with MERN stack.
... write abou the app what it does ...

## How to use

1. Run `git clone <put git Path>`
2. Run `cd <repo name>`
3. Run `npm install`
4. Run `npm run dev`. Note, you musht have `nodemon`, if not run `npm i nodemon -g` first

Now your server will run at `http://localhost:8000`

## APIs

This api server handles all the task request and allow client to run `CRUD` operation.

### Task Router

Task router follow the following url path `{rootUrl}/api/v1/task`. More details as follow

| #   | PATH    | METHOD | IS PRIVATE | DESCRIPTION                                                                                                                                     |
| --- | ------- | ------ | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | `/`     | POST   | false      | This api allows clent to send taskobject and store in db. the object should be in the following structure `{task : "", type: ""}`               |
| 2.  | `/`     | GET    | false      | This api allows clent fetch all the task from database                                                                                          |
| 3.  | `/`     | PATCH  | false      | This api allows clent switch the task type in database . Client must send the dat in the following structure `{_id:"sdf", type:"bad or entry"}` |
| 4.  | `/:_id` | DELETE | false      | This api allows client to delete task based on the given `_id ` from database. database                                                         |
| 4.  | `/`     | DELETE | false      | This api allows client to send multiple \_ids of task to delete multiple items from database                                                    |
