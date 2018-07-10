export const REDUCER_KEY = 'reactAvery'

export const hydrate = (rootState, reducerKey) => (
  rootState[REDUCER_KEY][reducerKey]
)
