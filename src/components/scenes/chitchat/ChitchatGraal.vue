<template>
  <DefaultScene :options="options" :picName="picName">
<span> - Да, собственно говоря, это даже не экспедиция была, а погоня за мечтой. Так сказать, в поисках легенды - секрета вечной жизни.<br> По выражению лица Индия Джокса вы поняли, что он просто насмехается над вами. Он взглянул на вас, и его усмешку словно тахионным резцом сдуло.<br> - Да шучу я. Просто искал средство от импотенции для одного весьма состоятельного и важного клиента. Имя его, по понятным причинам, я называть не буду.<br> - Что, он настолько известен в Галактике?<br> - Да нет, просто я уже не так молод - совсем склероз замучил. Запамятовал я.</span>
  </DefaultScene>
</template>


<script lang="ts">
import DefaultScene from "@/components/common/DefaultScene.vue";
import { DefaultOptionTransition } from "@/store/DefaultOption";
import { Options, Vue } from "vue-class-component";
@Options({ components: { DefaultScene } })
export default class ChitchatGraal extends Vue {
  public static nameScene = "ChitchatGraal";
  picName = 'galaxy_02';

  options = [
    new DefaultOptionTransition(
        'Понятно... Романтика, она в сердцах, а суровая правда жизни - в кошельке',
        'ChitchatFirst',
    ),
  ];
}
</script>
