import React, { useState } from 'react';


const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            <form action="">
                <input type="text" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default RepositoriesList;