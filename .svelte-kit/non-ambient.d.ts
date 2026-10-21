
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/contato" | "/produtos" | "/servicos" | "/sobre";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/contato": Record<string, never>;
			"/produtos": Record<string, never>;
			"/servicos": Record<string, never>;
			"/sobre": Record<string, never>
		};
		Pathname(): "/" | "/contato" | "/produtos" | "/servicos" | "/sobre";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/icons/access-control.svg" | "/icons/alarm.svg" | "/icons/cctv.svg" | "/icons/clock.svg" | "/icons/digital-lock.svg" | "/icons/dvr-nvr.svg" | "/icons/electric-fence.svg" | "/icons/envelope.svg" | "/icons/gate-automation.svg" | "/icons/gate-maintenance.svg" | "/icons/hdd-ssd.svg" | "/icons/instagram.svg" | "/icons/intercom.svg" | "/icons/location-pin.svg" | "/icons/menu-hamburger.svg" | "/icons/network-equipment.svg" | "/icons/network-monitor.svg" | "/icons/network.svg" | "/icons/router.svg" | "/icons/server.svg" | "/icons/solar.svg" | "/icons/support-wrench.svg" | "/icons/technology-equipment.svg" | "/icons/whatsapp.svg" | "/logo/logo.png" | "/logo/logo.svg" | string & {};
	}
}