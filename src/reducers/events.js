import { CREATE_EVENT, DELETE_ALL_EVENT, DELETE_EVENT } from './../actions/index'

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body }
      const length = state.length
      let id
      length === 0 ? id = 1 : id = state[length - 1].id + 1
      return [...state, { id, ...event }]
    case DELETE_EVENT:
      return state.filter(item => item.id !== action.id)
    case DELETE_ALL_EVENT:
      return []
    default:
      return state
  }
}

export default events