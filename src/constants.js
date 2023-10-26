export const siteSections = [
  {
    header: 'Welcome!',
    property: '',
  },
  {
    header: 'Choose an animal',
    property: 'pet',
  },
  {
    header: 'Pick a name for your pet!',
    property: 'petName',
  },
  {
    header: 'Choose a number',
    property: 'minions',
  },
  {
    header: 'Pick something to learn:',
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

  return [
    `Once upon a time, in a small village in Sweden, there lived an amazing 
  ${getPronoun('boy', pronoun)} named ${name}. ${getPronoun(
      'he',
      pronoun
    )} had a ${pet}, a ${pet} named ${petName}. This ${pet} had fur that was dark,
  almost as the night sky back then. And the ${pet}'s eyes, they shone like two big 
  beautiful stars.
  <p/>
  ${name} and ${petName}, they were a team, always together, always looking for the next
  big thing. They also had not one, not two, but ${numOfMinions} tremendous minions,
  all eager to learn and help out.`,

    `One day, ${name} got this huge idea. "${petName},"  ${getPronoun(
      'he',
      pronoun
    )} said, "what if we learned how to code,
  what if we learned ${programmingLanguage} and we made something incredible?"
  <p/>
  ${petName} and ${name} - ${getPronoun(
      'he',
      pronoun
    )} they were ready to Make Coding Great Again™.
  And with ${numOfMinions} minions behind them, they were an unstoppable force.`,

    `${name} found this old book about ${programmingLanguage},
    in ${getPronoun(
      'his',
      pronoun
    )} grandfather's attic. They started small, making ${petName}'s virtual mouse run around on the screen.
    <p/>
    As time went on, they got better and better. They built games. They made puzzles, the best puzzles, that even the 
    smartest people couldn't solve. And those ${numOfMinions} minions? They were coding like you 
    wouldn't believe, turning ideas into reality using ${programmingLanguage}.
    `,

    `Word got out. People heard about ${name}, ${petName}, and their army of ${numOfMinions} 
    incredible minions, and the amazing things they were doing with coding. Kids from all over 
    wanted to learn from them. 
    <p/>
    Then, one cold night, a problem came up. The village's ancient well 
    had dried up. People were worried. But ${name}, ${petName}, and their ${numOfMinions}
    minions saw this as a chance to use their skills.
    `,
    `
    Together, they coded a system using
    ${programmingLanguage} that could track rainfall, predict the weather, and manage the water like
    you wouldn't believe. The  villagers watched, amazed, as that well started filling up again.
    <p/>
    ${name}, ${petName}, and their army of ${numOfMinions} minions, they didn't just solve a problem. They 
    showed the world what coding could do.
    `,
    `
    And that, my friends, is how the story of the Coding ${capitalize(
      pet
    )}, the Amazing ${capitalize(
      getPronoun('boy', pronoun)
    )}, and their army of ${numOfMinions} incredible minions became the stuff of legend.
    People talked about them for generations, not just for their amazing solutions, but for how they 
    brought people together through the power of coding and the strength of friendship, with an army of
    ${numOfMinions} minions leading the way.`,
  ];
};
