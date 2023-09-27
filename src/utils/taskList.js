import { ref } from "vue";

export const taskList = ref([
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: true,
  },
  {
    id: 3,
    title: "Task 3",
    completed: false,
  },
]);

//CREATE operation
export const addTask = (newTask) => {
  const trimmedTaskTitle = newTask.trim();
  const idCount = taskList.value.length + 1;

  if (taskList.value.some((task) => task.title === trimmedTaskTitle)) {
    alert("This task is already in your list");
  } else {
    const taskToAdd = {
      id: idCount,
      title: trimmedTaskTitle,
      completed: false,
    };
    taskList.value.push(taskToAdd);
  }
};

//DELETE operation
export const deleteTask = (taskID) => {
  taskList.value = taskList.value.filter((t) => t.id !== taskID);
};

// ___________________________________________________________ // ___________________________________________________________

export const toggleComplete = (taskId) => {
  const task = taskList.value.find((t) => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
  }
};

// Styling the completion status
export const toggleLineThrough = (taskId) => {
  const task = taskList.value.find((t) => t.id === taskId);
  return {
    "line-through": task && task.completed,
  };
};
