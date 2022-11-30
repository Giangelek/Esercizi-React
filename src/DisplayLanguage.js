import {React, useContext} from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    current_text: "Ich speak Saxọ̄̆nlī, a'd thee musÞ diæ",
  },
  it: {
    current_text: "La mea favella è l'italico, e lei messere debe perire",
  },
};

export function DisplayLanguage() {
  const Language = useContext(LanguageContext);

  return (
    <div>
      <p>{Strings[Language].current_text}</p>
    </div>
  );
}
