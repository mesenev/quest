<template>
  <div class="wrapper">
    <div class="option" v-on:click="Handler">{{ Description }}</div>
  </div>
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

<style scoped lang="stylus">
.wrapper
  margin-bottom 20px
.option
  color: #6464ee
  font-weight 700
  cursor pointer
  text-align left
.option:hover
  color: blue
  text-decoration underline
</style>
