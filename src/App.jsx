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
import { Input } from './SiteSections/Input';
import { Buttons } from './SiteSections/Buttons';
import { Range } from './SiteSections/Range';
import { Story } from './SiteSections/Story';

export const App = () => {
  const [section, setSection] = useState(0);
  const [state, setState] = useState(initialState);

  const regex = /^[a-z][a-z\s]*$/;

  const inputValidation = input => {
    if (!regex.test(input)) {
      setState({ ...state, error: 'Only letters and spaces are allowed' });
    } else {
      setState({ ...state, error: '' });
    }
    if (
      state.petName !== '' &&
      state.petName.toLowerCase() === state.name.toLowerCase()
    ) {
      setState({
        ...state,
        error: 'Please choose different names for your pet and yourself',
      });
    } else {
      setState({ ...state, error: '' });
    }
  };
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
        <Input
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
          section={section}
          setSection={setSection}
          validate={inputValidation}
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
        <Input
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
          section={section}
          setSection={setSection}
          validate={inputValidation}
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
      {state.error}
    </div>
  );
};
