<template>
  <div class="DefaultScene">
    <h1>{{ descriptionScene }}</h1>
    <ul>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({ props: { descriptionScene: String } })
export default class DefaultScene extends Vue {
  public descriptionScene = "Vy nakhodites' na chudesnoy polyane i vokrug vas poyut ptichki i" +
      " rastut chudesnie cvety. Vy chuvstvuete umirotvorenie." ;
}
</script>

<style scoped lang="stylus">
.DefaultScene
  width: 70%
</style>