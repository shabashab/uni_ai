<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  messages: readonly { 
    message: string
    sender: "user" | "ai"
  }[]
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
      class="w-full flex justify-start my-2" 
      :class="{'justify-start': message.sender === 'ai', 'justify-end': message.sender === 'user'}"
    >
      <div
        v-if="message.sender === 'ai'"
        class="py-2 px-4 bg-violet-500/50 rounded-xl text-xl flex justify-start gap-5 items-center"
      >
        <div class="bg-blue-900/50 rounded-full w-10 h-10 flex justify-center items-center">
          <Icon
            icon="streamline:computer-robot-cyborg-artificial-robotics-robot-intelligence-machine-technology-android"
          />
        </div>
        <div>
        {{ message.message }}
        </div>
      </div>
      <div
        v-if="message.sender === 'user'"
        class="py-2 px-4 bg-pink-500/60 rounded-xl text-xl flex justify-start gap-5 items-center"
      >
        <div>
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