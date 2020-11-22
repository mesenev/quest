<template>
    <DefaultScene :options="options" :picName="picName">
  <span>
   Вы взяли ромбический ключ из рук статуэтки и вставили его в паз на вратах.
  Что-то негромко щелкнуло. Пирамида мелко затряслась, и на вас посыпался песок с
  потолка.<br> - Ой, кажется, я что-то напутал, - вслух подумали вы и бросились
  прочь из гробницы. Но у самого выхода вы заметили, как дверь мягко сдвинулась с места...
  Вход в гробницу был открыт! Вы по рации связались с Джоксом, и вскоре десятки ученых
  ползали по всем уголкам пирамиды, восхищенно охая и радостно хохоча.
  Вы вернулись в лагерь, чтобы собрать свои вещи.<br> <br>
  - Вы проделали прекрасную работу, <span class="text-success">Греф</span>,
  - к вам подошел доктор Джокс с какой-то шкатулкой в руках.
  Я уже отправил отчет в ИКАР о ваших заслугах. Но знаете...
  у меня есть к вам личная просьба. Вы только не подумайте,
  я вам заплачу за ваши хлопоты.
  Скажем, <span class="text-success">500</span> cr.
  Прямо здесь и наличными. Вы ничего не теряете в любом случае,
  и можете заработать.<br> - Что я должен сделать?<br>
  - Всего лишь открыть эту шкатулку. Смотрите. Здесь есть семь отверстий.
  И я рядом нашел семь статуэток, которые входят в эти отверстия.
  Как я понял, нужно просто <span class="text-success">вставить статуэтки по порядку</span>
  - и готово! Это статуэтки тех самых братьев, и их нужно расположить в порядке старшинства:
  первая - статуэтка старшего, вторая - родившегося после него, и так далее... Ну как, беретесь?
  </span>
    </DefaultScene>
</template>
<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import GameStore from "@/store/GameStore";

@Options({ components: { DefaultScene } })
export default class Correct extends Vue {
  public static nameScene = "Correct";
  picName = "pharaoh_00";
  private gameStore = getModule(GameStore);

  // noinspection JSUnusedGlobalSymbols
  beforeCreate() {
    this.gameStore.mutateMainSolved();
  }

  options = [
    new DefaultOptionTransition(
        'Пожалуй, я не буду рисковать - кто знает, чем чревата неудачная попытка',
        'Success',
    ),
    new DefaultOptionTransition(
        'Пожалуй, я рискну. Расположить их от старшего до младшего - не так уж и сложно',
        'AdditionalIntro',
    ),
  ];
}

</script>
