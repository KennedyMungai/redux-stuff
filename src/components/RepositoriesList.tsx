import React, { useState } from 'react';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <form action="">
                <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;