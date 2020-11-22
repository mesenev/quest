<template>
  <DefaultScene :options="options" :picName="picName">
  <span v-if="progressInd === -1">
    Вы взяли шкатулку в руки.
    Семь отверстий, семь статуэток.
    В первое отверстие - статуэтка старшего брата.
    Затем - родившегося вторым...
    Итак далее, до седьмой - младшего брата.<br>
  <br>
    У вас семь статуэток, которые немного отличаются друг от друга.
    Одна из них <span class="text-success">весело улыбается</span>.
    Есть статуэтка, которая изображает <span class="text-success">грязного человечка</span>.
    Забавный <span class="text-success">толстячок</span>
    и статуэтка длинного <span class="text-success">очкарика</span>.
    Вот эта статуэтка <span class="text-success">сжимает в руках меч</span>.
    <span class="text-success">Испуганный человечек</span>.
    Ну и последняя - статуэтка причесывающегося <span class="text-success">красавчика</span>.
    <br> <br> Кто из братьев появился на свет <span class="text-success">первым</span>?
  </span>
  <span
      v-else-if="(progressInd < progress.length) && result === ''"
      v-html="progress[progressInd]"
  ></span>
    <span v-else-if="result === 'fail'">
       Вы осторожно взяли шкатулку в руки и последовательно нажали на все статуэтки
      - именно так, как сказал вам доктор Джокс. К большому разочарованию, ничего не произошло...
       сначала. Потом раздался легкий щелчок, и шкатулка с тихим шелестом осыпалась на песок,
       превратившись в горсть серебристой пыли.<br>
       - О нет! - закричал археолог.<br>
       - О да, - улыбнулись вы. - Нечего было совать такую ценность в руки первому встречному.
       И вообще, сначала застраховать нужно было.
    </span>
    <span v-else>
      Вы осторожно взяли шкатулку в руки и последовательно нажали на все статуэтки
      - именно так, как сказал вам доктор Джокс. С легким щелчком крышка откинулась.
      Внутри оказалась еще одна шкатулка и шесть статуэток.
      И шкатулка и статуэтки были немного меньше внешнего варианта.
      Археолог заглянул в шкатулку и издал вопль отчаяния:
      <br> - О нет, не хватает еще одного ключа!<br>
      - Только не вздумайте отказаться от своей части сделки - я свою выполнил,
      - предупредили вы.<br> - Разумеется, вот ваши <span class="text-success">500</span> cr.<br>
      - Жаль, что у второй шкатулки не полный комплект ключей.
      Я бы не отказался заработать еще...
      Ну ладно, если найдете ключ, отправьте визиограммку на любую базу рейнджеров.
      На мое имя - до востребования. Прощайте.
    </span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption, DefaultOptionTransition } from "@/store/DefaultOption";
import GameStore, { shuffle } from "@/store/GameStore";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";

@Options({ components: { DefaultScene } })
export default class AdditionalSolveInit extends Vue {
  public static nameScene = "AdditionalSolveInit";
  picName = 'pharaoh_01';
  public result = '';
  private gameStore = getModule(GameStore);

  progress = [
    'Так, ну а вторым по старшинству был...', 'В третье отверстие подойдет следующий брат -',
    'Средним братом был...', 'Пятым на свет появился брат...',
    'Шестой брат - это...', 'Ну и самый младший...',
    'Ну вот... все статуэтки поставлены на свои места... Как вам кажется.'
  ];

  private progressInd = -1;
  private chosenOptions = '';

  private handleAnswer(filter: string) {
    this.chosenOptions += filter[0] + filter[1];
    this.options = this.options.filter((x: DefaultOption) => x.text != filter)
    this.progressInd += 1;
  }

  private answerChecked = false;

  private checkAnswer() {
    this.answerChecked = true;
    if (this.chosenOptions != 'ОчВоТоКрВеИсГр') {
      this.result = 'fail';
    } else {
      this.result = 'success';
      this.gameStore.changeCredits(500);
    }
    this.options = [
      new DefaultOptionTransition(
          'Далее', 'Success', undefined, null,
          () => this.answerChecked,
      ),
    ];
  }

  options = shuffle([
    new DefaultOption('Очкарик', () => this.handleAnswer('Очкарик'),),
    new DefaultOption('Грязнуля', () => this.handleAnswer('Грязнуля'),),
    new DefaultOption('Воин', () => this.handleAnswer('Воин'),),
    new DefaultOption('Испуганный', () => this.handleAnswer('Испуганный'),),
    new DefaultOption('Весельчак', () => this.handleAnswer('Весельчак'),),
    new DefaultOption('Толстячок', () => this.handleAnswer('Толстячок'),),
    new DefaultOption('Красавчик', () => this.handleAnswer('Красавчик'),),
    new DefaultOption(
        'Попытаться открыть шкатулку...', () => this.checkAnswer(),
        undefined, () => this.progressInd == 6,
    ),
  ]);
}
</script>

