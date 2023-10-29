import { useState } from 'react';
import {
  initialState,
  // siteSections,
  petAirOptions,
  petWaterOptions,
  petLandOptions,
  programmingOptions,
  pronounOptions,
  elementOptions,
  chooseSiteSections,
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
  const [sectionIndex, setSectionIndex] = useState(0);
  const [state, setState] = useState(initialState);
  const element = state.element;

  const regex = /^[a-z][a-z\s]*$/;

  const inputValidation = input => {
    if (state.petName !== '' && !regex.test(input)) {
      setState({ ...state, error: 'Only letters and spaces are allowed' });
    } else if (
      state.petName !== '' &&
      state.petName.toLowerCase().trimEnd() ===
        state.name.toLowerCase().trimEnd()
    ) {
      setState({
        ...state,
        error: 'Please choose different names for your pet and yourself',
      });
    } else {
      setState({ ...state, error: '' });
    }
  };

  const currentSection = chooseSiteSections(sectionIndex, state);
  const allSectionLength = chooseSiteSections(null, state).length;

  return (
    <div className="main-container">
      {sectionIndex > 0 && sectionIndex < allSectionLength - 1 ? (
        <ProgressBar
          completed={Math.round((sectionIndex / (allSectionLength - 1)) * 100)}
        />
      ) : (
        <></>
      )}
      <Header text={currentSection.header} />
      {sectionIndex === 0 && <Start />}
      {sectionIndex === 1 && (
        <Dropdown
          state={state}
          setState={setState}
          options={elementOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 2 && element === 'air' && (
        <RadioButton
          state={state}
          setState={setState}
          options={petAirOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 2 && element === 'water' && (
        <RadioButton
          state={state}
          setState={setState}
          options={petWaterOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 2 && element === 'earth' && (
        <RadioButton
          state={state}
          setState={setState}
          options={petLandOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 3 && (
        <Input
          state={state}
          setState={setState}
          propToChange={currentSection.property}
          sectionIndex={sectionIndex}
          setSectionIndex={setSectionIndex}
          validate={inputValidation}
        />
      )}
      {sectionIndex === 4 && (
        <Range
          state={state}
          setState={setState}
          min={3}
          max={20}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 5 && (
        <RadioButton
          state={state}
          setState={setState}
          options={programmingOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 6 && (
        <Input
          state={state}
          setState={setState}
          propToChange={currentSection.property}
          sectionIndex={sectionIndex}
          setSectionIndex={setSectionIndex}
          validate={inputValidation}
        />
      )}
      {sectionIndex === 7 && (
        <Dropdown
          state={state}
          setState={setState}
          options={pronounOptions}
          propToChange={currentSection.property}
        />
      )}
      {sectionIndex === 8 && <Story state={state} />}
      <Buttons
        sectionIndex={sectionIndex}
        setSectionIndex={setSectionIndex}
        state={state}
        setState={setState}
        sectionLength={allSectionLength}
        currentSection={currentSection}
      />
      <Error error={state.error} />
      {sectionIndex === 0 && <Footer />}
    </div>
  );
};
