<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption } from "@/store/DefaultOption";
import { getModule } from "vuex-module-decorators";
import SceneStore from "@/store/SceneStore";


export default class SolveInit extends DefaultScene {
  public nameScene = "SolveInit";
  picName = 'tomb_03';
  public descriptionScene =
      " Вы проследовали за Джоксом к пирамиде." +
      " Вход в единственную доступную комнату был накрыт специальным защитным полем.<br>" +
      " - Дальше я не пойду, - Индий пожал вам руку на прощание и махнул рукой," +
      " - Ну, прощайте, а я пока предупрежу археологов, чтобы они экстренно эвакуировались.<br>" +
      " - А вы куда?<br>" +
      " - В бомбоубежи... в смысле, подготовить холодное шампанское для празднования." +
      " Удачи вам, и пусть песок вам будет пухом...<br>" +
      " С этими словами он бегом рванул в сторону лагеря.<br>" +
      " <br>" +
      " Вы вошли в комнату. Прямо перед вами находилась дверь, украшенная резьбой," +
      " изображающей различных животных. Возле двери стояли семь статуэток низших богов," +
      " каждая из которых находилась в неглубокой выемке. Согласно \"Малому справочнику Старших Богов\"" +
      " и \"Большому справочнику Младших\", это были Арес, Вмаз, Звер, Зевс, Зема, Марс и Мерс." +
      " Каждая статуэтка держала в руках ромбовидную каменную призму, покрытую древнеугупетскими письменами." +
      " На вратах в пирамиду вы заметили выемку, точно подходящую для этих ключей, точнее, одного из них.<br>" +
      " <br>" +
      " Итак, каким ключом вы будете открывать гробницу?"

  private checkAnswer(name: string) {
    if (this.gameStore.god == name)
      getModule(SceneStore).changeScene('Correct');
    else
      getModule(SceneStore).changeScene('Fail');
  }

  options = [
    new DefaultOption(
        'Взять ключ Ареса',
        () => this.checkAnswer('арес'),
    ),
    new DefaultOption(
        'Взять ключ Вмаза',
        () => this.checkAnswer('вмаз'),
    ),
    new DefaultOption(
        'Взять ключ Звера',
        () => this.checkAnswer('звер'),
    ),
    new DefaultOption(
        'Взять ключ Зевса',
        () => this.checkAnswer('зевс'),
    ),
    new DefaultOption(
        'Взять ключ Земы',
        () => this.checkAnswer('зема'),
    ),
    new DefaultOption(
        'Взять ключ Марса',
        () => this.checkAnswer('марс'),
    ),
    new DefaultOption(
        'Взять ключ Мерса',
        () => this.checkAnswer('мерс'),
    ),
  ];
}
</script>

