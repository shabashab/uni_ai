type ChatSender = 'user' | 'ai'

type ChatMessage = {
  message: string
  sender: ChatSender
}

export const useChat = () => {
  const messages = ref<ChatMessage[]>([])

  const sendMessage = (value: string) => {
    messages.value.push({
      message: value,
      sender: 'user'
    })

    messages.value.push({
      message: 'Hello! I don\'t know how to respond to this',
      sender: 'ai'
    })
  }

  return {
    messages: readonly(messages),
    sendMessage
  }
}