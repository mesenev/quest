<template>
  <DefaultScene :options="options" :picName="picName">
<span>
  - Разумеется, она никуда от нас не денется, да и время поболтать у нас есть.
  Но боюсь, что <span class="text-success">мои познания не помогут вам</span>
  разгадать секрет гробницы. Так что, может, не будем отвлекаться на бесполезную,
  хотя, несомненно, увлекательную беседу, и займемся делом?
</span>
  </DefaultScene>
</template>
<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";

@Options({ components: { DefaultScene } })
export default class ChitchatIntro extends Vue {
  public nameScene = "ChitchatIntro";
  public picName = "galaxy_02";


  options = [
    new DefaultOptionTransition(
        'Думаю, пара веселых историй о ваших подвигах' +
        ' поможет мне расслабиться и со свежими силами приступить к разгадке тайн',
        'ChitchatFirst'
    ),
    new DefaultOptionTransition(
        'Вы правы, лучше приступить к делу - расскажите мне эту легенду',
        'LegendFirst'
    ),
  ];
}
</script>
