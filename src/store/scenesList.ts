import Intro from "@/components/scenes/Intro.vue";
import Initial from "@/components/scenes/Initial.vue";
import Vue from 'vue';
const scenesList = [
    Intro, Initial
];
export const scenesDict: Record<string, any> = scenesList.reduce(
    function (obj: Record<string, any>, x: any) {
        obj[x.name.toString()] = x;
        return obj;
    }, {}
);