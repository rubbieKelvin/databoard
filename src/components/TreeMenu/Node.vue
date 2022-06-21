<template>
  <slot :node="node" />
  <p>{{ node.name }}</p>
  <br />
  <div class="pl-2" v-if="node.children">
    <self v-for="(child, index) in node.children" :key="index" :node="child">
      <slot :node="child" />
    </self>
  </div>
</template>


<script lang="ts">
import { Menu } from "~/types/menu";
export default {
  name: "self",
  props: {
    node: {
      type: Object as () => Menu,
      required: true,
    },
  },
};
</script>