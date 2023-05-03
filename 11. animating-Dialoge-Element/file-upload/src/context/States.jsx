import react, { createContext, useCallback, useReducer } from "react";

export const ContextState = createContext();

export function StateProvider({ children }) {
  const [{ dialog, modal }, dispatch] = useReducer(
    (state, action) => {
      switch (action.key) {
        case "set-dailog":
          return { ...state, dialog: !state.dialog };
        case "set-modal":
          return { ...state, modal: !state.modal };
        default:
          return state;
      }
    },
    {
      dialog: false,
      modal: false,
    }
  );

  const setState = useCallback((state) => {
    return dispatch({
      type: `set-${state}`,
    });
  }, []);

  return (
    <ContextState.Provider value={{ dialog, modal, setState }}>
      {children}
    </ContextState.Provider>
  );
}
