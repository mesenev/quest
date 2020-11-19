<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";

export default class ChitchatBook extends DefaultScene {
  public nameScene = "ChitchatBook";
  picName = "tomb_03";
  public descriptionScene = ' - А вы и впрямь неплохо разбираетесь в древней литературе!' +
      ' Это действительно "Большой справочник Младших Богов", а еще у нас есть "Малый справочник Старших Богов",' +
      ' найденные во время раскопок гробницы фараона Серемхотета. И именно издание Верховного жреца Склерозуса,' +
      ' дополненное, 5000 г до н.э., тираж всего 3 шт.!\n' +
      'C помощью этой книги в картинках нам удалось идентифицировать статуэтки богов в гробнице - ' +
      'это оказались Арес, Вмаз, Звер, Зевс, Зема, Марс и Мерс. Вот так-то... Только руками книги не трогайте' +
      ' - они очень ветхие и могут рассыпаться.'

  options = [
    new DefaultOptionTransition(
        'Неплохие книжицы - я бы даже сказал, убойные... При весе-то 7 килограмм!',
        'ChitchatFirst',
    ),
  ];
}
</script>
