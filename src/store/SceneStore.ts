import { getModule, Module, VuexModule } from 'vuex-module-decorators';
import Store from '@/store/index';
import GameStore from "@/store/GameStore";
import { scenesDict } from "@/store/scenesList";

@Module({ dynamic: true, store: Store, name: 'sceneStore', namespaced: true })
export default class SceneStore extends VuexModule {
    private gameStore = getModule(GameStore);
    private sceneDict = scenesDict;

    get currentScene() {
        return this.sceneDict[this.gameStore.current];
    }
}

