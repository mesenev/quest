<template>
  <DefaultScene :options="options" :picName="picName">
    <span v-if="!this.gameStore.chatInit">
       - Хорошо, - доктор Джокс откинулся в кресле и жестом предложил вам угощаться из мини-бара.
      - Признаться, давненько мне не приходилось общаться с разбирающимся в предметах старины рейнджером.
      Последний был этот пеленг - кажется... лякуша Борзухан, или Барзумян? Он пытался мне продать
      старинный электрический миксер под видом древнего пеленгского орудия пыток - Кишковыворота,
      использовавшегося Дзухаллагом более тысячи лет назад!<br> - Да уж, мошенников хватает.
      Что интересного вы можете мне рассказать?<br> - Да, пожалуй, и на неделю беседы не хватит.
      Могу рассказать вам историю Черного Странника, популярную среди археологов-пустынников,
      хотя, пожалуй, она слишком страшная.
      Если вас интересует, могу показать переведенный профессором Шпрехом Зидочем
      <span class="text-success">фрагмент дневника</span> сына Перехотепа - тот самый, про пирамиду.
      Или <span class="text-success">руку мумии</span> фараона Ханамнеса.
      А может, загадать вам <span class="text-success">древнеугупетскую загадку</span>?
      Вы похожи на азартного человека.
      <br> <br> Археолог умолк и уставился на вас.
      Климатизаторы <span class="text-success">"Отморозко"</span> тихо шелестели, навевая приятную прохладу.
    </span>
    <span v-else>
     Археолог приветливо смотрит на вас, медленно потягивая прохладное мартини из запотевшего бокала.
      Похоже, он нашел в вас приятного собеседника и рад поделиться своими знаниями.
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
export default class ChitchatFirst extends Vue {
  public static nameScene = "ChitchatFirst";
  picName = "galaxy_02";
  private gameStore = getModule(GameStore);


  options = [
    new DefaultOptionTransition(
        'Вы прекрасный собеседник и замечательный специалист по древностям,' +
        ' но у нас есть дело - расскажите легенду о братьях',
        'LegendFirst',
    ),
    new DefaultOptionTransition(
        'Я с удовольствием почитал бы дневник в переводе от профессора Зидоча.' +
        ' Его эксцентрично-литературные переводы меня восхищают',
        'ChitchatDiary',
        () => {
          this.gameStore.setFlagTo('diary')
        },
        null,
        () => {
          return !this.gameStore.diary;
        }
    ),
    new DefaultOptionTransition(
        'Рука мумии? Думаю, что буду просто счастлив увидеть такую редкость' +
        ' - если вас не затруднит, доктор',
        'ChitchatMummy',
        () => {
          this.gameStore.setFlagTo('mummy')
        },
        null,
        () => {
          return !this.gameStore.mummy;
        }
    ),
    new DefaultOptionTransition(
        'А что это у вас лежит? Не "Малая ли Энциклопедия Богов" самого Склерозуса?',
        'ChitchatBook',
        () => {
          this.gameStore.setFlagTo('book')
        },
        null,
        () => {
          return !this.gameStore.book;
        }
    ),
    new DefaultOptionTransition(
        'Я просто обожаю всяческие загадки.' +
        ' Думаю, ваша не так хороша, как вы считаете. Может, загадаете ее мне?',
        'ChitchatPuzzle',
        () => {
          this.gameStore.setFlagTo('puzzle')
        },
        null,
        () => {
          return !this.gameStore.puzzle;
        }
    ),
    new DefaultOptionTransition(
        'Кстати, доктор Джокс, может, расскажите,' +
        ' что вы искали на планете Граал - я много слышал о вашей экспедиции...',
        'ChitchatGraal',
        () => {
          this.gameStore.setFlagTo('graal')
        },
        null,
        () => {
          return !this.gameStore.graal;
        }
    ),
  ];
}
</script>
