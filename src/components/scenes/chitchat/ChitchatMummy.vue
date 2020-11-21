 <script lang="ts">
import { DefaultOptionTransition } from "@/store/DefaultOption";
import DefaultScene from "@/components/common/DefaultScene.vue";
import { Options, Vue } from "vue-class-component";

@Options({ components: { DefaultScene } })
export default class ChitchatMummy extends Vue {
  public nameScene = "ChitchatMummy";
  picName = "galaxy_02";

  options = [
    new DefaultOptionTransition(
        'Мда, похоже, что доктор частенько выбегал под солнышко без шляпы...',
       'ChitchatFirst',
    ),
  ];
}
</script>

<style scoped>

</style>