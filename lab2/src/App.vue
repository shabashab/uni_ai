<script setup lang="ts">
const { messages } = useChat();

const newMessage = ref<string>("");

const onGenerateButtonClick = () => {}

</script>

<template>
  <section id="chat_bg" class="w-full h-screen back-ground-gradient py-20">
    <div class="container bg-black/20 rounded-2xl py-4 px-8 text-white h-full flex flex-col justify-between gap-10">
      <ChatSection :messages="messages" />
      <InputSection v-model:new-message="newMessage" @submit="onGenerateButtonClick()" />
    </div>
  </section>
</template>

<style scoped>
.back-ground-gradient {
  background: rgb(229, 121, 231);
  background: linear-gradient(14deg, rgb(97, 43, 98) 0%, rgb(11, 13, 141) 45%, rgba(38, 4, 54, 1) 71%);
}
</style>
