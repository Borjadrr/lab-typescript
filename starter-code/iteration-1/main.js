var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log('=========== NEW INSERTION ===========');
    return myArray.length;
}
;
function listAllTasks() {
    myArray.map(function (task) {
        console.log(task);
    });
}
;
function deleteTask(task) {
    myArray.map(function (elem, index) {
        if (task === elem) {
            myArray.splice(index, 1);
            console.log("=========== NEW DELETION ===========");
        }
    });
    return myArray.length;
}
;
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
