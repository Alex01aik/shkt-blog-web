"use client";

import { useReducer, ReactNode } from "react";
import { Lang, State, initialState, reducer } from "./store";
import { StoreContext } from "./useStore";

interface StoreProviderProps {
  children: ReactNode;
  initData?: State;
}

export function StoreProvider({ children, initData }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...initData,
  });

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
