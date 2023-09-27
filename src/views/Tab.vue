<script>
import { inject } from "vue";
export default {
  props: ["title"],
  setup() {
    const selectedTitle = inject("selectedTitle");

    return {
      selectedTitle,
    };
  },
};
</script>

<template>
  <div
    class="tab-content w-[90%] md:w-[50%] mx-auto pb-[19%] md:pb-[15%] flex-grow"
    v-show="title === selectedTitle"
  >
    <slot />
  </div>
</template>
