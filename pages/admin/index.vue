<template>
  <v-app>
    <v-row v-if="isAdmin" justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="my-2">👑管理者用画面</h1>
        <v-btn
          class="my-2"
          outlined
          color="primary"
          @click="$router.push('/admin/manage_owner')"
          >Owner権限の割り当てを管理</v-btn
        >
        <h2 class="my-2">使用しているサービスへのリンク</h2>
        <h3>
          <a :href="api_url + 'docs'">{{ api_url }}docs</a>
        </h3>
        <p>quaint-apiのAPIドキュメント、およびSwagger-ui</p>
        <h3>
          <a
            href="https://analytics.google.com/analytics/web/?authuser=1#/p332029403/reports/reportinghub"
            >Google Analytics</a
          >
        </h3>
        <p>
          サイトのアクセス解析。Googleアカウントでログインすると、アクセス解析が見れるようになります。
        </p>
        <h3>
          <a href="https://portal.azure.com/signin/index/@seiryofes.com"
            >Azure ディレクトリ - @seiryofes.com(Azure AD)</a
          >
        </h3>
        <p>
          quaintのユーザーを管理しているAzure
          ADのディレクトリ。学校から配布されているアカウントをインポートして用いたり、IT委員会側から配布するアカウントを管理したりしている。
        </p>
        <h3>
          <a
            href="https://portal.azure.com/signin/index/@seiryofesb2c.onmicrosoft.com"
            >Azure ディレクトリ - @seiryofesb2c.onmicrosoft.com(Azure B2C)</a
          >
        </h3>
        <p>
          quaintのユーザーを管理しているAzure
          B2Cのディレクトリ。一般客が自分のメールアドレスでサインアップするアカウントを管理している。
        </p>
        <NuxtLink to="/admin/tools">設定ページ</NuxtLink>
      </v-col>
    </v-row>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      api_url: process.env.BASEURL,
      user_groups: {
        admin: process.env.AZURE_AD_GROUPS_QUAINT_ADMIN as string,
      },
      isAdmin: false,
    }
  },
  created() {
    if (
      (this.$auth.user?.groups as string[]).includes(this.user_groups.admin)
    ) {
      this.isAdmin = true
    } else {
      this.$nuxt.error({ statusCode: 403, message: 'Forbidden' })
    }
  },
})
</script>
