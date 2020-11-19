import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Store from '@/store/index';

@Module({ dynamic: true, store: Store, name: 'gameStore', namespaced: true })
export default class GameStore extends VuexModule {

    credits = 2000;
    graal = false;
    diary = false;
    mummy = false;
    puzzle = false;
    book = false;

    @Mutation setFlagTo(flagName: string, value: boolean) {
        if ('graal' == flagName)
            this.graal = value;
        if ('diary' == flagName)
            this.diary = value;
        if ('mummy' == flagName)
            this.mummy = value;
        if ('puzzle' == flagName)
            this.puzzle = value;
        if ('book' == flagName)
            this.book = value;
    }

    @Mutation
    changeCredits(diff: number) {
        this.credits = this.credits + diff;
    }


}

