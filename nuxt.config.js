const colors = require("vuetify/es5/util/colors").default;
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const webpack = require("webpack");

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bangers&display=swap",
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Quicksand",
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css",
        rel: "stylesheet",

        href: "https://fonts.googleapis.com/css?family=Open+Sans&display=swap",
        rel: "stylesheet",
        href: "vue-typed-js/dist/vue-typed-js.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/registro.css"],
  styleResources: {
    scss: ["~/assets/variables.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/i18n.js", "~/plugins/element-ui"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  vuetify: {
    customVariables: ["~assets/variables.scss"],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/style-resources",
    "bootstrap-vue/nuxt",
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ],
    [
      "nuxt-buefy",
      {
        /* buefy options */
      }
    ]
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */

  /*
   ** Build configuration
   */ router: {
    middleware: "i18n"
  },
  generate: {
    routes: ["/", "/about", "/fr", "/fr/about"]
  },
  build: {
    /*
     ** You can extend webpack config here
     */

    extend(config, ctx) {}
  }
};
