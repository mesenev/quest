import Store from '@/store/GameStore';
import { getModule } from "vuex-module-decorators";

export class DefaultOption {
    public text: string;
    public handler: Function;
    protected isActiveCheck: Function | null = null;
    protected isShowChecker: Function | null = null;
    protected store = getModule(Store);

    constructor(
        text: string,
        handler: Function,
        active: Function | null = null,
        show: Function | null = null,
    ) {
        this.text = text;
        this.handler = handler;
        this.isActiveCheck = active;
        this.isShowChecker = show;
    }

    get isActive(): boolean {
        if (this.isActiveCheck)
            return this.isActiveCheck();
        else
            return true;
    }

    get isShow(): boolean {
        if (this.isShowChecker)
            return this.isShowChecker();
        else
            return true;
    }
}

export class DefaultOptionTransition extends DefaultOption {
    constructor(
        text: string, target: string,
        active: Function | null = null,
        show: Function | null = null,
    ) {
        super(text, () => this.store.changeScene(target), active, show);
    }
}