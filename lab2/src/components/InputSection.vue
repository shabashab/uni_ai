<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Stage, StageAnswer } from "../models/stage-model";

const props = defineProps<{
  curentStage: Stage;
  lastAnswer: StageAnswer | undefined;
}>();

const emit = defineEmits(["update:lastAnswear", "submit"]);

const textInput = ref("");

const lastAnswear = computed({
  get() {
    return props.lastAnswer
  },
  set(value) {
    emit("update:lastAnswear", value)
  }
})

const onButtonClick = (answer: StageAnswer) => {
  lastAnswear.value = answer;

  if (props.curentStage.type === 'name') {
    textInput.value = ''
  }


  emit('submit')
}

</script>

<template>
  <div class="h-20 flex justify-center w-full gap-10">
    <template v-if="curentStage.type === 'buttons'">
      <button v-for="button in curentStage.buttons"
        class="bg-violet-500/90 w-full rounded-xl flex items-center justify-center text-2xl font-bold hover:cursor-pointer hover:bg-violet-800/90 transition-all duration-300"
        @click="onButtonClick(button)">
        {{ button.label }}
      </button>
    </template>
    <template v-if="curentStage.type === 'name'">
      <input class="bg-neutral-900/70 w-full h-full text-xl px-8 rounded-2xl" v-model="textInput"
        @keyup.enter="onButtonClick({ value: textInput })">
      <button
        class="bg-green-500/90 rounded-xl w-20 flex items-center justify-center text-3xl font-bold hover:cursor-pointer"
        @click="onButtonClick({ value: textInput })">
        <Icon icon="tabler:send"></Icon>
      </button>
    </template>
  </div>
</template>