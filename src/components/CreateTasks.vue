<script setup>
import { ref } from "vue";
import { addTask } from "../utils/taskList.js";
//
let newTask = ref("");
const clearInput = () => {
  newTask.value = "";
};
</script>

<template>
  <form
    method="post"
    class="flex justify-between border-y-2 border-shade2 w-[100%] md:w-[50%] mx-auto font-secondaryText"
    @submit.prevent="addTask(newTask)"
  >
    <input
      v-model="newTask"
      type="text"
      inputmode="text"
      placeholder="Add task here..."
      class="text-xl p-2 md:p-5 m-4 w-[80%] border-2 text-shade1"
      required
      @focusin="clearInput"
      autocomplete="off"
    />
    <button
      type="submit"
      class="rounded-md hover:rounded-sm border-2 p-5 m-4 text-xl"
    >
      Add
    </button>
  </form>
</template>
