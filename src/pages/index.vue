<template>
  <div class="flex">
    <div class="h-full p-5 w-[250px] flex flex-col gap-6">
      <!-- title -->
      <h1 class="title text-lg font-bold">Databoard</h1>

      <!-- search -->
      <div class="border border-gray-200 rounded-md px-2 flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input type="text" placeholder="Search" class="bg-transparent outline-none flex-grow w-0 py-2"/>
      </div>

      <!-- menu -->
      <Icon name="SearchIcon"/>
    </div>
    
    <router-view class="max-h-full max-w-[calc(100%-250px)]" />
  </div>
</template>

<script lang="ts">
import Icon from '~/components/Icon'

export default {
    components: {Icon}
}
</script>