const tasks = [
    {
        id: 1,
        title: "Learn JavaScript",
        completed: true
    },
    {
        id: 2,
        title: "Practice Playwright",
        completed: false
    },
    {
        id: 3,
        title: "Push to GitHub",
        completed: false
    }
];

function displayTasks() {
    console.log("===== TO-DO APP =====");

    tasks.forEach((task) => {
        if (task.completed) {
            console.log(`✅ ${task.id}. ${task.title}`);
        } else {
            console.log(`❌ ${task.id}. ${task.title}`);
        }
    });

    console.log(`Total Tasks: ${tasks.length}`);
    console.log();
}

const completedTasks = tasks.filter((task) => {
    return task.completed;
});

console.log("===== COMPLETED TASKS =====");

completedTasks.forEach((task) => {
    console.log(`${task.id}. ${task.title}`);
});
console.log();

const searchTask = tasks.find((task) => {
    return task.id === 2;
});

console.log("===== FIND TASK =====");

if (searchTask) {
    console.log("Task Found: ");
    console.log(`${searchTask.id}. ${searchTask.title}`);
} else {
    console.log("Task not found");
}
console.log();

const taskTitles = tasks.map((task) => {
    return task.title;
});

console.log("===== TASK TITLES =====");
console.log(taskTitles);