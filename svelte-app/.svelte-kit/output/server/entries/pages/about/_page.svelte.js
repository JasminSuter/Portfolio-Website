import { h as head, c as pop, p as push, d as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About me</title>`;
  });
  $$payload.out += `<div class="background"></div> <body><div class="aboutme svelte-1xpyw82"><div class="container svelte-1xpyw82"><div class="image"><img${attr("src", `${stringify(base)}/images/About_Me.png`)} alt="selfportrait" class="portrait svelte-1xpyw82"></div> <div class="text svelte-1xpyw82"><hr class="line svelte-1xpyw82"> <h1 class="svelte-1xpyw82">About me</h1> <div class="logo"><img${attr("src", `${stringify(base)}/images/Apricat_noback.png`)} alt="project witch sketch" class="apricat svelte-1xpyw82"></div> <p class="svelte-1xpyw82">Hello I am Jasmin. I am an artist from Switzerland but I currently live and study in Ireland. I am a freelance artist doing
          character designs, animations and video games!</p> <p class="svelte-1xpyw82">I don't really know what to write here. I chose orange for the background because of my little mascott, the Apricat!</p> <p class="svelte-1xpyw82">I like cats, cakes and tabletop roleplaying games and I also craft my own earrings and charms from clay.</p> <p class="svelte-1xpyw82">Please contact me for any inquiries at thecatfreyja@gmail.com or on instagram at apricat.jam!</p> <hr class="line svelte-1xpyw82"></div></div></div> <div class="back svelte-1xpyw82"><a${attr("href", `${stringify(base)}/`)}><img${attr("src", `${stringify(base)}/images/ArrowBack.png`)} alt="Back button" class="arrow svelte-1xpyw82"></a></div></body>`;
  pop();
}
export {
  _page as default
};
