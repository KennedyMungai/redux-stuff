import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { actionCreators } from '../state';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(actionCreators.searchRepositories(term));
    };

    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;