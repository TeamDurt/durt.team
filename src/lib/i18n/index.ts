import { browser } from "$app/environment";
import { init, register } from "svelte-i18n";

const defaultLocale = "en"

register("en", () => import("./locales/en.json"))
register("ru", () => import("./locales/ru.json"))
register("be", () => import("./locales/ru.json"))
register("kk", () => import("./locales/ru.json"))
register("uk", () => import("./locales/uk.json"))
register("de", () => import("./locales/de.json"))
register("fr", () => import("./locales/fr.json"))
register("it", () => import("./locales/it.json"))
register("es", () => import("./locales/es.json"))

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})