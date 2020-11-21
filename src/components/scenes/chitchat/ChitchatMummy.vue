 <script lang="ts">
import { DefaultOptionTransition } from "@/store/DefaultOption";
import DefaultScene from "@/components/common/DefaultScene.vue";

export default class ChitchatMummy extends DefaultScene {
  public nameScene = "ChitchatMummy";
  picName = "galaxy_02";
  public descriptionScene ='- Ну разумеется, мне это не трудно!<br>' +
      ' <br>' +
      ' С этими словами археолог закатал рукав своей рубахи примерно по локоть и вытянул руку в вашу сторону.<br>' +
      ' - Как? - изумленно воскликнули вы, - Неужели у вас в качестве протеза мумифицированная рука' +
      ' угупетского фараона?<br>' +
      ' - Да нет же, - пояснил Джокс, - просто та рука была почти такая, только желтая...' +
      ' и совершенно высушенная... и твердая, как селенит. И обмотана грязными тряпками.' +
      ' Да еще не такая грязная и волосатая, - добавил он, опуская рукав.<br>' +
      ' - А где же рука мумии?<br>' +
      ' - Да той руки уже давно у меня нет. Я ее подарил Ларе Томбовне.' +
      ' Так сказать, руку и сердце, хе-хе. Правда, сердце было не самого фараона,' +
      ' а его слуги, но это уже мелочи.<br>'
  options = [
    new DefaultOptionTransition(
        'Мда, похоже, что доктор частенько выбегал под солнышко без шляпы...',
       'ChitchatFirst',
    ),
  ];
}
</script>

<style scoped>

</style>