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
import { Header } from './SiteSections/Header';
import { Start } from './SiteSections/Start';
import { Error } from './SiteSections/Error';
import { ProgressBar } from './SiteSections/ProgressBar';
import { Footer } from './SiteSections/Footer';

export const App = () => {
  const [section, setSection] = useState(0);
  const [state, setState] = useState(initialState);

  const regex = /^[a-z][a-z\s]*$/;

  const inputValidation = input => {
    if (state.petName !== '' && !regex.test(input)) {
      setState({ ...state, error: 'Only letters and spaces are allowed' });
    } else if (
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
    <div className="main-container">
      {section > 0 && section < siteSections.length - 1 ? (
        <ProgressBar
          completed={Math.round((section / (siteSections.length - 1)) * 100)}
        />
      ) : (
        <></>
      )}
      <Header text={siteSections[section].header} />
      {section === 0 && <Start />}
      {section === 1 && (
        <RadioButton
          state={state}
          setState={setState}
          options={petOptions}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 2 && (
        <Input
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
          section={section}
          setSection={setSection}
          validate={inputValidation}
        />
      )}
      {section === 3 && (
        <Range
          state={state}
          setState={setState}
          min={3}
          max={20}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 4 && (
        <RadioButton
          state={state}
          setState={setState}
          options={programmingOptions}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 5 && (
        <Input
          state={state}
          setState={setState}
          propToChange={siteSections[section].property}
          section={section}
          setSection={setSection}
          validate={inputValidation}
        />
      )}
      {section === 6 && (
        <Dropdown
          state={state}
          setState={setState}
          options={pronounOptions}
          propToChange={siteSections[section].property}
        />
      )}
      {section === 7 && <Story state={state} />}
      <Buttons
        section={section}
        setSection={setSection}
        state={state}
        setState={setState}
      />
      <Error error={state.error} />
      {section === 0 && <Footer />}
    </div>
  );
};
