interface RepositoriesState {
  loading: boolean;
  error: string;
  data: string[];
}

interface SearchRepositoriesAction {
  type: 'search_repositories';
};

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
};

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
};

const reducer = (state: RepositoriesState, action: SearchRepositoriesAction | SearchRepositoriesErrorAction | SearchRepositoriesSuccessAction): RepositoriesState => {
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: '',data:[]  }
    case 'search_repositories_success':
      return { loading: false, error: '', data: action.payload }
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data:[] }
    default:
      return state;
  }
}

export default reducer;