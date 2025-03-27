import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-a090v0_START -->${$$result.title = `<title>Team Durt</title>`, ""}<meta name="description" content="We are a team of content creators for Minecraft."><script type="text/javascript" data-svelte-h="svelte-swrn7b">(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");

        ym(98146672, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    <\/script><noscript data-svelte-h="svelte-1udlq0n"><div><img src="https://mc.yandex.ru/watch/98146672" style="position:absolute; left:-9999px;" alt=""></div></noscript><!-- HEAD_svelte-a090v0_END -->`, ""} ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
