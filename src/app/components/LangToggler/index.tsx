"use client";

import { Action, Lang } from "@/app/shared/react-store/store";
import { useStore } from "@/app/shared/react-store/useStore";

export type LangTogglerProps = {
  customAction?: (lang: Lang) => void;
};

const LangToggler: React.FC<LangTogglerProps> = ({ customAction }) => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <select
        defaultValue={0}
        id="langSelect"
        onChange={(event) => {
          const lang = event.target.value;
          customAction?.(JSON.parse(lang)) ??
            dispatch({ type: Action.setActualLangs, data: JSON.parse(lang) });
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
