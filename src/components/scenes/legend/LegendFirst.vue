<template>
  <DefaultScene :options="options" :picName="picName">
<span>
   Доктор археологии Индий Джокс взял пачку листов и начал читать:<br> <br> "В давние времена был правителем земель угупетских ужасный снаружи и добрый внутри фараон Перехотеп Тринадцатый. И было у него семь сыновей - шесть оболтусов и <span class="text-success">старший</span>, умник. Как-то утром испуганный раб вбежал к ним в покои: слег отец, с подозрением на нетипичную пневмонию. Кинулись сыновья к отцовской кровати:<br> - Тятька, не покидай нас, - зарыдал испуганный <span class="text-success">Серемтут</span>, а за ним и <span class="text-success">Мойхренес</span><br> - Хорош вопить, <span class="text-success">мелюзга</span>, - оборвал <span class="text-success">Вертепопес</span>, пряча в тунике недописанное любовное послание. - Отец, что с тобой?<br> - Уши мои уже не видят, глаза мои уже не слышат - настал мой час. Идите далеко-далеко в пустыню - за вторым миражом первый поворот направо, и до ближайшего оазиса. В нем - загадочная Обитель Богов. Только боги властны над жизнью и смертью.<br> - Острый приступ пневматической остеохандрии и эллиптической пессиместии, - изрек <span class="text-success">Замполет</span>.<br> - Значит, надо собираться в путь! - подал голос <span class="text-success">Ептимат</span>.<br> - Ура!!! Значит, завтра в школу не пойдем, можно уроки не делать, - завопил <span class="text-success">Мойхренес</span>.<br> - Ага, а мой выпускной? - расстроился <span class="text-success">шестой сын</span>. - Я уже договорился с прекрасной Бюстиарой быть моей королевой бала...<br> - Нечего лясы точить, пора припасы в дорогу собирать, - подал голос вечноголодный <span class="text-success">Анусптис</span>, и братья, поклонившись, покинули отца.<br> <br> Долго брели сыновья фараона по пустыне. <span class="text-success">Вертепопес</span> жаловался, что не может побриться, и скучал по женской ласке, тогда как <span class="text-success">Анусптис</span> вдвое скинул в весе. В первой же таверне они попали на большой праздник, где <span class="text-success">Рамзец</span>, <span class="text-success">Серемтут</span> и <span class="text-success">Мойхренес</span> с непривычки перебрали вина, пришлось <span class="text-success">Ептимату</span> разнимать драку, в которую они вмешались, защищая <span class="text-success">четвертого сына</span>. Пригодилась выучка воина и опыт уличных драк..." <br> <br> Здесь археолог остановился, чтобы перевести дух, и посмотрел на вас.
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
export default class LegendFirst extends Vue {
  public static nameScene = "LegendFirst";
  picName = "tomb_03";
  private gameStore = getModule(GameStore);
  options = [
    new DefaultOptionTransition(
        'Слушать дальше',
        'LegendSecond'
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
