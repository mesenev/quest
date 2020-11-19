import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from '@/store/index';
import GameStore from "@/store/GameStore";
import { scenesDict } from "@/store/scenesList";

@Module({ dynamic: true, store: Store, name: 'sceneStore', namespaced: true })
export default class SceneStore extends VuexModule {
    private gameStore = getModule(GameStore);
    private sceneDict = scenesDict;

    current = 'Initial';

    @Mutation changeScene(newScene: string) {
        this.current = newScene;
    }

    @Action changeSceneAction(scene: string) {
        this.changeScene(scene);
    }

    get currentScene() {
        return this.sceneDict[this.current];
    }
}

