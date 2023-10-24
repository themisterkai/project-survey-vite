export const siteSections = [
  {
    header: 'What kind of pet do you want to have?',
    property: 'pet',
  },
  {
    header: 'Choose a name for your pet',
    property: 'petName',
  },
  {
    header: 'How many minions do you want to have?',
    property: 'minion',
  },
  {
    header: 'Which programming language do you want to learn?',
    property: 'programmingLanguage',
  },
  {
    header: `What's your name?`,
    property: 'name',
  },
  {
    header: `What are your pronouns?`,
    property: 'pronoun',
  },
  {
    header: `Story`,
    property: '',
  },
];

export const initialState = {
  pet: '',
  petName: '',
  minions: 3,
  programmingLanguage: '',
  pronoun: '',
  name: '',
};

export const pronounOptions = [
  {
    value: '',
    label: 'Select a Pronoun:',
  },
  {
    value: 'he',
    label: 'he / his',
  },
  {
    value: 'she',
    label: 'she / her',
  },
  {
    value: 'they',
    label: 'they / them',
  },
];

export const petOptions = [
  {
    value: 'cat',
    label: 'cat 🐈‍',
  },
  {
    value: 'dog',
    label: 'dog 🐕',
  },
  {
    value: 'squirrel',
    label: 'squirrel 🐿️',
  },
  {
    value: 'raccoon',
    label: 'raccoon 🦝',
  },
];

export const programmingOptions = [
  {
    value: 'javascript',
    label: 'JavaScript',
  },
  {
    value: 'python',
    label: 'Python',
  },
  {
    value: 'goLang',
    label: 'GoLang',
  },
  {
    value: 'ruby',
    label: 'Ruby',
  },
  {
    value: 'cobol',
    label: 'COBOL',
  },
];

export const generateStory = ({
  pet,
  petName,
  minions,
  programmingLanguage,
  pronoun,
  name,
}) => {
  return `Once upon a tremendous time, in a tremendous village, there lived an amazing boy named ${name}. Let me tell you, this kid was something special. And he had a ${pet}, folks, a ${pet} named ${petName}. This ${pet}, let me tell you, had fur that was so dark, it was almost as dark as the fake news. And his eyes, oh boy, they shone like two big beautiful stars.

  So, ${name} and ${petName}, they were a team, always together, always looking for the next big thing. And guess what? They had not one, not two, but ${minions} tremendous minions, all eager to learn and help out.
  
  One day, ${name} got this huge idea. "${petName}," he said, "what if we learned how to code, and we made something incredible?"
  
  ${petName}, folks, this ${pet} was on board. He was ready to make coding great again. And with ${minions} minions behind them, they were an unstoppable force.
  
  ${name} found this old book, folks, a really tremendous book, in his grandfather's attic. It had all these crazy symbols and weird words. It was like nothing you'd ever seen. But ${name}, he was a winner, and with ${petName} by his side and ${minions} minions at their disposal, they jumped into it.
  
  They started small, you know, making ${petName}' virtual mouse run around on the screen. ${name} was typing away, like a champ, with ${petName} right there, giving him that winning spirit. And those ${minions} minions? They were taking notes, ready to tackle any task.
  
  As time went on, they got better and better. They built games, amazing games, where virtual birds flew through the digital sky. They made puzzles, the best puzzles, that even the smartest people couldn't solve. And those ${minions} minions? They were coding like you wouldn't believe, turning ideas into reality.
  
  Word got out, folks. People heard about ${name}, ${petName}, and their army of ${minions} incredible minions, and the amazing things they were doing with coding. Kids from all over wanted to learn from them. They formed a fantastic community, a real powerhouse of knowledge and support, with those ${minions} minions leading the way.
  
  Then, one cold night, a problem came up. The village's ancient well, a real piece of history, had dried up. People were worried, let me tell you. But ${name}, ${petName}, and their ${minions} minions saw this as a chance to use their skills.
  
  With ${petName} right there, and ${minions} minions at their disposal, they coded a system that could track rainfall, predict the weather, and manage the water like you wouldn't believe. The villagers watched, amazed, as that well started filling up again.
  
  ${name}, ${petName}, and their army of ${minions} minions, they didn't just solve a problem. They showed the world what coding could do.
  
  As time went on, they kept at it. They made all sorts of gadgets, and they tackled problems big and small. The village thrived, and so did the hearts of the people in it.
  
  And that, my friends, is how the story of the Coding ${pet}, the Amazing Boy, and their army of ${minions} incredible minions became the stuff of legend. People talked about them for generations, not just for their amazing solutions, but for how they brought people together through the power of coding and the strength of friendship, with an army of ${minions} minions leading the way.
  
  In the hearts of those who heard this tale, the spirit of ${name}, ${petName}, and their ${minions} minions lived on, inspiring dreams of a world that's even greater, even more connected. Believe me.`;
};
