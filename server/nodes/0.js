import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.P0tFyBAH.js","_app/immutable/chunks/preload-helper.DcLVGrbX.js","_app/immutable/chunks/runtime.DWpk4vrG.js","_app/immutable/chunks/index.Cxq2KWkB.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.CAg4R-vH.js"];
export const stylesheets = ["_app/immutable/assets/0.CsE1Y6ck.css"];
export const fonts = [];
