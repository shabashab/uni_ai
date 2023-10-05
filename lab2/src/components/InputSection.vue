<script setup lang="ts">

const emit = defineEmits(["submit"]);
</script>

<template>
  <div class="h-20 flex justify-center gap-5">
    <!-- <input 
      class="bg-neutral-900/70 w-full h-full text-xl px-8 rounded-2xl"
      v-model="newMessageValue"
      @keyup.enter="emit('submit')"
    > -->
    <button
      class="bg-green-500/90 rounded-xl w-full flex items-center justify-center text-3xl font-bold hover:cursor-pointer"
      @click="emit('submit')"
    >
      GENERATE
    </button>
  </div>
</template>