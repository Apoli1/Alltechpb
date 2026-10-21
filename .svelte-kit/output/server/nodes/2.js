

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BgABBX6c.js","_app/immutable/chunks/BH_T6mWI.js","_app/immutable/chunks/BD67kUEg.js","_app/immutable/chunks/D6WZGaU0.js"];
export const stylesheets = [];
export const fonts = [];
