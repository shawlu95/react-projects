import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      };
    case REMOVE_STORY:
      return { ...state, hits: state.hits.filter(item => item.objectID !== action.payload.objectID) };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload.query, page: 0 };
    default:
      throw new Error(`Unknown action "${action.type}"`);
  }
}
export default reducer
