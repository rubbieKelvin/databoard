import * as icons from "@heroicons/vue/outline";
import { h } from "vue";
import { IconName } from "./heroicon.type";

export default function (props: {name: IconName}) {
  const icon = icons[props.name];
  if (!icon) return
  return h(icon);
}
