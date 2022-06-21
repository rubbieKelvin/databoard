<template>
  <div class="flex">
    <div class="h-full p-5 w-[250px] flex flex-col gap-6">
      <!-- title -->
      <h1 class="title text-lg font-bold">Databoard</h1>

      <!-- search -->
      <div
        class="border border-gray-200 rounded-md px-2 flex gap-2 items-center"
      >
        <icon name="SearchIcon" class="w-6 h-6" />
        <input
          type="text"
          placeholder="Search"
          class="bg-transparent outline-none flex-grow w-0 py-2"
        />
      </div>

      <!-- menu -->
      <tree-menu :menu="menu">
        <template v-slot="{ node }">
          <p>{{ node.name }}</p>
        </template>
      </tree-menu>
    </div>

    <router-view class="max-h-full max-w-[calc(100%-250px)]" />
  </div>
</template>

<script lang="ts">
import { sideBarMenu } from "~/constants/menu";
import project from "~/books/";
import Icon from "~/components/Icon";
import TreeMenu from "~/components/TreeMenu/index.vue";

export default {
  components: { Icon, TreeMenu },
  data: () => ({ menu: sideBarMenu(project) }),
};
</script>