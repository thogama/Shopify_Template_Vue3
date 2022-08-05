import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: [
        {
            rel: "stylesheet",
            href: "/css/bootstrap.min.css"
        }
    ],
    css:[
        "~~/static/css/bootstrap.min.css"
    ],
    
    
})



