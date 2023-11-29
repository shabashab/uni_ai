<script setup lang="ts">
import type { Stage, StageAnswer } from "./models/stage-model"
const stages = ref<Stage[]>([
  {
    message: "Згенерувати казку?",
    type: "buttons",
    buttons: [
      {
        label: "Згерувати казку",
        value: true,
      },
    ]
  },
  {
    message: "Виберіть пол персонажа",
    type: "buttons",
    buttons: [
      {
        label: "Чоловічий",
        value: "man",
      },
      {
        label: "Жіночий",
        value: "woman",
      }
    ]
  },
  {
    message: "Впишіть імʼя:",
    type: "name",
  },
  {
    message: "Виберіть вік персонажа:",
    type: "buttons",
    buttons: [
      {
        label: "5",
        value: 5
      },
      {
        label: "18",
        value: 18
      },
      {
        label: "35",
        value: 35
      },
      {
        label: "50",
        value: 50
      }
    ]
  },
  {
    message: "Яким має бути сюжет?",
    type: "buttons",
    buttons: [
      {
        label: "Добрий",
        value: "good"
      },
      {
        label: "Злий",
        value: "bad"
      }
    ]
  },
  {
    message: "Якою має бути кінцівка?",
    type: "buttons",
    buttons: [
      {
        label: "Смішна",
        value: "funny"
      },
      {
        label: "повчальна",
        value: "instructive"
      }
    ]
  }
]);

const answers = ref<StageAnswer[]>([]);

const lastAnswear = ref<StageAnswer | undefined>(undefined);

const curentStageIndex = ref<number>(0);

const curentStage = computed(() => stages.value[curentStageIndex.value]);

const messages = ref<
  { message: string | number, sender: "user" | "ai" }[]>([]);

const onSubmit = () => {
  if (lastAnswear.value) {
    answers.value.push(lastAnswear.value);
    if (!!lastAnswear.value.value) {
      // @ts-ignore
      messages.value.push({
        message: lastAnswear.value.label ?? lastAnswear.value.value,
        sender: "user"
      });
    }
  };

  if (curentStageIndex.value === stages.value.length - 1) {
    messages.value.push({message: generateText([ ...answers.value ]), sender: "ai"});

    stages.value[0].buttons[0].label = "Згенерувати ще одну казку";
    answers.value = [];
    curentStageIndex.value = 0;


    return;
  }

  curentStageIndex.value++;

  messages.value.push({
    message: curentStage.value.message,
    sender: "ai"
  });
}

</script>

<template>
  <section id="chat_bg" class="w-full h-screen back-ground-gradient py-20">
    <div class="container bg-black/20 rounded-2xl py-4 px-8 text-white h-full flex flex-col justify-between gap-10">
      <ChatSection :messages="messages" />
      <InputSection :curent-stage="curentStage" v-model:last-answear="lastAnswear" @submit="onSubmit()" />

    </div>
  </section>
</template>

<style scoped>
.back-ground-gradient {
  background: rgb(229, 121, 231);
  background: linear-gradient(58deg, rgb(91, 196, 135) 0%, rgb(37, 159, 193) 45%, rgb(209, 34, 168) 71%);
}
</style>
