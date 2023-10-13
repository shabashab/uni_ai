<script setup lang="ts">
const { messages, sendMessage } = useChat();

const newMessage = ref<string>("");

const showButtons = ref<boolean>(false)

const lastMessage = computed(() => messages.value[messages.value.length - 1]);
const lastMessageButtons = computed(() => {
  if(!lastMessage.value) return []
  if(typeof lastMessage.value.message === 'object') return lastMessage.value.message.buttons
  return []
})

const onNewMessageFromUserSent = () => {
  if (showButtons.value) {
    showButtons.value = false;
  }
  sendMessage(newMessage.value);
  if(typeof lastMessage.value.message === "object") {
    showButtons.value = true;
  }
  newMessage.value = "";
}

</script>

<template>
  <section id="chat_bg" class="w-full h-screen back-ground-gradient py-20">
    <div class="container bg-black/20 rounded-2xl py-4 px-8 text-white h-full flex flex-col justify-between gap-10">
      <ChatSection :messages="messages" />
      <InputSection v-model:new-message="newMessage" :show-buttons="showButtons" :buttons="lastMessageButtons" @submit="onNewMessageFromUserSent" />
    </div>
  </section>
</template>

<style scoped>
.back-ground-gradient {
  background: rgb(229, 121, 231);
  background: linear-gradient(58deg, rgb(91, 196, 135) 0%, rgb(37, 159, 193) 45%, rgb(209, 34, 168) 71%);
}
</style>
