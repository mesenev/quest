<template>
  <div class="state">
    <ul>
      <li>health: {{ health }}/100</li>
      <li>money: 0</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import GameStore from '@/store/GameStore';


export default class State extends Vue {
  private store = getModule(GameStore);

  get health(){
  }
}
</script>

<style scoped lang="stylus">
.state
  position: absolute
  top: 20%
  left: 71%
</style>
