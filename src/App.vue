<template>
  <transition name="fade" mode="out-in">
    <Begin v-if="begin" v-on:click="startAudio"/>
    <component v-else-if="!isOutro" v-on:click="startAudio" v-bind:is="currentScene"/>
    <Outro v-else/>
  </transition>
  <div>
    <audio autoplay id="audio" preload="auto" :src="audioFile" type="audio/mpeg"></audio>

    <img hidden v-for="pic in picsList"  v-bind:key="pic" :src="require(`@/assets/${pic}`)"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import SceneStore from "@/store/SceneStore";
import GameStore from "@/store/GameStore";
import Outro from "@/components/scenes/Outro.vue";
import Begin from "@/components/scenes/Begin.vue";

@Options({ components: { Outro, Begin } })
export default class App extends Vue {
  private sceneStore = getModule(SceneStore);
  private gameStore = getModule(GameStore);
  private audioElem: HTMLAudioElement | undefined;

  mounted() {
    this.audioElem = document.getElementById('audio') as HTMLAudioElement;
  }

  async startAudio() {
    if (this.audioElem && this.audioElem.duration > 0 && !this.audioElem.paused) {
      //
    } else if (this.audioElem) {
      this.audio_ = this.tracks_.filter(x => x != this.audio_)[
          Math.floor(Math.random() * (this.tracks_.length - 1))
          ];

      await this.audioElem?.play();
    }
  }

  private tracks_ = [
    'Theo-Inside', 'trash', 'fly3', 'HyperDream2', 'LONGWAY', 'Beyond_reach',
    'starflight', 'fly12', 'Surf', 'gladiator', 'Awakening',
  ];


  public picsList = [
    'pharaoh_01.jpg',
    'tomb_03.jpg',
    'pharaoh_02.jpg',
    'galaxy_02.jpg',
    'pharaoh_00.jpg',
  ];

  private audio_: string = this.tracks_.filter(x => x != this.audio_)[
      Math.floor(Math.random() * (this.tracks_.length - 1))
      ];

  get audioFile() {
    if (this.audio_)
      return require(`@/assets/${this.audio_}.mp3`);
    else
      return '';
  }

  get isOutro(): boolean {
    return this.gameStore.outro;
  }

  get begin(): boolean {
    return this.gameStore.begin;
  }

  get currentScene() {
    return this.sceneStore.currentScene;
  }
}
</script>

<style lang="stylus">
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
html
  background-color rgb(28, 32, 43)
  color #a5b2c0
#app
  font-family Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-weight 400
  text-align center
  margin-top 60px
  font-size: 1.27em

.fade-enter-active
.fade-leave-active
  transition: opacity .25s ease

.fade-enter-from
.fade-leave-to
  opacity: 0
.text-success
  color: #28a745 !important
</style>
