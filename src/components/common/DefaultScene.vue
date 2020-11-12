<template>
  <div class="DefaultScene">
    <h1>{{ nameScene }}</h1>
    <h2>{{ descriptionScene }}</h2>
    <div class="actions">
      <SceneOption v-for="item in options" v-bind:key="item" :dataCreate="item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Options, Vue } from 'vue-class-component';
import Store from '@/store/GameStore';
import DefaultOption from "@/store/DefaultOption";
import SceneOption from "@/components/common/SceneOption.vue";

@Options({
      components: { SceneOption }
    }
)
export default class DefaultScene extends Vue {
  public descriptionScene!: string;
  public nameScene!: string;
  protected store = getModule(Store);

  public get options(): DefaultOption[] {
    return [
      new DefaultOption(
          'option to choose #1',
          () => {
            console.log('hello from option 1!');
            this.store.decreaseHealthAction(1);
          }),
      new DefaultOption(
          'option to choose #2',
          () => {
            console.log('hello from option 2!');
            this.store.decreaseHealthAction(100);
          }),
      new DefaultOption(
          'Pereity v Sad',
          () => {
            this.store.changeScene('castle');
          }),
    ];
  }
}
</script>
