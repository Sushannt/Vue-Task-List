<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import CreateTasks from "./components/CreateTasks.vue";
import TaskList from "./components/TaskList.vue";
import TabsWrapper from "./views/TabsWrapper.vue";
import Tab from "./views/Tab.vue";
</script>

<template>
  <div class="bg-shade1 text-shade4 h-max">
    <Header />
    <CreateTasks />
    <TabsWrapper>
      <Tab title="All">
        <TaskList />
      </Tab>
      <Tab title="Active">
        <TaskList :filter-tasks="true" />
      </Tab>
      <Tab title="Completed">
        <TaskList :filter-tasks="true" :show-completed="true" />
      </Tab>
    </TabsWrapper>
    <Footer />
  </div>
</template>
