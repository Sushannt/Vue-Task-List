<script setup>
import { computed } from "vue";
import {
  taskList,
  deleteTask,
  toggleComplete,
  toggleLineThrough,
} from "../utils/taskList.js";

const props = defineProps({
  filterTasks: {
    type: Boolean,
    default: false,
  },
  showCompleted: {
    type: Boolean,
    default: false,
  },
});

const filteredTasks = computed(() => {
  return props.filterTasks
    ? props.showCompleted
      ? taskList.value.filter((task) => task.completed)
      : taskList.value.filter((task) => !task.completed)
    : taskList.value;
});
</script>

<template>
  <div
    v-for="task in filteredTasks"
    :key="task.id"
    class="flex gap-5 cursor-pointer text-start"
  >
    <div class="grid-rows-3 gap-6">
      <button
        @click="toggleComplete(task.id)"
        :class="{ 'text-shade2': task.completed === true }"
        class="py-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 md:w-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>
    </div>
    <div
      @click="toggleComplete(task.id)"
      class="border-b-2 border-shade2 text-white font-textTertiary w-[75%] text-md md:text-xl py-4"
      :class="toggleLineThrough(task.id)"
    >
      {{ task.title }}
    </div>
    <div>
      <button
        @click="deleteTask(task.id)"
        :class="{ 'text-red-500': task.completed === true }"
        class="py-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 md:w-10 hover:text-red-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
