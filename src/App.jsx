import { useState } from 'react';
import {
  initialState,
  siteSections,
  petOptions,
  programmingOptions,
  pronounOptions,
} from './constants';
import { Dropdown } from './SiteSections/Dropdown';
import { RadioButton } from './SiteSections/RadioButton';
import { Name } from './SiteSections/Name';
import { Buttons } from './SiteSections/Buttons';
import { Range } from './SiteSections/Range';
import { Story } from './SiteSections/Story';

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
          propToChange={siteSections[section].property}
        />
      )}
      {section === 1 && (
        <Name
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 2 && (
        <Range
          state={state}
          setState={setState}
          min={3}
          max={20}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 3 && (
        <RadioButton
          state={state}
          setState={setState}
          options={programmingOptions}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 4 && (
        <Name
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 5 && (
        <Dropdown
          state={state}
          setState={setState}
          options={pronounOptions}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 6 && <Story state={state} />}
      <Buttons
        section={section}
        setSection={setSection}
        state={state}
        setState={setState}
      />
    </div>
  );
};
