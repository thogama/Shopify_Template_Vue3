import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    ssr:false,
    target:'static',
    css: [
        
        "@fortawesome/fontawesome-svg-core/styles.css",
        "~~/sass/main.scss"
    ],
})



