import { create } from "zustand";

interface State {
  name: string;
  lang: "ru" | "en";
}

interface Actions {
  updateName: (name: string) => void;
  updateLang: (lang: State["lang"]) => void;
}

const useStore = create<State & Actions>((set) => {
  const localData = localStorage.getItem('store');
  const defaultValue: State = {
    name: 'Hacker',
    lang: 'en'
  }

  const initialState: State = localData 
    ? JSON.parse(localData) 
    : defaultValue;


  return {
    ...initialState,

    updateName: (name) =>
      set((state) => {
        const newState = { ...state, name };
        localStorage.setItem("store", JSON.stringify(newState));
        return newState;
      }),

    updateLang: (lang) =>
      set((state) => {
        const newState = { ...state, lang };
        localStorage.setItem("store", JSON.stringify(newState));
        return newState;
      }),
  };
});

export { useStore };
