<template>
  <div class="DefaultScene">
    <h1>{{ nameScene }}</h1>
    <h2>{{ descriptionScene }}</h2>
    <div class="actions">
      <SceneOption v-for="item in optionsGetter" v-bind:key="item" :dataCreate="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Options, Vue } from 'vue-class-component';
import Store from '@/store/GameStore';
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
  protected store = getModule(Store);
  protected options: DefaultOption[] = [];

  public get optionsGetter(): DefaultOption[] {
    return this.options;
  }
}
</script>
<style lang="stylus" scoped>

</style>