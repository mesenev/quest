<template>
  <DefaultScene :options="options" :picName="picName">
<span>
   В любом случае,
  <span class="text-success">ваша миссия выполнена</span>,
  так что можно возвращаться на планету <span class="text-success">Земля</span>
  за своим гонораром. Вы пожелали удачи археологу,
  и вернулись на свой корабль, мечтая убраться подальше с этой жаркой планеты.
  <br> <br> "Все - следующее задание будет исключительно в заснеженных
  вершинах или на водной планете. На худой конец - на голом астероиде",
  - заклинали вы самого себя, прекрасно сознавая, что все зависит от суммы награды.
  Зато теперь вы точно знаете, что иногда хороший кондиционер важнее тахионного резца
  или мощного радара.</span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import GameStore from "@/store/GameStore";

@Options({ components: { DefaultScene } })
export default class Success extends Vue {
  public static nameScene = "Success";
  picName = "pharaoh_00";
  private gameStore = getModule(GameStore);
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
