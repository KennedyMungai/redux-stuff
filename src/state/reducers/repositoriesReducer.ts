interface RepositoriesState {
  loading: boolean;
  error: string;
  data: string[];
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
};

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
};

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
};

type Action = SearchRepositoriesAction | SearchRepositoriesErrorAction | SearchRepositoriesSuccessAction ;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success'
};

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