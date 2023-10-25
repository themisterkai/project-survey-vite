export const siteSections = [
  {
    header: 'Choose an animal',
    property: 'pet',
  },
  {
    header: 'What should we call your new pet?',
    property: 'petName',
  },
  {
    header: 'Choose a number',
    property: 'minions',
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
    header: '',
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
  error: '',
};

export const pronounOptions = [
  {
    value: '',
    label: 'Select one:',
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
    value: 'JavaScript',
    label: 'JavaScript',
  },
  {
    value: 'Python',
    label: 'Python',
  },
  {
    value: 'GoLang',
    label: 'GoLang',
  },
  {
    value: 'Ruby',
    label: 'Ruby',
  },
  {
    value: 'COBOL',
    label: 'COBOL',
  },
];

const numberToWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
];

const capitalize = wordToCapitalize =>
  wordToCapitalize.charAt(0).toUpperCase() + wordToCapitalize.slice(1);

const getPronoun = (type, pronoun) => {
  const pronounMap = {
    he: {
      he: 'he',
      she: 'she',
      they: 'they',
    },
    him: {
      he: 'him',
      she: 'her',
      they: 'them',
    },
    his: {
      he: 'his',
      she: 'her',
      they: 'their',
    },
    boy: {
      he: 'boy',
      she: 'girl',
      they: 'child',
    },
  };
  return pronounMap[type][pronoun];
};

export const getTitle = ({ pet, pronoun }) => {
  return `The Coding ${capitalize(pet)} and the Amazing ${capitalize(
    getPronoun('boy', pronoun)
  )}`;
};

export const generateStory = ({
  pet,
  petName,
  minions,
  programmingLanguage,
  pronoun,
  name,
}) => {
  const numOfMinions = numberToWords[minions];
  name = capitalize(name.toLowerCase());
  petName = capitalize(petName.toLowerCase());

  return `Once upon a tremendous time, in a tremendous village, there lived an amazing 
  ${getPronoun(
    'boy',
    pronoun
  )} named ${name}. Let me tell you, this kid was something special. And ${getPronoun(
    'he',
    pronoun
  )} had a ${pet},
  folks, a ${pet} named ${petName}. This ${pet}, let me tell you, had fur that was so dark, 
  it was almost as dark as the fake news. And the ${pet}'s eyes, oh boy, they shone like two big 
  beautiful stars.
  <p/>
  So, ${name} and ${petName}, they were a team, always together, always looking for the next
  big thing. And guess what? They had not one, not two, but ${numOfMinions} tremendous minions,
  all eager to learn and help out.
  <p/>
  One day, ${name} got this huge idea. "${petName},"  ${getPronoun(
    'he',
    pronoun
  )} said, "what if we learned how to code,
  what if we learned ${programmingLanguage} and we made something incredible?"
  <p/>
  ${petName}, folks, this ${pet} was on board. And ${name} - ${getPronoun(
    'he',
    pronoun
  )} ${pronoun === 'they' ? 'were' : 'was'} ready to Make Coding Great Again™.
  And with ${numOfMinions} minions behind them, they were an unstoppable force.
  <p/>
  ${name} found this old book, folks, a really tremendous book about ${programmingLanguage},
  in ${getPronoun(
    'his',
    pronoun
  )} grandfather's attic. It had all these crazy symbols and weird words. It was like nothing
  you'd ever seen. But ${name}, ${getPronoun('he', pronoun)} ${
    pronoun === 'they' ? 'were' : 'was'
  } a winner, and with ${petName} by ${getPronoun('his', pronoun)} side and
  ${numOfMinions} minions at their disposal, they jumped into it.
  <p/>
  They started small, you know, making ${petName}'s virtual mouse run around on the screen. ${name}
  was typing away, like a champ, with ${petName} right there, giving ${getPronoun(
    'him',
    pronoun
  )} that winning spirit.
  And those ${numOfMinions} minions? They were taking notes, ready to tackle any task.
  <p/>
  As time went on, they got better and better. They built games, amazing games, where virtual
  birds flew through the digital sky. They made puzzles, the best puzzles, that even the 
  smartest people couldn't solve. And those ${numOfMinions} minions? They were coding like you 
  wouldn't believe, turning ideas into reality using ${programmingLanguage}.
  <p/>
  Word got out, folks. People heard about ${name}, ${petName}, and their army of ${numOfMinions} 
  incredible minions, and the amazing things they were doing with coding. Kids from all over 
  wanted to learn from them. They formed a fantastic community, a real powerhouse of knowledge 
  and support, with those ${numOfMinions} minions leading the way.
  <p/>
  Then, one cold night, a problem came up. The village's ancient well, a real piece of history,
  had dried up. People were worried, let me tell you. But ${name}, ${petName}, and their ${numOfMinions}
  minions saw this as a chance to use their skills.
  <p/>
  With ${petName} right there, and ${numOfMinions} minions at their disposal, they coded a system using
  ${programmingLanguage} that could track rainfall, predict the weather, and manage the water like
  you wouldn't believe. The  villagers watched, amazed, as that well started filling up again.
  <p/>
  ${name}, ${petName}, and their army of ${numOfMinions} minions, they didn't just solve a problem. They 
  showed the world what coding could do.
  <p/>
  As time went on, they kept at it. They made all sorts of gadgets, and they tackled problems big and 
  small. The village thrived, and so did the hearts of the people in it.
  <p/>
  And that, my friends, is how the story of the Coding ${capitalize(
    pet
  )}, the Amazing ${capitalize(
    getPronoun('boy', pronoun)
  )}, and their army of ${numOfMinions} incredible minions became the stuff of legend.
  People talked about them for generations, not just for their amazing solutions, but for how they 
  brought people together through the power of coding and the strength of friendship, with an army of
  ${numOfMinions} minions leading the way.
  <p/>
  In the hearts of those who heard this tale, the spirit of ${name}, ${petName}, and their 
  ${numOfMinions} minions lived on, inspiring dreams of a world that's even greater, even more 
  connected. Believe me.`;
};
