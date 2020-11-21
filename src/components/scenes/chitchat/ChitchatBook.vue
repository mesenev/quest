<template>
  <DefaultScene :options="options" :picName="picName">
    <span> - А вы и впрямь неплохо разбираетесь в древней литературе!
      Это действительно "Большой справочник Младших Богов", а еще у нас есть
      "Малый справочник Старших Богов", найденные во время раскопок гробницы
      фараона Серемхотета. И именно издание Верховного жреца Склерозуса,
      дополненное, 5000 г до н.э., тираж всего 3 шт.! <br> C помощью этой
      книги в картинках нам удалось идентифицировать статуэтки богов в гробнице - это оказались
      <span class="text-success">Арес, Вмаз, Звер, Зевс, Зема, Марс и Мерс</span>.
      Вот так-то... Только руками книги не трогайте - они очень ветхие и могут рассыпаться.</span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";

@Options({ components: { DefaultScene } })
export default class ChitchatBook extends Vue {
  public nameScene = "ChitchatBook";
  picName = "tomb_03";

  options = [
    new DefaultOptionTransition(
        'Неплохие книжицы - я бы даже сказал, убойные... При весе-то 7 килограмм!',
        'ChitchatFirst',
    ),
  ];
}
</script>
