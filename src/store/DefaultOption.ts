export default class DefaultOption {
    public text: string;
    public handler: Function;
    constructor(text: string, handler: Function) {
        this.text = text;
        this.handler = handler;
    }
}
