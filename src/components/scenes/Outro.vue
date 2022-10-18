<template>
  <img :src="picture" class="wallpaper" />
  <div class="wrapper">
    <div>
      Прекрасно! Эта гробница оказалась настоящим самородком для археологии и нашего бюджета.<br>
      <br>
      Древние знания исчезнувшей цивилизации не имеют цены, я уже не говорю о сокровищах фараона
      Перехотепа Тринадцатого. Вам причитается просто огромное вознаграждение за помощь. Но, к
      сожалению, Галактическое Археологическое Общество настаивает на переписи и оценке найденных
      предметов, поэтому до завершения процедуры мы не можем заплатить ваши 0,000025% от стоимости
      находки. <br>
       <br>
      Но не расстраивайтесь - Институт Коммерческой Археологии выплачивает вам
      <span class="text-success">65535 cr</span>
      за вашу помощь... К тому же, я думаю, лет через 300-400 ГАО закончит опись найденных предметов,
      и тогда вы или ваши потомки получите причитающееся вам вознаграждение...
    </div>
  </div>
</template>

<script>

import { Vue } from "vue-class-component";

export default class Success extends Vue {
  get picture() {
    return require("@/assets/img.png");
  }
}
</script>

<style scoped lang="stylus">
.wallpaper
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  z-index -1
.wrapper
  background-color white
  opacity .5
  width 60%
  align-self center
  vertical-align center
  margin auto auto
  padding 30px
  text-align left
  border-radius 5px
</style>