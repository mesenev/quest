<template>
  <div class="DefaultScene">
    <div class="scene">
      <slot>

      </slot>
    </div>
    <div class="image" v-if="picName"><img class="" :src="picture" alt="ololo epta"/>
    </div>
    <div class="actions">
      <div class="actions-container">
        <SceneOption v-for="item in optionsGetter" v-bind:key="item" :Option="item"/>
      </div>
      <State class="state"/>
    </div>
  </div>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators';
import { Options, Vue } from 'vue-class-component';
import GameStore from '@/store/GameStore';
import SceneOption from "@/components/common/SceneOption.vue";
import { DefaultOption } from "@/store/DefaultOption";
import State from "@/components/State.vue";
import { Prop } from "vue-property-decorator";


@Options({ components: { SceneOption, State } })
export default class DefaultScene extends Vue {
  public nameScene!: string;
  @Prop() protected picName = '';
  protected gameStore = getModule(GameStore);
  @Prop() options: DefaultOption[] = [];

  public get optionsGetter(): DefaultOption[] {
    return this.options.filter(x => x.isShow);
  }


  public get picture() {
    return require(`@/assets/${this.picName}.jpg`);
  }
}
</script>
<style lang="stylus">
.DefaultScene
  display: flex
  margin 0 50px
  flex-direction: row
  flex-wrap: wrap
  align-content: space-between



.scene
  flex 0 0 60%
  text-align left
  padding 30px


.image
  flex 0 0 33%
  max-width 33%
  flex-direction: column
  justify-content center

  img
    width 100%

.state
  display flex
  justify-content: center;
  flex: 0 0 32%

.actions
  flex 0 0 100%
  display: flex;
  padding 20px
  align-content: space-between
  flex-direction row

.actions-container
  flex: 0 0 66%
</style>