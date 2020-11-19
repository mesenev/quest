<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption, DefaultOptionTransition } from "@/store/DefaultOption";

export default class Intro extends DefaultScene {
  public nameScene = "Intro";
  picName = "galaxy_02";
  public descriptionScene =
      ' Джокс обрадовано протянул вам шкатулку и семь статуэток. Вы осмотрели статуэтки...\n' +
      ' - Не понял.\n' +
      ' - Что случилось?\n' +
      ' - А как понять, кто тут кто? На них не написаны имена.\n' +
      ' - Но ведь они отличаются? Смотрите - вот эта, в очках.' +
      ' У другой все лицо испачкано. Вот прикольный толстячок и статуэтка симпатичного паренька.' +
      ' Как-нибудь ведь можно догадаться?';
  private agreement = ' - Конечно! Я специально прихватил рукопись с собой...'
  private agreementOptions = [
      new DefaultOptionTransition(
          'Далее...',
          'LegendIntro',

      ),
  ];
  // noinspection JSUnusedGlobalSymbols

  options = [
    new DefaultOption(
        'Можно еще раз услышать легенду?',
        () => {
          this.descriptionScene = this.agreement;
          this.options = this.agreementOptions;
        },
    ),
    new DefaultOptionTransition(
        'Отойдите и не мешайте, я попробую открыть шкатулку',
        '',
    ),
      new DefaultOptionTransition(
        'Нет, я, пожалуй, не буду рисковать...',
        'success',
      ),
  ];
}
</script>