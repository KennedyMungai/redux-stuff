import { ActionType } from '../action-types/index';
import { Action } from '../actions/index';

interface RepositoriesState {
  loading: boolean;
  error: string;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: '', data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: '', data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
}

export default reducer;