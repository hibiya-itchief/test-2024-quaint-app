import { NuxtConfig } from '@nuxt/types'
import fetch from 'node-fetch'
// @ts-ignore
import colors from 'vuetify/es5/util/colors'
import { Group, News, Tag } from './types/quaint'

const environment = process.env.QUAINT_ENV || 'development'
const env_set = require(`./env.${environment}.js`)

const nuxt_config: NuxtConfig = {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#', // OGPを使う宣言
    },
    titleTemplate: '%s - 日比谷高校星陵祭2024「Magic」公式サイト',
    title: '星陵祭',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '令和6年度　第49回星陵祭　9月14日(土)、15日(日)開催　今年度の星陵祭は、テーマは「Magic」。日比谷のお祭りをみんなで盛り上げましょう！皆様のご来場を心よりお待ち申し上げております。',
      },
      { name: 'format-detection', content: 'telephone=no' },
      // OGP
      {
        hid: 'og:title',
        property: 'og:title',
        content: '日比谷高校星陵祭2024公式サイト',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://2024.seiryofes.com/',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '令和６年度　第49回星陵祭　9月14日(土)、15日(日)開催　テーマは「Magic」。皆様のご来場を心よりお待ち申し上げております。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://2024.seiryofes.com/ogpimage.png',
        // 正式実装期間は'ogpimage.png'、開発期間は'ogpimage_dev.png'を使用
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '日比谷高校星陵祭2024公式サイト',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@hibiya_IT' },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://2024.seiryofes.com/ogpimage.png',
        // 正式実装期間は'ogpimage.png'、開発期間は'ogpimage_dev.png'を使用
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap',
      },
    ],
  },

  // cross-env
  env: env_set,

  router: {
    base: '/',
    middleware: ['auth'],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/userrole.ts',
    { src: '~/plugins/vue-qrcode-reader.ts', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    '@nuxtjs/google-gtag',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: env_set.BASEURL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: '星陵祭',
      author: 'IT委員会|東京都立日比谷高等学校',
    },
    manifest: {
      name: '星陵祭',
      short_name: '星陵祭',
      lang: 'ja',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  auth: {
    plugins: ['~/plugins/axios.ts'],
    watchLoggedIn: true,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/callback',
      home: '/',
    },
    strategies: {
      b2c: {
        scheme: 'oauth2',
        clientId: env_set.AZURE_B2C_CLIENTID,
        endpoints: {
          authorization: env_set.AZURE_B2C_ENDPOINT_AUTHORIZATION,
          token: env_set.AZURE_B2C_ENDPOINT_TOKEN,
          userInfo: undefined,
          logout: env_set.AZURE_B2C_ENDPOINT_LOGOUT,
        },
        // ライブラリはthis.option.tokenで読んでるからここは絶対に"token"
        token: {
          property: 'id_token', // ここは /tokenエンドポイントをたたいた時に返ってくるjsonに合わせる
          type: 'Bearer',
          maxAge: 1800,
          global: true,
        },
        // ライブラリはthis.option.refreshTokenで読んでるからここは絶対に"refreshToken"
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 60,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: 'offline',
        codeChallengeMethod: 'S256',
        scope: ['openid', 'profile', 'offline_access'],
      },
      ad: {
        scheme: 'openIDConnect',
        clientId: env_set.AZURE_AD_CLIENTID, // seiryofes.onmicrosoft.com
        endpoints: {
          configuration: env_set.AZURE_AD_OPENIDCONFIGURATION,
        },
        token: {
          property: 'id_token',
          maxAge: 60 * 60 * 24 * 30,
          type: 'Bearer',
          prefix: '_id_token.',
          expirationPrefix: '_id_token_expiration.',
          global: true,
        },
        responseType: 'code',
        grantType: 'authorization_code',
        scope: ['openid', 'profile', 'offline_access'],
        codeChallengeMethod: 'S256',
      },
    },
  },

  'google-gtag': {
    id: 'G-P1PFLRX395',
    debug: true, // Enable to track in dev mode.
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          theme_color: '#335594',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['defu'],
  },
  generate: {
    fallback: true,
    async routes() {
      // emvSet.BASEURLの末尾にスラッシュがある場合は削除する
      const baseurl_without_slash =
        env_set.BASEURL.slice(-1) === '/'
          ? env_set.BASEURL.slice(0, -1)
          : env_set.BASEURL
      const groups: Group[] = (await (
        await fetch(baseurl_without_slash + '/groups', {
          method: 'GET',
        })
      ).json()) as Group[]
      // デフォルト順にソート
      groups.sort((x, y) => {
        return x.id > y.id ? 1 : -1
      })
      const tags: Tag[] = (await (
        await fetch(baseurl_without_slash + '/tags', {
          method: 'GET',
        })
      ).json()) as Tag[]

      const all_news: News[] = (await (
        await fetch(baseurl_without_slash + '/news', {
          method: 'GET',
        })
      ).json()) as News[]

      const group_routes = groups.map((group) => {
        return {
          route: `/groups/${group.id}`,
          payload: group,
        }
      })
      const group_edit_routes = groups.map((group) => {
        return {
          route: `/groups/${group.id}/edit`,
          payload: { group, tags },
        }
      })
      const group_data_routes = groups.map((group) => {
        return {
          route: `/groups/${group.id}/data`,
          payload: { group },
        }
      })
      const news_routes = all_news.map((news: News) => {
        return {
          route: `/news/${news.id}`,
          payload: { news },
        }
      })

      return [
        {
          route: '/groups',
          payload: { groups, tags },
        },
        ...group_routes,
        ...group_edit_routes,
        ...group_data_routes,
        ...news_routes,
      ]
    },
  },

  loading: {
    color: '#335594',
    height: '5px',
  },
}
export default nuxt_config
