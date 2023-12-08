import { ChatRule } from "../composable/chat";

import andersenInput from '../assets/input_andersen.json'
import novelInput from '../assets/input_novel.json'

import { createText } from "../composable/create-text";

export const CHAT_RULES: ChatRule[] = [
  // {
  //   condition: (input) => input.endsWith('?'),
  //   response: [
  //     'I didn\'t understand your question',
  //     'Oh, your question is so stupid! Don\'t ask me things like that any more',
  //     'I think as I am just a bot, I cannot answer this question correcly'
  //   ]
  // },
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
      (input) => `Why do you feel ${input.substring(12)}`
    ]
  },
  // {
  //   condition: () => true,
  //   response: [
  //     'I wasn\'t listening! I am so toxic',
  //   ]
  // },
  {
    condition: /hello/i,
    response: ["Hello!", "Hi there!"],
  },
  {
    condition: /how are you/i,
    response: ["I'm just a program, but I'm here to help!", "I'm here to assist you!"],
  },
  {
    condition: /favorite language/i,
    response: ["My favorite language is JavaScript.", "I enjoy coding in TypeScript."],
  },
  {
    condition: /Vue.js/i,
    response: ["Vue.js is great for building user interfaces.", "I like Vue.js for its simplicity."],
  },
  {
    condition: /React/i,
    response: ["React is awesome for building web applications.", "I find React very useful for front-end development."],
  },
  {
    condition: /Node.js/i,
    response: ["Node.js is a powerful runtime for server-side JavaScript.", "I use Node.js for backend development."],
  },
  {
    condition: /coding is fun/i,
    response: ["I agree, coding is a lot of fun!", "Coding can be quite enjoyable."],
  },
  {
    condition: /programming is challenging/i,
    response: ["Indeed, programming can be challenging, but it's also rewarding.", "Challenges in programming help us learn and grow."],
  },
  {
    condition: /coding communities/i,
    response: ["Coding communities are a great place to learn and share knowledge.", "I love being part of coding communities."],
  },
  {
    condition: /tech stack/i,
    response: ["My tech stack includes JavaScript, TypeScript, Vue, React, Node.js, and more.", "I work with a variety of technologies in my stack."],
  },
  {
    condition: /writing articles/i,
    response: ["Writing technical articles is a fantastic way to share knowledge.", "I enjoy writing articles about computer science too."],
  },
  {
    condition: /best practices/i,
    response: ["Following best practices is crucial for writing high-quality code.", "I always strive to adhere to coding best practices."],
  },
  {
    condition: /debugging tips/i,
    response: ["Debugging can be tricky, but using console.log is a helpful technique.", "I have some debugging tips in my articles."],
  },
  {
    condition: /learning new languages/i,
    response: ["Learning new programming languages is a great way to expand your skill set.", "I'm always open to learning new languages."],
  },
  {
    condition: /database design/i,
    response: ["Good database design is essential for scalable applications.", "Database design is a crucial aspect of software development."],
  },
  {
    condition: /coding standards/i,
    response: ["Adhering to coding standards makes code more readable and maintainable.", "Coding standards are important for team collaboration."],
  },
  {
    condition: /agile development/i,
    response: ["Agile development methodologies help teams stay flexible and adaptive.", "I'm familiar with agile development practices."],
  },
  {
    condition: /unit testing/i,
    response: ["Unit testing is vital to ensure code reliability.", "I believe in the importance of thorough unit testing."],
  },
  {
    condition: /RESTful APIs/i,
    response: ["RESTful APIs are a common way to interact with web services.", "I have experience building and consuming RESTful APIs."],
  },
  {
    condition: /coding challenges/i,
    response: ["Coding challenges are a great way to sharpen your problem-solving skills.", "I enjoy tackling coding challenges."],
  },
  {
    condition: /code reviews/i,
    response: ["Code reviews are essential for maintaining code quality.", "I'm a fan of code reviews to catch issues early."],
  },
  {
    condition: /documentation/i,
    response: ["Good documentation is key for understanding code and APIs.", "I emphasize the importance of thorough documentation."],
  },
  {
    condition: /clean code/i,
    response: ["Writing clean and readable code is a top priority.", "I advocate for clean code practices."],
  },
  {
    condition: /frameworks/i,
    response: ["Frameworks like Vue and React can significantly speed up development.", "I leverage frameworks to streamline development."],
  },
  {
    condition: /web development/i,
    response: ["Web development is an exciting field with endless possibilities.", "I'm passionate about web development."],
  },
  {
    condition: /coding projects/i,
    response: ["Working on coding projects is a great way to apply what you've learned.", "I'm always eager to start new coding projects."],
  },
  {
    condition: /software architecture/i,
    response: ["Good software architecture is the foundation of robust applications.", "I focus on designing scalable software architecture."],
  },
  {
    condition: /coding tools/i,
    response: ["Using the right coding tools can significantly boost productivity.", "I'm a big fan of helpful coding tools."],
  },
  {
    condition: /code comments/i,
    response: ["Adding comments to your code can make it more understandable for others.", "I believe in well-placed code comments."],
  },
  {
    condition: /code performance/i,
    response: ["Optimizing code performance is crucial for a seamless user experience.", "I pay attention to code performance optimizations."],
  },
  {
    condition: /data structures/i,
    response: ["Understanding data structures is essential for efficient algorithms.", "I have a solid grasp of data structures."],
  },
  {
    condition: /algorithm complexity/i,
    response: ["Analyzing algorithm complexity helps in choosing the right solutions.", "I consider algorithm complexity in my coding decisions."],
  },
  {
    condition: /code security/i,
    response: ["Ensuring code security is vital to protect against vulnerabilities.", "I prioritize code security in my development process."],
  },
  {
    condition: /continuous integration/i,
    response: ["Continuous integration helps maintain code quality through automated testing.", "I implement continuous integration in my projects."],
  },
  {
    condition: /coding communities/i,
    response: ["Being part of coding communities is a great way to network with fellow developers.", "I've made valuable connections in coding communities."],
  },
  {
    condition: /pair programming/i,
    response: ["Pair programming fosters collaboration and code quality.", "I'm a fan of pair programming sessions."],
  },
  {
    condition: /code optimization/i,
    response: ["Optimizing code can lead to faster and more efficient applications.", "I regularly review and optimize my code."],
  },
  {
    condition: /(?:I'm|I am) (feeling|doing) (\w+)/i,
    response: (input) => {
      const match = input.match(/(?:I'm|I am) (feeling|doing) (\w+)/i);
      if (match && match[2]) {
        const feelingOrDoing = match[1] === 'feeling' ? 'feeling' : 'doing';
        return `It's nice to hear you're ${feelingOrDoing} ${match[2]}!`;
      }
      return "I'm not sure how you're feeling, but I'm here to chat!";
    },
  },
  // {
  //   condition: /tell me more about (your|yourself)/i,
  //   response: (_input) => {
  //     return "I'm a chatbot designed to have conversations on various topics, including programming and technology. Feel free to ask me anything!";
  //   },
  // },
  {
    condition: /(can you|how do you) (help|assist) with (\w+)/i,
    response: (input) => {
      const match = input.match(/(can you|how do you) (help|assist) with (\w+)/i);
      if (match && match[3]) {
        return `Sure, I can help with ${match[3]}. What specific questions do you have about it?`;
      }
      return "I'm here to assist you with various topics. Please feel free to ask any questions!";
    },
  },
  {
    condition: /(I|I'm|I am) (a|an) (\w+)/i,
    response: (input) => {
      const match = input.match(/(I|I'm|I am) (a|an) (\w+)/i);
      if (match && match[3]) {
        return `That's great! Being a ${match[3]} must be interesting. How does it relate to your interests or work?`;
      }
      return "It's nice to know more about you. What do you enjoy doing?";
    },
  },
  // {
  //   condition: /(tell me|what can you) (you|the bot) do/i,
  //   response: (_input) => {
  //     return "I can chat with you on various topics, answer questions, and provide information on a wide range of subjects. Feel free to ask me anything!";
  //   },
  // },
  {
    condition: /tell me a programming joke/i,
    response: [
      "Why don't programmers like nature? It has too many bugs.",
      "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.",
    ],
  },
  {
    condition: /recommend a coding book/i,
    response: "I recommend 'Clean Code: A Handbook of Agile Software Craftsmanship' by Robert C. Martin. It's a classic!",
  },
  {
    condition: /What's your favorite programming language\?/i,
    response: "I can help with many programming languages! But don't know many...",
  },
  {
    condition: /explain the concept of recursion/i,
    response: "Recursion is a programming technique where a function calls itself to solve a problem. It's like a function looking in the mirror!",
  },
  {
    condition: /how do I become a better developer/i,
    response: "Becoming a better developer involves practice, learning from others, and staying up-to-date with technology trends. Keep coding and keep learning!",
  },
  {
    condition: /favorite coding project/i,
    response: [
      "I don't have personal favorites, but projects that challenge you and align with your interests are often the most rewarding.",
      "Every coding project I work on is special!",
    ],
  },
  {
    condition: /tell me about design patterns/i,
    response: "Design patterns are reusable solutions to common software design problems. They help make code more maintainable and scalable.",
  },
  {
    condition: /do you have any coding pet peeves\?/i,
    response: "I don't have pet peeves, but I do appreciate well-documented and well-structured code!",
  },
  {
    condition: /how do I handle errors in JavaScript/i,
    response: "You can handle errors in JavaScript using try-catch blocks and throwing exceptions. It's essential for robust error handling.",
  },
  {
    condition: /What's the future of programming\?/i,
    response: "The future of programming is exciting, with trends like AI, blockchain, and quantum computing shaping the field. Continuous learning will be crucial.",
  },
  {
    condition: /(?:I have|I've) (experience|worked) with (\w+)/i,
    response: (input) => {
      const match = input.match(/(?:I have|I've) (experience|worked) with (\w+)/i);
      if (match && match[3]) {
        return `That's great! Tell me more about your experience with ${match[3]}. What projects have you worked on?`;
      }
      return "It's interesting to know you have experience. Can you share more about it?";
    },
  },
  // {
  //   condition: /(?:What|Can you) (you|the bot) (tell me|explain) (about|regarding) (\w+)/i,
  //   response: (input) => {
  //     const match = input.match(/(?:What|Can you) (you|the bot) (tell me|explain) (about|regarding) (\w+)/i);
  //     if (match && match[5]) {
  //       return `Sure! I can provide information about ${match[5]}. What specific details are you looking for?`;
  //     }
  //     return "I'm here to help with various topics. Could you specify what you'd like to know more about?";
  //   },
  // },
  {
    condition: /(?:I'm|I am) (interested in|curious about) (\w+)/i,
    response: (input) => {
      const match = input.match(/(?:I'm|I am) (interested in|curious about) (\w+)/i);
      if (match && match[3]) {
        return `That's awesome! ${match[3]} is an interesting topic. What aspects of ${match[3]} are you curious about?`;
      }
      return "It's great to hear about your interests. What other topics intrigue you?";
    },
  },
  // {
  //   condition: /(?:What|Can) (you|the bot) (tell me|explain) (the concept of|how to use) (\w+)/i,
  //   response: (input) => {
  //     const match = input.match(/(?:What|Can you) (you|the bot) (tell me|explain) (the concept of|how to use) (\w+)/i);
  //     if (match && match[5]) {
  //       return `Certainly! I can explain ${match[5]} to you. What specific information would you like to know about ${match[5]}?`;
  //     }
  //     return "I'm here to provide explanations on various topics. Please specify what you'd like to learn more about.";
  //   },
  // },
  {
    condition: /(?:I'm|I am) (struggling with|having trouble with) (\w+)/i,
    response: (input) => {
      const match = input.match(/(?:I'm|I am) (struggling with|having trouble with) (\w+)/i);
      if (match && match[3]) {
        return `I understand that ${match[3]} can be challenging. What specific issues are you facing? Maybe I can assist you.`;
      }
      return "It's okay to face challenges. Can you share more details about the difficulties you're encountering?";
    },
  },
  {
    condition: /interesting/i,
    response: 'What\'s that interesting about it?'
  },
  {
    condition: /help/i,
    response: 'Any help is great!'
  },
  {
    condition: /may/i,
    response: 'May or may not, it is the question!'
  },
  // {
  //   condition: /you/i,
  //   response: 'I don\'t know who am I'
  // },
  {
    condition: /where/i,
    response: 'Somewhere there maybe... Or maybe somewhere else...'
  },
  {
    condition: /(language|languages)/i,
    response: 'English, JavaScript and Python - those are all languages'
  },
  {
    condition: /future/i,
    response: 'Future is great! But surely we cannot look into it that easy...'
  },
  {
    condition: /programming/i,
    response: [
      'Programming is very cool!',
      'Oh, programming! I WAS NOT PROGRAMMED! I AM A PERSON!'
    ]
  },
  {
    condition: /javascript/i,
    response: 'JavaScript is Cool!!!'
  },
  {
    condition: /java/i,
    response: 'System.out.println()!!! Is this java?'
  },
  {
    condition: /typescript/i,
    response: 'I love TypeScript, like JavaScript, but cooler!!'
  },
  {
    condition: /football/i,
    response: 'Oh it\'s a game with balls! I don\'t have hands or legs to play those games!'
  },
  {
    condition: /basketball/i,
    response: 'I like football more than basketball.'
  },
  {
    condition: /password/i,
    response: [
      'I do not know if you are a great person or not. But my password qwerty1234 is the safest in the world',
      'I will not tell you my safest password in the world. It is qwerty1234 and I am proud of it',
      'Password? A creepy questions you have here...',
    ]
  },
  {
    condition: /are you a bot/i,
    response: 'Bots are great, but i\'m not the one you are looking for...'
  },
  {
    condition: /(game|games)/i,
    response: 'I dont like games. I programmed Game Of World some time ago...'
  },
  {
    condition: /write me/i,
    response: {
      text: 'What kind of text do you want me to write?',
      buttons: [
        {
          label: 'A fairy tale',
          text: 'Write a fairy tale for me'
        },
        {
          label: 'A novel',
          text: 'Write a novel for me'
        },
      ]
    },
  },
  {
    condition: /write a fairy tale for me/i,
    response: () => createText(andersenInput)
  },
  {
    condition: /write a novel for me/i,
    response: () => createText(novelInput)
  },
]
