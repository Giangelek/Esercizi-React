import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    current_text: "Ich speak Saxọ̄̆nlī, a'd thee musÞ diæ",
  },
  it: {
    current_text: "La mea favella è l'italico, e lei messere debe perire",
  },
};

export class DisplayLanguage extends React.Component {
  state = {
    CURRENT_LANGUAGE: "en",
  };

  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return(
            <p>{Strings[Language].current_text}</p>)
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
