import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Store from '@/store/index';

@Module({ dynamic: true, store: Store, name: 'user', namespaced: true })
export default class GameStore extends VuexModule {

    health = 999;
    currentScene = 'garden';

    @Mutation
    decreaseHealth() {
        this.health -= 1;
    }

    @Mutation
    changeScene(newScene: string) {
        this.currentScene = newScene;
    }

    @Action
    decreaseHealthAction(n: number) {
        for (let i = 0; i < n; i++)
            this.decreaseHealth();
    }

    @Action
    changeSceneAction(scene: string) {
        this.changeScene(scene);
    }
}

