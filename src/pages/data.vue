<template>
  <div class="flex flex-col gap-3 h-full flex-grow">
    <h1 class="px-5 pt-5 text-lg font-medium">Countries</h1>
    <hr class="px-5" />
    <div class="px-5 flex-grow overflow-scroll h-0">
      <table class="">
        <!-- head -->
        <tr class="head bg-white">
          <th v-for="key in selectedkeys" :key="key.name">
            {{ key.alias ?? key.name }}
          </th>
        </tr>
        <!-- body -->
        <tr
          v-for="(node, index) in payload"
          :key="index"
          class="even:bg-slate-100 hover:bg-blue-600 hover:text-white"
        >
          <td v-for="key in selectedkeys" :key="`${key.name}-${index}`">
            <template v-if="key.type == KeyType.image">
              <img
                :src="node[key.name]"
                :style="`max-width: ${key?.image?.size ?? 100}px`"
              />
            </template>
            <template v-else>
              <template v-if="!isnone(node[key.name])">{{ node[key.name] }}</template>
              <template v-else>
                <p default>{{ key.default ?? "" }}</p>
              </template>
            </template>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="scss">
tr.head {
  position: sticky;
  top: -1px;
  @apply border-b border-gray-100 shadow-sm;

  > th {
    @apply pb-3 px-3;
    text-align: start;
  }
}
tr {
  > td {
    @apply py-2 px-3;

    p[default] {
      @apply italic;
    }
  }
}
</style>

<script lang="ts">
import { onMounted, Ref, ref } from "@vue/runtime-core";

enum KeyType {
  // text
  image,
  link,
  text,
  // types
  number,
  list,
  object,
}

interface KeyProperty {
  name: string;
  type?: KeyType;
  alias?: string;
  default?: any;
  image?: {
    size?: number;
  };
}
export default {
  setup() {
    const payload: Ref<Object[]> = ref([]);
    const selectedkeys: Ref<KeyProperty[]> = ref([]);

    onMounted(async () => {
      const data: Array<Object> = await (
        await fetch("/data/dummy2.json")
      ).json();

      payload.value = data;

      selectedkeys.value = Object.keys(data[0])
        .map(function (i: string): KeyProperty | null {
          let type = KeyType.text;
          // const except = [
          //   "topLevelDomain",
          //   "callingCodes",
          //   "altSpellings",
          //   "latlng",
          //   "timezones",
          //   "borders",
          //   "flags",
          //   "currencies",
          //   "languages",
          //   "translations",
          //   "regionalBlocs",
          // ];

          // if (except.includes(i)) return null;
          // if (i === "flag") type = KeyType.image;

          return {
            name: i,
            type,
            image: {
              size: 40,
            },
          };
        })
        .filter((i) => i !== null) as KeyProperty[];
    });

    const isnone = (obj:any) : boolean => obj === null || obj === undefined;

    return { payload, selectedkeys, KeyType, isnone };
  },
};
</script>
