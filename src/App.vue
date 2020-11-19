<template>
  <component v-bind:is="currentScene"></component>
  <State/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import State from '@/components/State.vue';
import GameStore from '@/store/GameStore';
import SceneStore from "@/store/SceneStore";

@Options({ components: { State } })
export default class App extends Vue {
  private gameStore = getModule(GameStore);
  private sceneStore = getModule(SceneStore);

  get currentScene() {
    return this.sceneStore.currentScene;
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
