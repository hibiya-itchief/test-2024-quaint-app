<template>
  <v-app>
    <v-container>
      <h1 id="title">ヘルプ</h1>
      <v-row justify="center">
        <v-col cols="12">
          <div
            style="border-left: 5px solid var(--theme-color); padding: 2px 8px"
          >
            <h2>
              オンライン整理券の<br />
              使い方ガイド
            </h2>
            <br />

            <div>
              <v-card flat :ripple="false" @click="g1 = !g1">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>ログインの方法</h3>
                </div>
              </v-card>
              <p v-show="g1" class="pl-5 pt-2 fade-in">
                画面左上の<span style="color: var(--theme-color)"> ≡ </span
                >（三本線のメニュー）をタップし、「ログイン」をタップするとログイン画面が表示されます。ご自身のアカウント名とパスワードを入力してください。<br />
                <br />
                【生徒の方へ】<br />
                学校のアカウント(〜@metro.ed.jpで終わるアカウント)を使ってログインしてください。<br />
                <br />
                【保護者の方へ】<br />
                各ご家庭にアカウントを1つ配布しています。<br />
                <br />
                【一般の方へ】<br />
                受付にてアカウントを配布しております。<br />
                <br />
                詳しくは<NuxtLink to="/system">整理券制度</NuxtLink
                >のページをご覧ください。
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="g2 = !g2">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>｢探す｣ページの使い方</h3>
                </div>
              </v-card>
              <p v-show="g2" class="pl-5 pt-2 fade-in">
                ｢探す｣ページでは、全クラス劇、Showcase、部活動、外部団体が紹介されています。<br />
                <br />
                ・ページ上部の検索ボックスに、劇名や説明文に含まれる語句を入力すると、該当する団体のみ表示されます。<br />
                ・検索ボックス下の各ボタンで、タグによる絞り込み、並び順の変更、昇順・降順の切り替えができます。<br />
                ・旗マークを選択するとブックマークした団体のみを表示します。ブックマークは各団体の詳細ページ内の旗マークをタップすると登録できます。
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="g3 = !g3">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>整理券取得の方法</h3>
                </div>
              </v-card>
              <p v-show="g3" class="pl-5 pt-2 fade-in">
                配布されているアカウントでログインしてください。 <br />
                下のバーの｢探す｣ページの中から観劇したい劇をタップし、表示されている公演を選択すると確認の画面が表示されます。よく確認してから｢はい｣を押してください。<br />
                その後｢整理券｣ページに該当の整理券が表示されていれば取得できています。整理券取得後は必ずご確認ください。<br />
                また、<NuxtLink to="/system">整理券制度</NuxtLink
                >のページもご覧ください。<br />
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="g4 = !g4">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>一度取得した整理券をキャンセルしたい</h3>
                </div>
              </v-card>
              <p v-show="g4" class="pl-5 pt-2 fade-in">
                サイト下部の「整理券」を押すと、取得している整理券の一覧が表示されます。<br />
                該当するチケットをタップすると「キャンセル」ボタンが出てきますので、タップしていただくとキャンセルができます。<br />
                また<span
                  style="
                    color: var(--theme-color);
                    text-decoration: underline;
                    text-decoration-color: var(--theme-color);
                  "
                  >公演開始20分前からは整理券をキャンセルすることができなくなります。</span
                >ご注意ください。
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="g5 = !g5">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>クラス劇の投票の方法</h3>
                </div>
              </v-card>
              <p v-show="g5" class="pl-5 pt-2 fade-in">
                【生徒へ】<br />
                生徒は投票できません。<br />
                <br />
                【一般・保護者の方へ】<br />
                当サイトから投票が可能です。公演を見たクラスのみ投票できます。<br />
                三年生については外部審査員の方に判定してもらうため、投票できません。<br />
                <NuxtLink to="/votes">投票はこちら</NuxtLink>
                <br />
              </p>
              <v-divider />
            </div>
          </div>
          <div
            class="my-10"
            style="border-left: 5px solid var(--theme-color); padding: 2px 8px"
          >
            <h2>よくあるトラブル、質問</h2>

            <div>
              <v-card flat :ripple="false" @click="q1 = !q1">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>アカウント名/パスワードを忘れた</h3>
                </div>
              </v-card>
              <p v-show="q1" class="pl-5 pt-2 fade-in">
                一般の方は再度アカウントを配布しますので、体育棟1階、整理券相談所までお越しください。<br />
                保護者で優先券を取ったアカウントを紛失してしまった方は各クラスの受付で優先券を取った旨を伝えてください。<br />
                <!--<NuxtLink to="/map">校内マップ</NuxtLink><br />-->
                <NuxtLink to="/schedule">配布スケジュール</NuxtLink><br />
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q2 = !q2">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>ログインしているかどうか確認したい</h3>
                </div>
              </v-card>
              <p v-show="q2" class="pl-5 pt-2 fade-in">
                画面左上の<span style="color: var(--theme-color)"> ≡ </span
                >(三本線のメニュー)をタップしてください。<br />
                ログイン中であればアカウント名が表示されます。<br />
                <v-img
                  class="img"
                  max-width="300"
                  src="/images/helpLogin.png"
                  alt="ログイン時の表示"
                />
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q3 = !q3">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>ログインしているのに整理券が取れない</h3>
                </div>
              </v-card>
              <p v-show="q3" class="pl-5 pt-2 fade-in">
                整理券は公演ごとに配布時間が決まっています。配布時間外に整理券を取ることはできません。<br />
                また、既に取得している整理券と同じ時間の整理券を取る事はできません。<br />
                一部の公演では整理券を取ることができる人に制限がかかっている可能性があります。<br />
                <br />
                詳しくは<NuxtLink to="/system">整理券制度</NuxtLink
                >のページをご覧ください
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q4 = !q4">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>「探す」ページで劇の一覧が表示されない</h3>
                </div>
              </v-card>
              <p v-show="q4" class="pl-5 pt-2 fade-in">
                ブックマークだけを表示する設定になっている可能性があります。<br />
                ページ上部の旗のマークに色がついていないことを確認してください。<br />
                <v-img
                  class="img"
                  max-width="300"
                  src="/images/helpBookmark.png"
                  alt="ブックマーク表示時の画像"
                />
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q5 = !q5">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>ページが表示されない、重くて動かない</h3>
                </div>
              </v-card>
              <p v-show="q5" class="pl-5 pt-2 fade-in">
                お使いの端末で通信の速度制限がかかっている場合、読み込みが遅くなる場合があります。ご了承ください。<br />
                <br />
                また、人が密集しているとその付近のモバイルデータ通信の回線が混み合う可能性があります。屋外、もしくは窓や建物入口の付近では繋がりやすくなることがありますので場所を変えてお試しください。<br />
                <br />
                他にも、お使いの端末の設定から3Gに切り替えていただくと繋がりやすくなることがありますのでお試しください。
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q6 = !q6">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>校内マップがよく分からない</h3>
                </div>
              </v-card>
              <p v-show="q6" class="pl-5 pt-2 fade-in">
                お近くの日比谷生にお声がけください。<br />
                <br />
                また、<NuxtLink to="/map">校内マップ</NuxtLink
                >のページもご覧ください。
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q7 = !q7">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>取得したはずの整理券が表示されない</h3>
                </div>
              </v-card>
              <p v-show="q7" class="pl-5 pt-2 fade-in">
                自分がログインしているかどうかご確認ください。<br />
                ログインしていない場合、整理券は表示されません。<br />
                ログインしていても整理券が表示されない場合は、整理券が取得できていませんのでもう一度お試しください。<br />
                <br />
              </p>
              <v-divider />
            </div>

            <div>
              <v-card flat :ripple="false" @click="q8 = !q8">
                <div class="pa-5 questions-box">
                  <v-icon large color="theme_color"
                    >mdi-exclamation-thick</v-icon
                  >
                  <h3>このページを見ても解決しなかったトラブルや質問がある</h3>
                </div>
              </v-card>
              <p v-show="q8" class="pl-5 pt-2 fade-in">
                体育棟1階、整理券相談所までお越しください。<br />
                <!--<NuxtLink to="/map">校内マップ</NuxtLink><br />-->
                <NuxtLink to="/schedule">配布スケジュール</NuxtLink>
              </p>
              <v-divider />
            </div>
          </div>

          <h3 class="my-10">
            オンライン整理券システム・当サイトに関して、<br />
            何かご不明な点がありましたら、体育棟1階、整理券相談所までお越しください。<br />
            <!--<NuxtLink to="/map">校内マップ</NuxtLink><br />-->
            <NuxtLink to="/schedule">配布スケジュール</NuxtLink>
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'HelpPage',
  auth: false,
  data() {
    return {
      g1: false,
      g2: false,
      g3: false,
      g4: false,
      g5: false,
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
    }
  },
  head: {
    title: 'ヘルプ',
  },
})
</script>

<style scoped>
h2 {
  text-align: center;
  font-weight: normal;
}

h3 {
  text-align: center;
  font-weight: normal;
}

#title {
  display: inline-block;
  padding: 0.5rem 3rem 0.5rem 0;
  margin-bottom: 5rem;
  border-bottom: 3px solid var(--theme-color);
  font-family: serif;
  font-weight: bold;
}

.questions-box {
  display: flex;
  justify-content: start;
  align-items: center;
}

.questions-mark {
  font-weight: bold;
  color: var(--theme-color);
}

.fade-in {
  animation-name: fade-in-name;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fade-in-name {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.img {
  border: 9px solid var(--theme-color);
}
</style>
