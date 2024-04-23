import { Language } from "../types/Language";

export interface State {
  langs?: Language[];
  actualLang?: Language | null;
}

export enum Action {
  setActualLangs = "setLang",
}

export type ActionType = { type: Action.setActualLangs; data: Language };

export const initialState: State = {
  langs: [],
  actualLang: null,
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case Action.setActualLangs:
      return { ...state, actualLang: action.data };
    default:
      return state;
  }
};

export const setActualLang = (
  dispatch: React.Dispatch<ActionType>,
  data: Language
) => {
  dispatch({ type: Action.setActualLangs, data });
};
