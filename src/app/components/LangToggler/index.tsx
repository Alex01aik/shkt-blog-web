"use client";

import { Action } from "@/app/shared/react-store/store";
import { useStore } from "@/app/shared/react-store/useStore";
import { Language } from "@/app/shared/types/Language";

export type LangTogglerProps = {
  customAction?: (lang: Language) => void;
};

const LangToggler: React.FC<LangTogglerProps> = ({ customAction }) => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <select
        defaultValue={0}
        className="button"
        onChange={(event) => {
          const lang = event.target.value;
          if (customAction) {
            customAction(JSON.parse(lang));
          } else {
            dispatch({ type: Action.setActualLangs, data: JSON.parse(lang) });
          }
        }}
      >
        {state.langs?.map((item) => {
          return (
            <option key={item.lang} value={JSON.stringify(item)}>
              {item.lang}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default LangToggler;
