<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {DeepReadonly} from 'vue'

const props = defineProps<{
  messages: DeepReadonly<{ 
    message: string | {
      text: string
      buttons: {
        label: string;
        text: string;
      }[]
    }
    sender: "user" | "ai"
  }[]>
}>()

const chatComponent = ref<HTMLDivElement>();

watch(props.messages, () => {
  console.log(1);
  const lastMessage = chatComponent.value?.lastElementChild;

  lastMessage?.scrollIntoView({
    behavior: "smooth"
  })

}, {
  deep: true
})

</script>

<template>
  <div class="w-full h-full overflow-y-auto px-6" ref="chatComponent">
    <div 
      v-for="message in props.messages" 
      class="w-full flex justify-start my-5" 
      :class="{'justify-start': message.sender === 'ai', 'justify-end': message.sender === 'user'}"
    >
      <div
        v-if="message.sender === 'ai'"
        class="rounded-xl text-xl grid grid-cols-[auto_1fr] items-end gap-4 whitespace-pre-line max-w-[80%]"
      >
        <div class="bg-blue-900/50 rounded-full w-[50px] h-[50px] flex justify-center items-center">
          <Icon
            icon="streamline:computer-robot-cyborg-artificial-robotics-robot-intelligence-machine-technology-android"
          />
        </div>
        <div class="bg-violet-500/50 px-4 py-4 rounded-xl">
        {{ typeof message.message === "string" ? message.message : message.message.text }}
        </div>
      </div>
      <div
        v-if="message.sender === 'user'"
        class="text-xl grid grid-cols-[1fr_auto] gap-4 items-end"
      >
        <div class="bg-pink-500/60 px-4 py-4 rounded-xl">
        {{ message.message }}
        </div>
        <div class="bg-violet-900/50 rounded-full w-10 h-10 flex justify-center items-center">
          <Icon
            icon="material-symbols:person-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>