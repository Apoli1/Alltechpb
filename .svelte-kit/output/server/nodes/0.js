

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BXHxO1Mz.js","_app/immutable/chunks/BH_T6mWI.js","_app/immutable/chunks/BD67kUEg.js","_app/immutable/chunks/CPg6xc2o.js"];
export const stylesheets = [];
export const fonts = [];
