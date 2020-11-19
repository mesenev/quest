import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import Store from '@/store/index';

const godsAndSons = ['арес', 'вмаз', 'звер', 'зевс', 'зема', 'марс', 'мерс'];
const kids = ['з', 'е', 'а', 'в', 'р', 'с', 'м'];

export function shuffle(a: Array<any>) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

@Module({ dynamic: true, store: Store, name: 'gameStore', namespaced: true, },)
export default class GameStore extends VuexModule {

    credits = 2000;
    graal = false;
    diary = false;
    mummy = false;
    puzzle = false;
    book = false;
    god = '';
    tip = '';
    outro = false;
    mainSolved = false;
    chatInit = false;

    get godDescription(): string {
        if (this.god)
            return `Имя бога, открывающего врата,\n
            состоит из первых букв имен
            \n${this.tip} сыновей фараона`;
        else
            return '';
    }


    @Mutation setFlagTo(flagName: string) {
        this.chatInit = true;
        if ('graal' == flagName)
            this.graal = true;
        if ('diary' == flagName)
            this.diary = true;
        if ('mummy' == flagName)
            this.mummy = true;
        if ('puzzle' == flagName)
            this.puzzle = true;
        if ('book' == flagName)
            this.book = true;
    }

    @Mutation changeCredits(diff: number) {
        this.credits = this.credits + diff;
    }

    @Mutation selectGod() {
        this.god = godsAndSons[Math.floor(Math.random() * godsAndSons.length)];
        const tip = shuffle([...this.god].map((x) => kids.indexOf(x) + 1));
        this.tip = `${tip[0]}, ${tip[1]}, ${tip[2]} и ${tip[3]}`;
        console.log(this.god);
    }

    @Mutation mutateOutro() {
        this.outro = true;
    }

    @Mutation mutateMainSolved() {
        this.mainSolved = true;
    }
}

