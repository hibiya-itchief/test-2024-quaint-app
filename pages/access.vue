<template>
  <v-app>
    <v-container>
      <ToolsBackButton />
      <h1 id="title">アクセス</h1>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-img class="img" src="/images/accessMap.png" alt="周辺の地図" />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <h2>ご来場方法</h2>
          <br />
          <p>ご来場の際には以下の最寄り駅が使用できます。</p>
          <p class="sta-nagata">永田町駅 ▶ 有楽町線 / 半蔵門線 / 南北線</p>
          <p class="sta-nagata-indent">
            6番出口より参議院議長公邸を右手に、1つ目の交差点を右に曲がり、そのまま道に沿ってお進み下さい。
          </p>
          <p class="sta-mitsuke">赤坂見附駅 ▶ 銀座線 / 丸ノ内線</p>
          <p class="sta-mitsuke-indent">
            11番出口よりプルデンシャルタワー横の新坂（遅刻坂）をお上り下さい。
          </p>
          <p class="sta-mitsuke-indent">
            ※
            傾斜がきついため、ご年配の方やお子様連れの方は永田町駅側からお越しください。
          </p>
          <p class="sta-gijido">国会議事堂前駅 ▶ 丸ノ内線 / 千代田線</p>
          <p class="sta-gijido">（溜池山王駅） ▶ 銀座線 / 南北線</p>
          <p class="sta-gijido-indent">
            ※
            <span class="attention"
              >溜池山王駅・国会議事堂前駅側にある正門からの入場はできません</span
            >。
          </p>
          <p class="sta-gijido-indent">5番出口より地図上の迂回路を通り、</p>
          <p class="sta-gijido-indent">
            通用門（永田町駅・赤坂見附駅側）へお回りください。
          </p>
        </v-col>
      </v-row>

      <div class="movies">
        <div v-if="$vuetify.breakpoint.xs">
          <video :width="$vuetify.breakpoint.width * 0.8" controls>
            <source src="/movies/info_map_nagata_mv.mp4" type="video/mp4" />
          </video>
          <video :width="$vuetify.breakpoint.width * 0.8" controls>
            <source src="/movies/info_map_akasaka_mv.mp4" type="video/mp4" />
          </video>
          <video :width="$vuetify.breakpoint.width * 0.8" controls>
            <source src="/movies/info_map_gijido_mv.mp4" type="video/mp4" />
          </video>
        </div>
        <div v-else style="display: block">
          <video :width="($vuetify.breakpoint.width / 3) * 0.8" controls>
            <source src="/movies/info_map_nagata_mv.mp4" type="video/mp4" />
          </video>
          <video :width="($vuetify.breakpoint.width / 3) * 0.8" controls>
            <source src="/movies/info_map_akasaka_mv.mp4" type="video/mp4" />
          </video>
          <video :width="($vuetify.breakpoint.width / 3) * 0.8" controls>
            <source src="/movies/info_map_gijido_mv.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AccessPage',
  auth: false,
  head: {
    title: 'アクセス',
  },
})
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: normal;
}

.img {
  border: 9px solid var(--theme-color);
}

#title {
  display: inline-block;
  padding: 0.5rem 3rem 0.5rem 0;
  margin-bottom: 5rem;
  border-bottom: 3px solid var(--theme-color);
  font-family: serif;
  font-weight: bold;
}

.movies {
  text-align: center;
}
</style>
