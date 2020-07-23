import * as $ from "jquery";

export function apply() {
  // 1. Apply narrow navbar with container-xl (max-width)
  $("main > div").children().addClass("container-xl");
}
