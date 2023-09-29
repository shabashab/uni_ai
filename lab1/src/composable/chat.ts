import { CHAT_RULES } from "../config/chat-rules"

type ChatSender = 'user' | 'ai'

type ChatMessage = {
  message: string
  sender: ChatSender
}

export type ChatRuleCondition = ((input: string) => boolean) | RegExp
export type ChatRuleResponder = ((input: string) => string ) | string

export type ChatRule = {
  condition: ChatRuleCondition,
  response: ChatRuleResponder | ChatRuleResponder[]
}

export type ChatRules = ChatRule[]

export type ChatConfig = {
  rules: ChatRule[]
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const matchRuleCondition = (message: string, condition: ChatRuleCondition): boolean => {
  if(typeof condition === 'function') return condition(message)
  return Boolean(message.match(condition))
}

const getResponseForChatRuleResponder = (message: string, responder: ChatRuleResponder): string => {
  if(typeof responder === 'string') return responder
  return responder(message)
}

const getResponseForChatRule = (message: string, chatRule: ChatRule): string => {
  if(!Array.isArray(chatRule.response)) 
    return getResponseForChatRuleResponder(message, chatRule.response)

  const responderId = getRandomInt(0, chatRule.response.length)
  const responder = chatRule.response[responderId]

  return getResponseForChatRuleResponder(message, responder)
}

export const useChat = (config: ChatConfig = { rules: CHAT_RULES }) => {
  const messages = ref<ChatMessage[]>([])

  const sendMessage = (message: string) => {
    messages.value.push({
      message: message,
      sender: 'user'
    })

    const suitableRules = config.rules.filter((rule) => matchRuleCondition(message, rule.condition))

    if(suitableRules.length === 0) {
      messages.value.push({
        message: 'Em?... I\'m not in mood to answer these kinds of things... Maybe you should ask your best friend instead, if you have one...',
        sender: 'ai'
      })

      return
    }

    const pickedRuleId = getRandomInt(0, suitableRules.length)
    const pickedRule = suitableRules[pickedRuleId]
    const response = getResponseForChatRule(message, pickedRule)

    messages.value.push({
      message: response,
      sender: 'ai'
    })
  }

  return {
    messages: readonly(messages),
    sendMessage
  }
}