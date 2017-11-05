export const ROOT_REDUCER_KEY = 'printVINForm'

const hydrateState = (state, reducerKey) => (
  state[ROOT_REDUCER_KEY][reducerKey]
)

export default hydrateState
