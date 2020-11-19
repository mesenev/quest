<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";

export default class ChitchatGraal extends DefaultScene {
  public nameScene = "ChitchatGraal";
  picName = 'galaxy_02';
  public descriptionScene = ' - Да, собственно говоря, это даже не экспедиция была, ' +
      'а погоня за мечтой. Так сказать, в поисках легенды - секрета вечной жизни.\n' +
      ' По выражению лица Индия Джокса вы поняли, что он просто насмехается над вами.' +
      ' Он взглянул на вас, и его усмешку словно тахионным резцом сдуло.\n' +
      ' - Да шучу я. Просто искал средство от импотенции для одного весьма состоятельного и важного клиента.' +
      ' Имя его, по понятным причинам, я называть не буду.\n' +
      ' - Что, он настолько известен в Галактике?\n' +
      ' - Да нет, просто я уже не так молод - совсем склероз замучил. Запамятовал я.'

  options = [
    new DefaultOptionTransition(
        'Понятно... Романтика, она в сердцах, а суровая правда жизни - в кошельке',
        'ChitchatFirst',
    ),
  ];
}
</script>
