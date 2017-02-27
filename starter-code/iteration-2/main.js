"use strict";
var Todo = (function () {
    function Todo() {
        this.myArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myArray.push(task);
        console.log('=========== NEW INSERTION ===========');
        return this.myArray.length;
    };
    ;
    Todo.prototype.listAllTasks = function () {
        this.myArray.map(function (task) {
            console.log(task);
        });
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var _this = this;
        this.myArray.map(function (elem, index) {
            if (task === elem) {
                _this.myArray.splice(index, 1);
                console.log("=========== NEW DELETION ===========");
            }
        });
        return this.myArray.length;
    };
    ;
    return Todo;
}());
;
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
