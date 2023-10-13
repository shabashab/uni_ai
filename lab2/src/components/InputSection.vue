<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  newMessage: string;
  showButtons: boolean;
  buttons: readonly {
    label: string;
    text: string;
  }[]
}>();

const emit = defineEmits(["update:newMessage", "submit"]);

const newMessageValue = computed({
  get() {
    return props.newMessage
  },
  set(value) {
    emit("update:newMessage", value)
  }
})

const onButtonClick = (text: string) => {
  newMessageValue.value = text
  emit('submit')
}
</script>

<template>
  <div class="h-20 flex justify-between gap-5">
    <template v-if="!showButtons">
      <input class="bg-neutral-900/70 w-full h-full text-xl px-8 rounded-2xl" v-model="newMessageValue"
        @keyup.enter="emit('submit')">
      <button
        class="bg-green-500/90 rounded-xl w-20 flex items-center justify-center text-3xl font-bold hover:cursor-pointer"
        @click="emit('submit')">
        <Icon icon="tabler:send"></Icon>
      </button>
    </template>
    <div class="grid auto-cols-fr gap-4 grid-flow-col w-full" v-else>
      <button v-for="button in props.buttons" class="bg-green-500/90 rounded-xl flex items-center justify-center text-2xl font-bold hover:cursor-pointer hover:bg-green-600/90" @click="onButtonClick(button.text)">
        {{ button.label }}
      </button>
    </div>
  </div>
</template>