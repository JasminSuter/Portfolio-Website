import { h as head, c as pop, p as push, d as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Home</title>`;
  });
  $$payload.out += `<div class="background svelte-190e234"></div>  <div class="image-layers"><a${attr("href", `${stringify(base)}/about`)}><img${attr("src", `${stringify(base)}/images/HP_MeFrame2.png`)} alt="About me button" class="layer aboutme svelte-190e234"></a> <div class="aisle-wrapper svelte-190e234"><img${attr("src", `${stringify(base)}/images/HP_Aisle.png`)} alt="Aisle" class="layer aisle svelte-190e234"> <a${attr("href", `${stringify(base)}/art`)}><img${attr("src", `${stringify(base)}/images/HP_Art.png`)} alt="art button" class="layer art svelte-190e234"></a> <a${attr("href", `${stringify(base)}/animations`)}><img${attr("src", `${stringify(base)}/images/HP_Animation.png`)} alt="animation button" class="layer animation svelte-190e234"></a> <a${attr("href", `${stringify(base)}/projects`)}><img${attr("src", `${stringify(base)}/images/HP_Projects.png`)} alt="projects button" class="layer projects svelte-190e234"></a></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="button_commission"><button class="svelte-190e234"><img${attr("src", `${stringify(base)}/images/HP_Commission2.png`)} alt="Commissions button" class="layer commission svelte-190e234"></button></div>`;
  pop();
}
export {
  _page as default
};
