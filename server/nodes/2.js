

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BbcT_XFF.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.CAg4R-vH.js","_app/immutable/chunks/runtime.DWpk4vrG.js","_app/immutable/chunks/index.Cxq2KWkB.js"];
export const stylesheets = ["_app/immutable/assets/2.C5-za272.css"];
export const fonts = [];
