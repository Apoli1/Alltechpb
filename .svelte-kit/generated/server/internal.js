
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"pt-BR\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/logo/logo.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t\t<meta name=\"description\" content=\"AllTech - Tecnologia e Segurança. Instalação e manutenção de CFTV, alarmes, cerca elétrica, controle de acesso, redes e energia solar em João Pessoa/PB.\">\n\t\t<meta name=\"robots\" content=\"index, follow\">\n\t\t<meta name=\"author\" content=\"Jhonatas Gomes Dantas Nunes de Souza\">\n\t\t<meta name=\"geo.region\" content=\"BR-PB\">\n\t\t<meta name=\"geo.placename\" content=\"João Pessoa, Paraíba\">\n\t\t<meta name=\"geo.position\" content=\"-7.1150;-34.8631\">\n\t\t<meta name=\"ICBM\" content=\"-7.1150, -34.8631\">\n\t\t<meta property=\"og:type\" content=\"website\">\n\t\t<meta property=\"og:url\" content=\"https://alltechpb.com.br/\">\n\t\t<meta property=\"og:title\" content=\"AllTech - Tecnologia e Segurança | CFTV, Alarmes e Redes em João Pessoa/PB\">\n\t\t<meta property=\"og:description\" content=\"Instalação e manutenção de CFTV, alarmes, cerca elétrica, controle de acesso, redes e energia solar em João Pessoa/PB.\">\n\t\t<meta property=\"og:image\" content=\"https://alltechpb.com.br/og-image.jpg\">\n\t\t<meta property=\"og:site_name\" content=\"AllTech - Tecnologia e Segurança\">\n\t\t<meta property=\"og:locale\" content=\"pt_BR\">\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\">\n\t\t<meta name=\"twitter:site\" content=\"@alltechpb\">\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t" + body + "\n\t</body>\n</html>",
		error
	},
	version_hash: "ylx5a0"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
