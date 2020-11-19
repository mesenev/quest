import Intro from "@/components/scenes/Intro.vue";
import Initial from "@/components/scenes/Initial.vue";
import Vue from 'vue';
import ChitchatBook from "@/components/scenes/chitchat/ChitchatBook.vue";
import ChitchatDiary from "@/components/scenes/chitchat/ChitchatDiary.vue";
import ChitchatDiary2 from "@/components/scenes/chitchat/ChitchatDiary2.vue";
import ChitchatGraal from "@/components/scenes/chitchat/ChitchatGraal.vue";
import ChitchatIntro from "@/components/scenes/chitchat/ChitchatIntro.vue";
import ChitchatMummy from "@/components/scenes/chitchat/ChitchatMummy.vue";
import ChitchatPuzzle from "@/components/scenes/chitchat/ChitchatPuzzle.vue";
import ChitchatFirst from "@/components/scenes/chitchat/ChitchatFirst.vue";
import AdditionalIntro from "@/components/scenes/additional/AdditionalIntro.vue";
import AdditionalSolveInit from "@/components/scenes/additional/AdditionalSolveInit.vue";
import LegendFirst from "@/components/scenes/legend/LegendFirst.vue";
import LegendSecond from "@/components/scenes/legend/LegendSecond.vue";
import SolveInit from "@/components/scenes/Solve/SolveInit.vue";
import Fail from "@/components/scenes/Solve/Fail.vue";
import Correct from "@/components/scenes/Solve/Correct.vue";
import Success from "@/components/scenes/Success.vue";
import FailReject from "@/components/scenes/FailReject.vue";

const scenesList = [
    Intro, Initial, Success, FailReject,

    ChitchatBook, ChitchatDiary, ChitchatDiary2, ChitchatPuzzle, ChitchatGraal,
    ChitchatIntro, ChitchatMummy, ChitchatFirst,

    AdditionalIntro, AdditionalSolveInit,

    LegendFirst, LegendSecond,

    Correct, Fail, SolveInit,

];
export const scenesDict: Record<string, any> = scenesList.reduce(
    function (obj: Record<string, any>, x: any) {
        obj[x.name.toString()] = x;
        return obj;
    }, {}
);