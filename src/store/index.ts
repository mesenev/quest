import { createStore } from 'vuex'

export default createStore({
    state: {
        health: 999,
        currentScene: 'castle',
    },
    mutations: {
        decreaseHealth(state) {
            state.health -= 1;
        },
        changeScene(state, scene) {
            state.currentScene = scene;
        }
    },
    actions: {
        decreaseHealthAction({ commit }, n: number) {
            for (let i = 0; i < n; i++)
                commit('decreaseHealth')
        },
        changeSceneAction({ commit }, scene: string){
            commit('changeScene', scene);
        }
    },
    modules: {}
})
