<template>
  <div v-on:click="Handler">{{ Description }}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { DefaultOption } from "@/store/DefaultOption";

export default class SceneOption extends Vue {
  @Prop() readonly Option!: DefaultOption;


  get Description() {
    return this.Option.text;
  }

  get Handler(): Function {
    return this.Option.handler;
  }
}
</script>

<style scoped>

</style>
