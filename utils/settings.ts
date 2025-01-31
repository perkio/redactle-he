import { createContext } from "react";

import { Settings, SettingsState } from "@caviardeul/types";
import SaveManagement from "@caviardeul/utils/save";

export const defaultSettings: Settings = {
  lightMode: false,
  displayWordLength: true,
  withCloseAlternatives: true,
  decorateRedacted: false,
  hideZeroHits: false,
};

export const getInitialSettings = (): Settings => {
  let settings;
  try {
    settings = SaveManagement.getSettings();
  } catch (e) {
    return defaultSettings;
  }
  return {
    lightMode: settings?.lightMode ?? defaultSettings.lightMode,
    displayWordLength:
      settings?.displayWordLength ?? defaultSettings.displayWordLength,
    withCloseAlternatives:
      settings?.withCloseAlternatives ?? defaultSettings.withCloseAlternatives,
    decorateRedacted:
      settings?.decorateRedacted ?? defaultSettings.decorateRedacted,
    hideZeroHits:
      settings?.hideZeroHits ?? defaultSettings.hideZeroHits,
  };
};

export const SettingsContext = createContext<SettingsState>({
  settings: defaultSettings,
  onChangeSettings: () => {},
});
