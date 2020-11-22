<template>
  <DefaultScene :options="options" :picName="picName">
    <span v-if="(bet === -1) && !end">
       - Так ведь загадочка-то не моя.
       С древнеугупетского свитка, который был найден в гробнице фараона Недохотепа.
      Только вот давайте так - <span class="text-success">делаем ставку, если вы не отгадываете,
      деньги мои; отгадываете - я даю вам вдвое больше</span>.
      Нужно ведь чем-то на жизнь зарабатывать. Согласны?
    </span>
    <span v-else-if="(bet > 0) && !end">
       - Отлично! Сразу видно азартного человека!
      Итак, если вы отгадываете - я вам даю
      <span class="text-success">{{ bet * 2}}</span> кредитов.
      Если нет - то с вас <span class="text-success">{{ bet }}</span>.
      Слушайте загадку.<br>
      <br>
      "Зашел как-то бог подземного царства Обсирис в свои мрачные конюшни
      - поискать чего-нибудь из съестного, для праздничного стола.
      И надо же такому случиться - у самого входа бог наступил прямо в лепешку дерьма,
      основательно испортив себе аппетит и праздничное настроение.
      Разумеется, кто-то должен был за это ответить, а тут, как на зло, подвернулся ему
      Этот - бог письменности, зашедший за перьями для письма.
      <br> - Что это такое?!! - спросил грозно Обсирис.<br>
      - Это? Всего лишь завтрак одной из наших зверушек, - рассеянно ответил Этот и вышел из конюшен.
      <br> - Мясо! - обрадовался бог, - Виновник моего плохого настроения приглашается за праздничный стол,
      вернее, НА праздничный стол..."
      <br> <br> А вот и сама загадка - кто же должен был стать горячей закуской в этот день?
    </span>
    <span v-else-if="end && success">
       - Ха-ха-ха. А вот и не правильно. Это был священный <span class="text-success">скарабей</span>.
      А по-нашему - жук-навозник. Так что логично, что эта куча предназначалась ему на завтрак.
      Советую поглубже изучить угуптянские верования. <br>
      - Да уж... Интересно, как богам понравился такой деликатес? Особенно любопытно, как его оценил Гамон-Ра.
      Вот только вы совершенно не правы. Навозники вовсе не питаются дерьмом,
      а используют его для согреву, утепляя свою норку. Так что это был завтрак именно
      <span class="text-success">быка</span>, только уже в сильно переваренном виде - коровья лепешка, так сказать.
      <br> - Но как же...<br> - Советую изучать энтомологию - иногда бывает полезно.<br>
      <br> С этими словами <span class="text-success">вы забрали свой выигрыш</span>...
    </span>
    <span v-else>
       - Ха-ха-ха. А вот и не правильно. Это был <span class="text-success">бык</span>.
      <br> - А почему именно бык?<br> - Во-первых, только быки делают лепешки.
      Во-вторых, все остальные звери несъедобны или слишком малы для пира.
      В-третьих: правильный ответ был написан на свитке с загадкой.
      <br> - Тогда давайте и я загадаю загадку: что с вами будет,
      если ретрактором по голове? <br>
      - Наверное, я стану медленнее?<br>
      - А вот и не угадали - вы потеряете сознание, потому что я буду не стрелять, а бить.<br>
      - Но-но! Научитесь проигрывать достойно.<br>
      <br>
      С сожалением <span class="text-success">вы отсчитали археологу его выигрыш</span>.
    </span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOption, DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import GameStore from "@/store/GameStore";

@Options({ components: { DefaultScene } })
export default class ChitchatPuzzle extends Vue {
  public static nameScene = "ChitchatPuzzle";
  picName = "tomb_03";
  private gameStore = getModule(GameStore);
  public bet = -1;
  public end = false;
  public success = false;

  incorrect() {
    this.gameStore.changeCredits(-this.bet);
    this.end = true;
    this.success = false;
    this.options = this.finalOption;
  }

  private correct() {
    this.gameStore.changeCredits(this.bet * 2);
    this.end = true;
    this.success = true;
    this.options = this.finalOption;
  }

  private finalOption = [
    new DefaultOptionTransition('Дальше', 'ChitchatFirst'),
  ]

  private setBet(value: number) {
    this.bet = value;
    this.options = [
      new DefaultOption('Зеленый и плоский как багз аллигатор, принадлежащий Нудиусу', () => this.incorrect()),
      new DefaultOption('Птица ибис, символ знаний и мудрости, принадлежащая Этоту', () => this.incorrect()),
      new DefaultOption('Степной шакал, любимая зверушка бога зла Абдулбиса', () => this.incorrect()),
      new DefaultOption('Символ солнца - священный скарабей, символ самого Гамон-Ра', () => this.incorrect()),
      new DefaultOption('Белоснежный бык Опас, любимец бога Птюха', () => this.correct()),
    ]
  }

  options = [
    new DefaultOption('Хорошо, я ставлю 25 cr', () => this.setBet(25)),
    new DefaultOption('Рискну-ка я поставить 100 cr', () => this.setBet(100)),
    new DefaultOptionTransition('Нет, я сюда деньги не тратить, а зарабатывать прилетел', 'ChitchatFirst'),
    new DefaultOption('Думаю, что ставка в 50 cr - то, что нужно', () => this.setBet(50)),
  ];
}
</script>
()=>
