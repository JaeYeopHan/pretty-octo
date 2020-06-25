import * as $ from "jquery";

export function apply() {
  // 1. Apply narrow navbar with container-xl (max-width)
  $(".pagehead.repohead").children().addClass("container-xl");
}
