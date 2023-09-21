import { ChatRule } from "../composable/chat";

export const CHAT_RULES: ChatRule[] = [
  {
    condition: (input) => input.endsWith('?'),
    response: [
      'I didn\'t understand your question',
      'Oh, your question is so stupid! Don\'t ask me things like that any more',
      'I think as I am just a bot, I cannot answer this question correcly'
    ]
  },
  {
    condition: (input) => input.toLowerCase().startsWith('who'),
    response: [
      'Not me! I promise', 
      'HAHA! It was me!!!', 
      'I\'m certainly not the one you are looking for...'
    ]
  },
  {
    condition: (input) => input.toLowerCase().startsWith('what are you doing'),
    response: [
      'Nothing...',
      'Oh I\'m sorry'
    ]
  },
  {
    condition: (input) => input.toLowerCase().startsWith('i\'m feeling that'),
    response: [
      'I feel the same',
      (input) => `Why do you feel ${input.substring(13)}`
    ]
  },
  {
    condition: () => true,
    response: [
      'I wasn\'t listening! I am so toxic',
    ]
  }
]