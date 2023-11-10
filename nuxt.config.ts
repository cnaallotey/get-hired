// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules : [
    "@nuxtjs/tailwindcss",
    "nuxt-vuefire",
    '@pinia/nuxt'
  ],
  vuefire : {
    auth: {
      enabled: true
    },
    config: {
      apiKey: 'AIzaSyCwGfi68PjVt5t2xa3uuWyu5xhBN908Bdw',
      authDomain: 'gethired-7b51b.firebaseapp.com',
      projectId: 'gethired-7b51b',
      appId: '1:471290472159:web:212d28aa0d6339071e2b6a',
      // there could be other properties depending on the project
    },
  },
})
