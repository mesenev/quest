<template>
  <div class="DefaultScene">
    <div v-html="descriptionScene"/>
    <img :src="picture" alt="ololo epta"/>
    <div class="actions">
      <SceneOption v-for="item in optionsGetter" v-bind:key="item" :dataCreate="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Options, Vue } from 'vue-class-component';
import GameStore from '@/store/GameStore';
import SceneStore from '@/store/SceneStore';
import SceneOption from "@/components/common/SceneOption.vue";
import { DefaultOption } from "@/store/DefaultOption";

export interface Scene {
  nameScene: string;
  descriptionScene: string;
}

@Options({ components: { SceneOption } })
export default class DefaultScene extends Vue implements Scene {
  public descriptionScene!: string;
  public nameScene!: string;
  protected picName!: string;
  protected gameStore = getModule(GameStore);
  protected sceneStore = getModule(SceneStore);
  protected options: DefaultOption[] = [];

  public get optionsGetter(): DefaultOption[] {
    return this.options;
  }
  public get picture(){
    return `@/assets/${this.picName}.jpg`;
  }
}
</script>
<style lang="stylus" scoped>

</style>