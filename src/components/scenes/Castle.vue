<template>
  <div class="DefaultScene">
    <h1>{{ descriptionScene }}</h1>
    <ul>
      <li v-for="item in list" v-bind:key="item"> {{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({ props: { descriptionScene: String } })
export default class DefaultScene extends Vue {
  public descriptionScene = "Vy nakhodites' v roskoshnom zamke." +
      " Proidya straju vy okazyvaetes' v bol'lshom zale, " +
      "gde skuchaet princessa :C."
}
</script>

<style scoped lang="stylus">
.DefaultScene
  width: 70%
</style>