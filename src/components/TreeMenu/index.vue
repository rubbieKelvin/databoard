<template>
  <div>
    <template v-for="(item, index) in menu" :key="index">
      <node :node="item">
        <template v-slot="{ node }">
          <slot :node="node" />
        </template>
      </node>
    </template>
  </div>
</template>

<script lang="ts">
import { Menu } from "~/types/menu";
import Node from "./Node.vue";

export default {
  name: "TreeMenu",
  components: { Node },
  props: {
    menu: { required: true, type: Array as () => Menu[] },
  },
};
</script>