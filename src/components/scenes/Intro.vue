<template>
  <DefaultScene :options="options" :picName="picName">
      <span>  - Мы обладаем информацией, которая может помочь попасть в гробницу,
        но так и не сумели пока правильно ею воспользоваться.
        Вот, смотрите - это дневник одного из сыновей фараона Перехотепа.
        В нем сказано, что при строительстве хранителем ключа сделали бога, покровительствующего
        <span class="text-success">{{ tip }}</span> сыновьям фараона.
        Цифры - это порядок старшинства: 1 - старший, 2 - появился на свет вслед за ним,
        и так до седьмого сына, самого младшего.
        Угуптяне верили, что если первая буква имени человека встречается в имени бога,
        то этот бог является его покровителем.
        Например, бог Арес покровительствует людям, чьи имена начинаются с букв А, Р, Е или С.
        Значит, статуэтка бога, в имени которого есть первые буквы имен этих четырех сыновей
        фараона, и будет хранителем ключа.<br>
        <br>
        - А что вы знаете о сыновьях фараона?
        <br>
          <br>
        - У фараона Перехотепа Тринадцатого было семь сыновей.
        Их звали
        <span class="text-success">
          Анусптис, Вертепопес, Ептимат, Замполет, Мойхренес, Рамзец и Серемтут.
        </span>
        Но нам неизвестен <span class="text-success">порядок их старшинства</span>!
        Мы изучили все источники, но мнения моих коллег по этому поводу разошлись.
        Наиболее полная информация содержится в одной легенде, связанной со строительством пирамиды.
        Возможно, вам удастся установить порядок появления на свет сыновей фараона, изучив эту легенду?
        А то наши умники уже охрипли, ругаясь. Боюсь, как бы до мордобоя не дошло...
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
export default class Intro extends Vue {
  public static nameScene = "Intro";
  public picName = "galaxy_02";
  private gameStore = getModule(GameStore);

  // noinspection JSUnusedGlobalSymbols
  beforeCreate() {
    this.gameStore.selectGod();
  }

  get tip() {
    return this.gameStore.tip;
  }

  options = [
    new DefaultOptionTransition(
        'Эй, доктор Джокс - зачем так спешить?' +
        ' Пирамида никуда не денется... пока ключ не повернешь.' +
        ' Может, поболтаем об археологии?',
        'ChitchatIntro',
    ),
    new DefaultOptionTransition(
        'Я уверен, что смогу найти верное решение, услышав эту легенду.' +
        ' Начинайте ваш рассказ, доктор Джокс!',
        'LegendFirst',
    ),
  ];
}
</script>