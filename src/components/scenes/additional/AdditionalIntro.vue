<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption, DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
@Options({ components: { DefaultScene } })
export default class AdditionalIntro extends Vue {
  public nameScene = "AdditionalIntro";
  picName = "galaxy_02";
  public descriptionScene =
      ' Джокс обрадовано протянул вам шкатулку и семь статуэток. Вы осмотрели статуэтки...<br>' +
      ' - Не понял.<br>' +
      ' - Что случилось?<br>' +
      ' - А как понять, кто тут кто? На них не написаны имена.<br>' +
      ' - Но ведь они отличаются? Смотрите - вот эта, в очках.' +
      ' У другой все лицо испачкано. Вот прикольный толстячок и статуэтка симпатичного паренька.' +
      ' Как-нибудь ведь можно догадаться?';
  private agreement = ' - Конечно! Я специально прихватил рукопись с собой...'
  private agreementOptions = [
      new DefaultOptionTransition(
          'Далее...',
          'LegendFirst',

      ),
  ];

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
        'AdditionalSolveInit',
    ),
      new DefaultOptionTransition(
        'Нет, я, пожалуй, не буду рисковать...',
        'Success',
      ),
  ];
}
</script>