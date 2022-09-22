interface RepositoriesState {
  loading: boolean;
  error: string;
  data: string[];
}

interface Action {
  type: string;
  payload?: any
};

const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
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