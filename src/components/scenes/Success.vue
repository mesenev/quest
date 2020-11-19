<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption } from "@/store/DefaultOption";

export default class Success extends DefaultScene {
  public nameScene = "Success";
  picName = "pharaoh_00";
  public descriptionScene =
      ' В любом случае, ваша миссия выполнена, так что можно возвращаться на планету Земля за своим гонораром.' +
      ' Вы пожелали удачи археологу, и вернулись на свой корабль,' +
      ' мечтая убраться подальше с этой жаркой планеты.\n' +
      ' \n' +
      ' "Все - следующее задание будет исключительно в заснеженных вершинах или на водной планете.' +
      ' На худой конец - на голом астероиде", - заклинали вы самого себя, прекрасно сознавая,' +
      ' что все зависит от суммы награды. Зато теперь вы точно знаете, что иногда хороший кондиционер' +
      ' важнее тахионного резца или мощного радара.'
  options = [
    new DefaultOption(
        'Вернуться на корабль',
        () => {
          this.gameStore.mutateOutro();
        }
    ),
  ];
}

</script>
