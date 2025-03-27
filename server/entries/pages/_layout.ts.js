import { r as registerLocaleLoader, i as init, w as waitLocale } from "../../chunks/runtime.js";
const defaultLocale = "en";
registerLocaleLoader("en", () => import("../../chunks/en.js"));
registerLocaleLoader("ru", () => import("../../chunks/ru.js"));
registerLocaleLoader("be", () => import("../../chunks/ru.js"));
registerLocaleLoader("kk", () => import("../../chunks/ru.js"));
registerLocaleLoader("uk", () => import("../../chunks/uk.js"));
registerLocaleLoader("de", () => import("../../chunks/de.js"));
registerLocaleLoader("fr", () => import("../../chunks/fr.js"));
registerLocaleLoader("it", () => import("../../chunks/it.js"));
registerLocaleLoader("es", () => import("../../chunks/es.js"));
init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale
});
const load = async () => {
  await waitLocale();
};
export {
  load
};
