import { produce } from "immer";
import { shallowRef } from "vue";

export function useImmer(baseState) {
  const state = shallowRef(baseState);
  const update = (updater) => {
    const produceResult = produce(state.value, updater);
    state.value = produceResult;
  };

  return [state, update];
}
