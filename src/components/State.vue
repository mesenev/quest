<template>
  <div class="state">
    <span><div v-html="money"></div></span>
    <span><div v-html="tip"></div></span>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import GameStore from '@/store/GameStore';


export default class State extends Vue {
  private store = getModule(GameStore);

  get money(): string {
    return `У вас ${this.store.credits} cr`;
  }

  get tip(): string {
    return this.store.godDescription;
  }
}
</script>
<style lang="stylus">
.state
  display flex
  flex-direction column
  span
        width: 75%;
</style>