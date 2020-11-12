<template>
  <div v-on:click="Handler">{{ Description }}</div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import DefaultOption from "@/store/DefaultOption";

export default class SceneOption extends Vue {
  private _description!: string;
  private _handler!: Function;
  @Prop() readonly dataCreate!: DefaultOption;

  // noinspection JSUnusedGlobalSymbols
  created() {
    this._description = this.dataCreate.text;
    this._handler = this.dataCreate.handler;
  }

  get Description() {
    return this._description;
  }

  get Handler() {
    return this._handler;
  }
}
</script>

<style scoped>

</style>
