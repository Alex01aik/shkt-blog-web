import { getPosts as getPostsQuery } from "../api";

export type Lang = {
  lang: string;
  fullLang: string;
  alternativeLang: string;
};

export type Post = {
  id: string;
  localePosts: {
    title: string;
    body: string;
    languageLang: string;
  }[];
};

export interface State {
  langs?: Lang[];
  actualLang?: Lang | null;
  posts: Post[];
}

export enum Action {
  setActualLangs = "setLang",
  setPosts = "setPosts",
}

export type ActionType =
  | { type: Action.setActualLangs; data: Lang }
  | { type: Action.setPosts; data: Post[] };

export const initialState: State = {
  langs: [],
  actualLang: null,
  posts: [],
};

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case Action.setActualLangs:
      return { ...state, actualLang: action.data };
    case Action.setPosts:
      return { ...state, posts: action.data };
    default:
      return state;
  }
};

export const setActualLang = (
  dispatch: React.Dispatch<ActionType>,
  data: Lang
) => {
  dispatch({ type: Action.setActualLangs, data });
};

export const getPosts = async (
  dispatch: React.Dispatch<ActionType>,
  state: State
) => {
  const posts = await getPostsQuery(state.actualLang!.lang);

  if (true) {
    dispatch({ type: Action.setPosts, data: posts as Post[] });
  }
};
