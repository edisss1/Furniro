interface ProductCountAction {
  type: "INCREASE" | "DECREASE"
  payload: number
}

interface ProductCountState {
  count: number
}

export const reducerStates = (
  state: ProductCountState,
  action: ProductCountAction
) => {
  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + action.payload }
    case "DECREASE":
      return {
        ...state,
        count: state.count <= 0 ? 0 : state.count - action.payload,
      }
  }
}
