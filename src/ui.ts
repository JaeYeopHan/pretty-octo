import * as $ from "jquery";

export function apply() {
  // 1. Apply narrow navbar with container-xl (max-width)
  $("main > div").addClass("container-xl");

  // 2. Display invisible navigation menus
  $("main nav a").css({ visibility: "visible" });
}
