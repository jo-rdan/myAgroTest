import { legacy_createStore as createStore } from "redux";

type State = {
  text: string;
};

const store = createStore<State, { type: "" }, {}, {}>(
  (state = { text: "Left" }) => state
);

export type RootStore = ReturnType<typeof store.getState>;

export default store;
