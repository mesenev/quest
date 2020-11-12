<script lang="ts">

import DefaultScene from "@/components/common/DefaultScene.vue";
import  DefaultOption from "@/store/DefaultOption";

export default class CastleScene extends DefaultScene {
  public nameScene = "Sad";
  public descriptionScene = "Vy nakhodites' na chudesnoy polyane i vokrug vas poyut ptichki i" +
      " rastut chudesnie cvety. Vy chuvstvuete umirotvorenie.";

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
            'Pereity v Zamok',
            () => {
              this.store.changeScene('castle');
            }),
    ];
  }
}

</script>

<style scoped lang="stylus">
.DefaultScene
  width: 70%
</style>
