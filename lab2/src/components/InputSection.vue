<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  newMessage: string;
  showButtons: boolean;
  buttons: {
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
    <template v-else>
      <div class="flex justify-between gap-10">
        <button v-for="button in props.buttons" class="bg-green-500/90 rounded-xl w-20 flex items-center justify-center text-3xl font-bold hover:cursor-pointer" @click="newMessageValue = button.text">
          {{ button.label }}
        </button>
      </div>
    </template>
  </div>
</template>