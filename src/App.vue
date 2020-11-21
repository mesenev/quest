<template>
  <Begin v-if="begin" v-on:click="startAudio"/>
  <transition v-else name="fade" mode="out-in">
    <component v-if="!isOutro" v-on:click="startAudio" v-bind:is="currentScene"/>
    <Outro v-else/>
  </transition>
  <div>
    <audio autoplay id="audio" preload="auto" :src="audioFile" type="audio/mpeg"></audio>
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

#app
  font-family Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  font-weight 400
  text-align center
  color #2c3e50
  margin-top 60px
  font-size: 1.3em

.fade-enter-active
.fade-leave-active
  transition: opacity .25s ease

.fade-enter-from
.fade-leave-to
  opacity: 0
.text-success
  color: #28a745 !important
</style>
