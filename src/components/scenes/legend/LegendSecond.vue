<template>
  <DefaultScene :options="options" :picName="picName">
<span>
   Археолог продолжил чтение:<br> <br> "Пока <span class="text-success">Замполет</span> бранил драчунов, <span class="text-success">четвертый сын</span> вовсю заигрывал со служанкой, из-за которой и началась драка. Но все хорошее, в том числе и деньги, когда-нибудь кончается, и братья продолжили путь.<br> В одном из оазисов они наткнулись на завтракающего льва, и <span class="text-success">второй сын</span>, демонстрируя свою отвагу и прогрессирующий идиотизм, полез в драку...<br> - Присмотри за <span class="text-success">младшими</span>, - приказал <span class="text-success">Замполет</span> <span class="text-success">Серемтуту</span>, а сам с двумя братьями ринулся на подмогу. Однако силы были не равны - если бы <span class="text-success">Анусптис</span> не сел на грозного хищника и не раздавил ему лапы, сыновьям Перехотепа Тринадцатого пришлось бы худо. <br> Мясо льва оказалось несъедобным, и бедняга <span class="text-success">Анусптис</span> едва сдерживал рыдания. Даже вечно веселый <span class="text-success">пятый сын</span> никого не подкалывал и не травил бородатые анекдоты...<br> <br> Но вскоре горести пути были позади - свернув после второго миража, как велел фараон, его сыновья вышли к Обители Богов. Двое старших отправились корешаться с Великими, оставив, как пошутил <span class="text-success">Рамзец</span>, "самого тяжелого" - присматривать.<br> <br> Боги оказались не такими уж и страшными - если на них не смотреть. Они даже накормили братьев и предоставили им ароматическую ванну, чему был не очень рад <span class="text-success">Мойхренес</span>, презиравший средства личной гигиены. Заигрывающий с богиней Ищидой <span class="text-success">Вертепопес</span> был превращен в жабу-принца, и его чуть не слопал <span class="text-success">Анусптис</span>, а <span class="text-success">шестой сын</span> был рад узнать о переносе выпускного бала. Но самая приятная новость была об отце: <br> <br> "Жить ваш отец будет в счастье и веселье еще один день и три года, а чтоб не умер он раньше этого срока, должны вы, сыновья его, возвести пирамиду огромную, дабы величие и богатство Перехотепа Тринадцатого она собой воплощала долгие века" - так напутствовал братьев сам Гамон-Ра, отправляя их в обратный путь..."<br> <br> На этом текст легенды обрывался.
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
export default class LegendSecond extends Vue {
  public static nameScene = "LegendSecond";
  picName = 'tomb_03';
  private gameStore = getModule(GameStore);
  options = [
    new DefaultOptionTransition(
        'Э нет, ищите другого дурака. Я убираюсь с этой планеты...',
        'FailReject',
        null, null,
        () => !this.gameStore.mainSolved,
    ),
    new DefaultOptionTransition(
        'А можно еще раз послушать?',
        'LegendFirst',
        undefined,
        null,
        () => !this.gameStore.mainSolved,
    ),
    new DefaultOptionTransition(
        'Думаю, что уже достаточно услышал. Пора приступать...',
        'SolveInit',
        undefined,
        null,
        () => !this.gameStore.mainSolved,
    ),
    new DefaultOptionTransition(
        'Взяться за открывание шкатулки',
        'AdditionalSolveInit',
        undefined,
        null,
        () => this.gameStore.mainSolved,
    ),
  ];
}
</script>
