<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";

export default class ChitchatIntro extends DefaultScene {
  public nameScene = "ChitchatIntro";
  public descriptionScene = " - Разумеется, она никуда от нас не денется, да и время поболтать у нас есть." +
      " Но боюсь, что <span>мои познания не помогут</span> вам разгадать секрет гробницы." +
      " Так что, может, не будем отвлекаться на бесполезную, хотя, несомненно," +
      " увлекательную беседу, и займемся делом?";

  options = [
    new DefaultOptionTransition(
        'Думаю, пара веселых историй о ваших подвигах' +
        ' поможет мне расслабиться и со свежими силами приступить к разгадке тайн',
        'ChitchatFirst'
    ),
    new DefaultOptionTransition(
        'Вы правы, лучше приступить к делу - расскажите мне эту легенду',
        'LegendIntro'
    ),
  ];
}
</script>
