<template>
  <div class="options-list">
    <ul>
      <li v-for="opt in options" v-bind:key="opt">
        <button v-on:click="opt.handler">{{ opt.text }}</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { DefaultOption } from "@/store/DefaultOption";
import { Action} from 'vuex-class';

@Options({ props: { msg: String } })
export default class OptionsList extends Vue {
  @Action('decreaseHealthAction') decreaseHealth!: Function;

  public get options(): DefaultOption[] {
    return [
      new DefaultOption(
          'option to choose #1',
          () => {
            console.log('hello from option 1!');
            this.decreaseHealth(1);
          }),
      new DefaultOption(
          'option to choose #2',
          () => {
            console.log('hello from option 2!');
            this.decreaseHealth(100);
          }),
    ]
  }
}
</script>

<style/>