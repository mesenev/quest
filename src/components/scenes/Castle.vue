<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import DefaultOption from "@/store/DefaultOption";

export default class CastleScene extends DefaultScene {
  public nameScene = "Castle";
  public descriptionScene = "Vy nakhodites' v roskoshnom zamke." +
      " Proidya straju vy okazyvaetes' v bol'lshom zale, " +
      "gde skuchaet princessa :C.";

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
            this.store.changeScene('garden');
          }),
    ];
  }
}

</script>

<style scoped lang="stylus">
.DefaultScene
  width: 70%
</style>
