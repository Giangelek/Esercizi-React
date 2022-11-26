import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_LANGUAGE: "Ich speak Saxọ̄̆nlī, a'd thee musÞ diæ",
  },
  it: {
    CURRENT_LANGUAGE: "La mea favella è l'italico",
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
            return;
            <p>{Strings[Language].CURRENT_LANGUAGE}</p>;
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
