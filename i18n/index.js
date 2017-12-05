import I18n from "react-native-i18n";
import fi from "./fi";
import en from "./en";
import sv from "./sv";

I18n.fallbacks = true; // Falls back to English if device language not available.

let translations = {
  en,
  sv,
  fi
};

I18n.translations = translations;

export default I18n;
