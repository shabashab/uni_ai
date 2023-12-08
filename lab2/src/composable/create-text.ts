import { fill } from 'lodash'

export type TextGenerationData = {
  sentenceStartingWordsArray: string[],
  elements: {
    [key: string]: {
      [key: string]: number
    }
  }
}

const randomInt = (from: number, to: number): number => {
  return Math.floor(Math.random() * (to - from)) + from
}

const getRandomStartingWord = (textGenerationData: TextGenerationData) => {
  return textGenerationData.sentenceStartingWordsArray[randomInt(0, textGenerationData.sentenceStartingWordsArray.length)]
}

const createSentence = (textGenerationData: TextGenerationData) => {
  const words = [
    getRandomStartingWord(textGenerationData).split(' ')
  ].flat()

  while(words[words.length - 1] !== 'SENTENCE_END') {
    const lastTwoWords = words[words.length - 2] + ' ' + words[words.length - 1]
    const nextPossibleWords = textGenerationData.elements[lastTwoWords]

    if(!nextPossibleWords) { words.splice(words.length - 1, 1); continue; }

    if(new Set(Object.keys(nextPossibleWords)).size === 1) {
      words.push(Object.keys(nextPossibleWords)[0])
      continue
    }

    if(nextPossibleWords['SENTENCE_END']) nextPossibleWords['SENTENCE_END'] = 1

    const probabilitiesSum = 
      Object.values(nextPossibleWords).reduce((prev, cur) => prev + cur, 0)
    
    const probabilityIndex = randomInt(0, probabilitiesSum) - 1

    const probabilityArray = Array(probabilitiesSum)
    let currentProbabilityArrayIndex = 0

    for(const [value, probability] of Object.entries(nextPossibleWords)) {
      fill(probabilityArray, value, currentProbabilityArrayIndex, currentProbabilityArrayIndex + probability)
      currentProbabilityArrayIndex += probability
    }

    words.push(probabilityArray[probabilityIndex])
  }

  return words.slice(0, words.length - 1).join(' ').replaceAll(' ,', ',').replaceAll(' ;', ',') + '.'
}

const createParagraph = (textGenerationData: TextGenerationData) => {
  const paragraphLength = randomInt(3, 10)
  const paragraphSentences = []

  for(let i = 0; i < paragraphLength; i++) {
    paragraphSentences.push(createSentence(textGenerationData))
  }

  return paragraphSentences.join(' ')
}

export const createText = (textGenerationData: TextGenerationData) => {
  const textSize = randomInt(4, 7)
  const textParagraphs = []

  for(let i = 0; i < textSize; i++) {
    textParagraphs.push(createParagraph(textGenerationData))
  }

  return textParagraphs.join('\n\n')
}