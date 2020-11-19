<template>
  <transition name="fade" mode="out-in">
    <component v-if="!isOutro" v-bind:is="currentScene"/>
    <Outro v-else/>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import SceneStore from "@/store/SceneStore";
import GameStore from "@/store/GameStore";
import Outro from "@/components/scenes/Outro.vue";

@Options({ components: { Outro } })
export default class App extends Vue {
  private sceneStore = getModule(SceneStore);
  private gameStore = getModule(GameStore);
  get isOutro(): boolean {
    return this.gameStore.outro;
  }
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

.fade-enter-active
.fade-leave-active
  transition: opacity .25s ease

.fade-enter-from
.fade-leave-to
  opacity: 0
</style>
