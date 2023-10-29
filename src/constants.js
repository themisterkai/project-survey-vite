export const chooseSiteSections = (index, state) => {
  const siteSections = [
    {
      header: 'Welcome!',
      property: '',
    },
    {
      header: 'Choose an element',
      property: 'element',
    },
    {
      header: `Choose ${state.element === 'air' ? 'an' : 'a'} ${
        state.element === 'earth' ? 'land' : state.element
      } animal`,
      property: 'pet',
    },
    {
      header: `Pick a name for your ${state.pet}!`,
      property: 'petName',
    },
    {
      header: 'Choose a number',
      property: 'kitties',
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
  return index == null ? siteSections : siteSections[index];
};

export const initialState = {
  element: '',
  pet: '',
  petName: '',
  kitties: 3,
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
    label: 'he / him',
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

export const elementOptions = [
  {
    value: '',
    label: 'Select one:',
  },
  {
    value: 'air',
    label: 'air',
  },
  {
    value: 'water',
    label: 'water',
  },
  {
    value: 'earth',
    label: 'earth',
  },
];

export const petWaterOptions = [
  {
    value: 'shark',
    label: 'shark',
  },
  {
    value: 'goldfish',
    label: 'goldfish',
  },
  {
    value: 'flounder',
    label: 'flounder',
  },
];

export const petLandOptions = [
  {
    value: 'beaver',
    label: 'beaver',
  },
  {
    value: 'squirrel',
    label: 'squirrel',
  },
  {
    value: 'raccoon',
    label: 'raccoon',
  },
];

export const petAirOptions = [
  {
    value: 'eagle',
    label: 'eagle',
  },
  {
    value: 'owl',
    label: 'owl',
  },
  {
    value: 'flamingo',
    label: 'flamingo',
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
  element,
  pet,
  petName,
  kitties,
  programmingLanguage,
  pronoun,
  name,
}) => {
  const numOfKitties = numberToWords[kitties];
  name = capitalize(name.toLowerCase().trimEnd());
  petName = capitalize(petName.toLowerCase().trimEnd());
  let petType = 'fur';
  let disasterType = 'ancient trees started dying.';
  let solution = 'take better care of trees and manage the earth';
  let solution2 = 'the trees started growing again';
  if (element === 'air') {
    petType = 'feathers';
    disasterType = 'clean air became polluted.';
    solution = 'remove pollutants and manage the air';
    solution2 = 'the air started becoming clear again';
  } else if (element === 'water') {
    petType = 'scales';
    disasterType = 'ancient well had dried up.';
    solution = 'track rainfall, predict the weather, and manage the water';
    solution2 = 'that well started filling up again';
  }

  return [
    `Once upon a time, there lived a <span className="story-highlight">${getPronoun(
      'boy',
      pronoun
    )}</span> named <span className="story-highlight">${name}</span>. 
    <span className="story-highlight">${getPronoun(
      'he',
      pronoun
    )}</span> had a <span className="story-highlight">${pet}</span> named 
    <span className="story-highlight">${petName}</span> whose <span className="story-highlight">
    ${petType}</span> glistened like a bright starry night.
    <p/>
    <span className="story-highlight">${name}</span> and <span className="story-highlight">
    ${petName}</span>, they were a team, always together, always looking for the next
    big thing. They also had not one, not two, but <span className="story-highlight">
    ${numOfKitties}</span> tremendous kitties, all eager to learn and help out.`,

    `One day, <span className="story-highlight">${name}</span> got this huge idea.
    "<span className="story-highlight">${petName}</span>,"  
    <span className="story-highlight">${getPronoun(
      'he',
      pronoun
    )}</span> said, "what if we learned how to code, what if we learned
    <span className="story-highlight">${programmingLanguage}</span> and we made 
    something incredible?"
    <p/>
    <span className="story-highlight">${petName}</span> and 
    <span className="story-highlight">${name}</span>, they were ready to Make 
    Coding Great Again™. And with  <span className="story-highlight">${numOfKitties}
    </span> kitties behind them, they were an unstoppable force.`,

    `${element === 'air' ? 'An' : 'A'} <span className="story-highlight">${
      element === 'earth' ? 'forest' : element
    }</span>-fairy appeared before
    <span className="story-highlight">${name}</span> and gave
    <span className="story-highlight">${getPronoun(
      'him',
      pronoun
    )}</span> a book about <span className="story-highlight">${programmingLanguage}</span>.  
    They started small, making <span className="story-highlight">${petName}</span>'s
    virtual mouse run around on the screen.
    <p/>
    As time went on, they got better and better. They built games. They made amazing
    puzzles. And those <span className="story-highlight">${numOfKitties}</span> kitties?
    They were busy coding, turning ideas into reality using 
    <span className="story-highlight">${programmingLanguage}</span>.`,

    `Word got out. People heard about <span className="story-highlight">${name}</span>,
    <span className="story-highlight">${petName}</span>, and their
    <span className="story-highlight">${numOfKitties}</span>
    incredible kitties, and the amazing things they were doing with coding.
    <p/>
    Then, one cold night, a problem came up. The village's <span className="story-highlight">
    ${disasterType}</span> People were worried. But <span className="story-highlight">${name}</span>,
    <span className="story-highlight">${petName}</span>, and their
    <span className="story-highlight">${numOfKitties}</span>
    kitties saw this as a chance to use their skills.`,

    `Together, they coded a system using <span className="story-highlight">
    ${programmingLanguage}</span> that could <span className="story-highlight">${solution}</span>
    like you wouldn't believe. The  villagers watched, amazed, as
    <span className="story-highlight">${solution2}</span>.
    <p/>
    <span className="story-highlight">${name}</span>,
    <span className="story-highlight">${petName}</span>, and their army of
    <span className="story-highlight">${numOfKitties}</span> kitties, they didn't just
    solve a problem. They showed the world what coding could do.`,
    `
    And that, my friends, is how the story of the Coding <span className="story-highlight">
    ${capitalize(
      pet
    )}</span>, the Amazing <span className="story-highlight">${capitalize(
      getPronoun('boy', pronoun)
    )}</span>, and their <span className="story-highlight">${numOfKitties}</span>
    lovable kitties became the stuff of legend.
    <p/>
    People talked about them for generations, not just for their amazing solutions, but for
    how they brought people together through the power of coding and the strength of friendship.`,
  ];
};
