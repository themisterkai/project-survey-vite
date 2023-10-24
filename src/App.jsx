import { useState } from 'react';
import {
  initialState,
  siteSections,
  petOptions,
  programmingOptions,
} from './constants';
import { Pronouns } from './SiteSections/Pronouns';
import { RadioButton } from './SiteSections/RadioButton';
import { Name } from './SiteSections/Name';
import { Buttons } from './SiteSections/Buttons';
import { Minions } from './SiteSections/Minions';

export const App = () => {
  const [section, setSection] = useState(0);
  const [state, setState] = useState(initialState);
  return (
    <div>
      {siteSections[section].header}
      {section === 0 && (
        <RadioButton
          state={state}
          setState={setState}
          options={petOptions}
          propToChange={'pet'}
        />
      )}
      {section === 1 && (
        <Name
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 2 && <Minions state={state} setState={setState} />}
      {section === 3 && (
        <RadioButton
          state={state}
          setState={setState}
          options={programmingOptions}
          propToChange={'programmingLanguage'}
        />
      )}
      {section === 4 && (
        <Name
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 5 && <Pronouns state={state} setState={setState} />}
      <Buttons
        section={section}
        setSection={setSection}
        state={state}
        setState={setState}
      />
    </div>
  );
};
