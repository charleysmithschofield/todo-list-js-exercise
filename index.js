/*
Todo List
You've been put on a project to build a new command-line Todo List app. The project has already been started, some code has already
been written, and now it's your job to add the remaining features.
*/

// Here is the current state of the project:

// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // STEP 1: INTRODUCE TASK OBJECT:

// // Create new description arrays to allow each task to have a description (too messy see below):
// // const taskTitles = [];
// // const taskComplete = [];
// // const taskDescription = [];

// // Now keeping track of all of those arrays will be messy, but we rememeber that by using OOP
// // (object oriented programming) we could put all of the task arrays into an object instead:

// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// // // Driver Code Below:
// // const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// // const task2 = newTask("Do Laundry", "😨");
// // const tasks = [task1, task2];

// /*
//   The newTask function is no longer affecting things outside of its scope... Nice!

//   More importantly instead of keeping track of all the details in individual arrays, we
//   are now organized because we groups the task data together in an object.
// */

// /*
//   STEP 2: REFACTOR FUNCTIONS:

//   Objects are a better way of grouping the task data, but we also have to refactor the
//   functions:

//   Update your two functiosn and driver code like so:
// */

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(task) {
//   taskComplete[task] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// // marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // DRIVER CODE BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks);

/*
These two functions are looking better. We can just pass a task to the function rather
than having to use an index.

This code is much easier to understand and each function now accepts a task object instead
of an array.

We are also passing the task object to the functions, so they are not depeendent on variables
outside of their own scope. Creating functions that are more independent and more portable
reduces the fisk of functions accidentally modifying something you didn't mean to.
*/

/*
  STEP 3: USE METHODS INSTEAD:

  This code is better, but it's not yet object oriented. Those functions are either reading
  or updating the state of the task. They are behaviors of the task. They should be methods
  on the task.

  Turn the 2 task functions into task object methods, like so:
*/

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
/*
  A QUICK RETROSPECTIVE:

  We are now programming in an object oriented way. We are using objects to group state and
  logic in order to keep the code more organized. Now everything associated to a task has
  been encapsulated inside the task object.

  This also makes the code very readable. Accessing properties or methods of our tasks is as
  simple as writing code like this:

  task1.title
  task1.markCompleted();
*/
