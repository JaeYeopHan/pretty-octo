import * as $ from "jquery";

function apply() {
  // 1. Apply narrow navbar with container-xl (max-width)
  $(".pagehead.repohead").wrapAll(`<div class="container-xl"></div>`);
}

$(apply);
