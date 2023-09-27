<template>
  <div class="tabs">
    <ul
      class="tabs__header list-none flex justify-center mt-8 divide-x-2 font-secondaryText"
    >
      <li
        v-for="title in tabTitles"
        :key="title"
        @click="selectedTitle = title"
        class="cursor-pointer px-6 mb-10 mt-5 md:mt-10"
        :class="{
          'underline underline-offset-8 text-red-300': title === selectedTitle,
        }"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      tabTitles,
      selectedTitle,
    };
  },
};
</script>
