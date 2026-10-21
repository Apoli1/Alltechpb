

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/produtos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CWkhGp3F.js","_app/immutable/chunks/BH_T6mWI.js","_app/immutable/chunks/BD67kUEg.js","_app/immutable/chunks/D6WZGaU0.js"];
export const stylesheets = [];
export const fonts = [];
