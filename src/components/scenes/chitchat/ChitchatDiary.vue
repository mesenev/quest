<template>
  <DefaultScene :options="options" :picName="picName">
<span> Вы взяли первую страницу и принялись читать:<br> "...завершена. Отправили рабов за вином к Похметепу. Рабы вернулись быстро, но вина принесли мало. Надавали рабам по шее и опять отправили к Похметепу.<br> Пили. Ели. Заигрывали со смазливыми рабынями, но их было очень мало - опять из-за одной подрался с братьями. Шестеро братьев - это все-таки слишком много. Кстати понял - рабыня с большой грудью не обязательно красивая. Опять пили, опять ели.<br> Вернулись рабы и принесли много вина. Для профилактики дали им по шее и отправили в зоопарк к Зоофилесу - а то он жаловался, что его львы голодают. Отправили писаря Папиру Са-Мар Аттеля за новыми рабами и хорошенькими рабынями.<br> Опять пили вино и заигрывали с рабынями. Хорошеньких рабынь почему-то стало больше.<br> Опять прибегал Настрадамус и выкрикивал грозные пророчества - короче, снова просил на опохмел. Как всегда, получил по шее и скарабея в штаны. Плакал и сыпал выразительными образами - хреновое, оказывается, у нас будущее..."</span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
@Options({ components: { DefaultScene } })
export default class ChitchatDiary extends Vue {
  public nameScene = "ChitchatDiary";
  public picName = "tomb_03";
  options = [
    new DefaultOptionTransition(
        'Достаточно, поговорим о чем-нибудь другом',
        'ChitchatFirst',
    ),
    new DefaultOptionTransition(
        'Можно посмотреть вторую страницу?',
        'ChitchatDiary2',
    ),
  ];
}
</script>
