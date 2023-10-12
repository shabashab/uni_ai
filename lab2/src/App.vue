<script setup lang="ts">
const { messages, sendMessage } = useChat();

const newMessage = ref<string>("");

const onNewMessageFromUserSent = () => {
  sendMessage(newMessage.value);
  newMessage.value = "";
}
</script>

<template>
  <section id="chat_bg" class="w-full h-screen back-ground-gradient py-20">
    <div class="container bg-black/20 rounded-2xl py-4 px-8 text-white h-full flex flex-col justify-between gap-10">
      <ChatSection :messages="messages" />
      <InputSection v-model:new-message="newMessage" @submit="onNewMessageFromUserSent" />
    </div>
  </section>
</template>

<style scoped>
.back-ground-gradient {
  background: rgb(229, 121, 231);
  background: linear-gradient(58deg, rgb(91, 196, 135) 0%, rgb(37, 159, 193) 45%, rgb(209, 34, 168) 71%);
}
</style>
