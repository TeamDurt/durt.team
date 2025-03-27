export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.ico","fonts/Gilroy/Gilroy-Black.eot","fonts/Gilroy/Gilroy-Black.ttf","fonts/Gilroy/Gilroy-Black.woff","fonts/Gilroy/Gilroy-BlackItalic.eot","fonts/Gilroy/Gilroy-BlackItalic.ttf","fonts/Gilroy/Gilroy-BlackItalic.woff","fonts/Gilroy/Gilroy-Bold.eot","fonts/Gilroy/Gilroy-Bold.ttf","fonts/Gilroy/Gilroy-Bold.woff","fonts/Gilroy/Gilroy-BoldItalic.eot","fonts/Gilroy/Gilroy-BoldItalic.ttf","fonts/Gilroy/Gilroy-BoldItalic.woff","fonts/Gilroy/Gilroy-ExtraBold.eot","fonts/Gilroy/Gilroy-ExtraBold.ttf","fonts/Gilroy/Gilroy-ExtraBold.woff","fonts/Gilroy/Gilroy-ExtraBoldItalic.eot","fonts/Gilroy/Gilroy-ExtraBoldItalic.ttf","fonts/Gilroy/Gilroy-ExtraBoldItalic.woff","fonts/Gilroy/Gilroy-Heavy.eot","fonts/Gilroy/Gilroy-Heavy.ttf","fonts/Gilroy/Gilroy-Heavy.woff","fonts/Gilroy/Gilroy-HeavyItalic.eot","fonts/Gilroy/Gilroy-HeavyItalic.ttf","fonts/Gilroy/Gilroy-HeavyItalic.woff","fonts/Gilroy/Gilroy-Light.eot","fonts/Gilroy/Gilroy-Light.ttf","fonts/Gilroy/Gilroy-Light.woff","fonts/Gilroy/Gilroy-LightItalic.eot","fonts/Gilroy/Gilroy-LightItalic.ttf","fonts/Gilroy/Gilroy-LightItalic.woff","fonts/Gilroy/Gilroy-Medium.eot","fonts/Gilroy/Gilroy-Medium.ttf","fonts/Gilroy/Gilroy-Medium.woff","fonts/Gilroy/Gilroy-MediumItalic.eot","fonts/Gilroy/Gilroy-MediumItalic.ttf","fonts/Gilroy/Gilroy-MediumItalic.woff","fonts/Gilroy/Gilroy-Regular.eot","fonts/Gilroy/Gilroy-Regular.ttf","fonts/Gilroy/Gilroy-Regular.woff","fonts/Gilroy/Gilroy-RegularItalic.eot","fonts/Gilroy/Gilroy-RegularItalic.ttf","fonts/Gilroy/Gilroy-RegularItalic.woff","fonts/Gilroy/Gilroy-SemiBold.eot","fonts/Gilroy/Gilroy-SemiBold.ttf","fonts/Gilroy/Gilroy-SemiBold.woff","fonts/Gilroy/Gilroy-SemiBoldItalic.eot","fonts/Gilroy/Gilroy-SemiBoldItalic.ttf","fonts/Gilroy/Gilroy-SemiBoldItalic.woff","fonts/Gilroy/Gilroy-Thin.eot","fonts/Gilroy/Gilroy-Thin.ttf","fonts/Gilroy/Gilroy-Thin.woff","fonts/Gilroy/Gilroy-ThinItalic.eot","fonts/Gilroy/Gilroy-ThinItalic.ttf","fonts/Gilroy/Gilroy-ThinItalic.woff","fonts/Gilroy/Gilroy-UltraLight.eot","fonts/Gilroy/Gilroy-UltraLight.ttf","fonts/Gilroy/Gilroy-UltraLight.woff","fonts/Gilroy/Gilroy-UltraLightItalic.eot","fonts/Gilroy/Gilroy-UltraLightItalic.ttf","fonts/Gilroy/Gilroy-UltraLightItalic.woff","icon-192.png","icon-512.png","icon.svg","manifest.webmanifest","robots.txt","sitemap.xml",".nojekyll"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".woff":"font/woff",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bap1Mg0E.js","app":"_app/immutable/entry/app.C0KzKXRG.js","imports":["_app/immutable/entry/start.Bap1Mg0E.js","_app/immutable/chunks/entry.DV-j6Zq-.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.Cxq2KWkB.js","_app/immutable/entry/app.C0KzKXRG.js","_app/immutable/chunks/preload-helper.DcLVGrbX.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.CAg4R-vH.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
