<template>
  <Garden v-if="`garden` === currentScene"/>
  <Castle v-if="`castle` === currentScene"/>
  <State/>
  <OptionsList/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Garden from './components/scenes/Garden.vue';
import Castle from './components/scenes/Castle.vue';
import OptionsList from './components/OptionsList.vue';
import State from './components/State.vue';
import { State as StateVuex } from "vuex-class";
@Options({
  components: {
    Garden,
    Castle,
    OptionsList,
    State,
  },
})
export default class App extends Vue {
  @StateVuex public currentScene!: string;
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
