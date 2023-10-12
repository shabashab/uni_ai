<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  newMessage: string;
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
    <input 
      class="bg-neutral-900/70 w-full h-full text-xl px-8 rounded-2xl"
      v-model="newMessageValue"
      @keyup.enter="emit('submit')"
    >
    <button
      class="bg-green-500/90 rounded-xl w-20 flex items-center justify-center text-3xl font-bold hover:cursor-pointer"
      @click="emit('submit')"
    >
      <Icon icon="tabler:send"></Icon>
    </button>
  </div>
</template>