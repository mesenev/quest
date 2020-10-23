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
import {
  State as VuexState,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class';

const someModule = namespace('');
export default class State extends Vue {
  @VuexState health!: number;
}
</script>

<style scoped lang="stylus">
.state
  position: absolute
  top: 20%
  left: 71%
</style>