<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption, DefaultOptionTransition } from "@/store/DefaultOption";
import { shuffle } from "@/store/GameStore";
import { Options, Vue } from "vue-class-component";

@Options({ components: { DefaultScene } })
export default class AdditionalSolveInit extends Vue {
  public nameScene = "AdditionalSolveInit";
  picName = 'pharaoh_01';
  public descriptionScene =
      ' Вы взяли шкатулку в руки. Семь отверстий, семь статуэток.' +
      ' В первое отверстие - статуэтка старшего брата. Затем - родившегося вторым...' +
      ' Итак далее, до седьмой - младшего брата.<br>' +
      ' <br>' +
      ' У вас семь статуэток, которые немного отличаются друг от друга.' +
      ' Одна из них весело улыбается. Есть статуэтка, которая изображает грязного человечка.' +
      ' Забавный толстячок и статуэтка длинного очкарика. Вот эта статуэтка сжимает в руках меч.' +
      ' Испуганный человечек. Ну и последняя - статуэтка причесывающегося красавчика.<br>' +
      ' <br>' +
      ' Кто из братьев появился на свет первым?';
  progress = [
    'Так, ну а вторым по старшинству был...', 'В третье отверстие подойдет следующий брат -',
    'Средним братом был...', 'Пятым на свет появился брат...',
    'Шестой брат - это...', 'Ну и самый младший...',
    'Ну вот... все статуэтки поставлены на свои места... Как вам кажется.'
  ];
  private fail = ' Вы осторожно взяли шкатулку в руки и последовательно нажали на все статуэтки ' +
      '- именно так, как сказал вам доктор Джокс. К большому разочарованию, ничего не произошло...' +
      ' сначала. Потом раздался легкий щелчок, и шкатулка с тихим шелестом осыпалась на песок,' +
      ' превратившись в горсть серебристой пыли.<br>' +
      ' - О нет! - закричал археолог.<br>' +
      ' - О да, - улыбнулись вы. - Нечего было совать такую ценность в руки первому встречному.' +
      ' И вообще, сначала застраховать нужно было.'
  private success = ' Вы осторожно взяли шкатулку в руки и последовательно нажали на все ' +
      'статуэтки - именно так, как сказал вам доктор Джокс. С легким щелчком крышка откинулась.' +
      ' Внутри оказалась еще одна шкатулка и шесть статуэток. И шкатулка и статуэтки были' +
      ' немного меньше внешнего варианта. Археолог заглянул в шкатулку и издал вопль отчаяния:<br>' +
      ' - О нет, не хватает еще одного ключа!<br>' +
      ' - Только не вздумайте отказаться от своей части сделки - я свою выполнил, - предупредили вы.<br>' +
      ' - Разумеется, вот ваши 500 cr.<br>' +
      ' - Жаль, что у второй шкатулки не полный комплект ключей.' +
      ' Я бы не отказался заработать еще... Ну ладно, если найдете ключ, ' +
      'отправьте визиограммку на любую базу рейнджеров. На мое имя - до востребования. Прощайте.'
  private progressInd = -1;
  private chosenOptions = '';

  private handleAnswer(filter: string) {
    this.chosenOptions += filter[0] + filter[1];
    this.options = this.options.filter((x: DefaultOption) => x.text != filter)
    this.progressInd += 1;
    this.descriptionScene = this.progress[this.progressInd];
  }

  private answerChecked = false;

  private checkAnswer() {
    this.answerChecked = true;
    if (this.chosenOptions != 'ОчВоТоКрВеИсГр') {
      this.descriptionScene = this.fail;
    } else {
      this.descriptionScene = this.success;
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

