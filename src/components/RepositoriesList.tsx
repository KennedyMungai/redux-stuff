import React, { useState } from 'react';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
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