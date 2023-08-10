import React from 'react';

import './styles.css';

const Home: React.FC = () => {
    return(
        <div className='layout-page'>
            <h1>Bem vindo { localStorage.getItem("app_user") }</h1>
        </div>
    );
}

export default Home;