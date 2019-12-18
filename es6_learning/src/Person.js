class TaskCollection {
    constructor(task = []) {
        this.task = task;
    }

    log() {
        this.task.forEach(task => console.log(task))
    }
    //error:: this keyword is not access within the function
    // prepare() {
    //     this.task.forEach(function (task) {
    //         console.log(this);
    //     })
    // }

    prepare2() {
        this.task.forEach(() => console.log(this)
        )
    }

    // log2() {
    //     this.task.forEach(task => {
    //         console.log(task)
    //     })
    // }
    //
    // log3() {
    //     this.task.forEach((task,index) => {
    //         console.log(task,index)
    //     })
    // }
}

class Task {
}

new TaskCollection(
    [new Task, new Task, new Task]
).log();