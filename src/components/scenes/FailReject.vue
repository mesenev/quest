<template>
  <DefaultScene :options="options" :picName="picName">
<span>
   Ходьба под жарким солнцем по раскаленному песку никогда не была вашим любимым занятием.
  Тем более в летном комбинезоне.<br> <br> Чертыхаясь и проклиная все на свете, вы с
  трудом пробрались в рубку по горячему полу, расплавив подошвы ваших любимых белых тапочек.
  "Нечего делать в этом пекле нормальным рейнджерам", - думали вы, подготавливая корабль к
  взлету и смазывая обоженные пальцы целебной мазью.
</span>
  </DefaultScene>
</template>

<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { Options, Vue } from "vue-class-component";

@Options({ components: { DefaultScene } })
export default class FailReject extends Vue {
  public static nameScene = "FailReject";
  picName = 'pharaoh_00';
  options = [];
}

</script>
