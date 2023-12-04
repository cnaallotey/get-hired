// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Get Hired",
      meta: [
        {
          name: 'description',
          content: 'Major contents under get hired are found here.',
        }
      ],
      script: [
        {
          src: "https://www.google.com/recaptcha/enterprise.js?render=6LcCKiApAAAAAPKIabyfPC_4UnFrs379OqyHF_wo",
          defer: true,
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-vuefire", "@pinia/nuxt"],
  vuefire: {
    auth: {
      enabled: true,
    },
    config: {
      apiKey: "AIzaSyCwGfi68PjVt5t2xa3uuWyu5xhBN908Bdw",
      authDomain: "gethired-7b51b.firebaseapp.com",
      projectId: "gethired-7b51b",
      appId: "1:471290472159:web:212d28aa0d6339071e2b6a",
      // there could be other properties depending on the project
    },
  },
  tailwindcss: {
    config: {
      plugins: [require("@tailwindcss/forms")],
    },
  },
});
