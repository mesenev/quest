<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import GameStore from "@/store/GameStore";

@Options({ components: { DefaultScene } })
export default class Success extends Vue {
  public nameScene = "Success";
  picName = "pharaoh_00";
  private gameStore = getModule(GameStore);
  public descriptionScene =
      ' В любом случае, ваша миссия выполнена, так что можно возвращаться на планету Земля за своим гонораром.' +
      ' Вы пожелали удачи археологу, и вернулись на свой корабль,' +
      ' мечтая убраться подальше с этой жаркой планеты.<br>' +
      ' <br>' +
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
