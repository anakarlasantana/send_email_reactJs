import React from 'react';

import './styles.css';

const Home: React.FC = () => {
    const userName = localStorage.getItem("app_user");
    return(
        <div className="container">
            <form className="paper">
            <h1>Bem vindo {userName}!</h1>
            </form>
        </div>
    );
}

export default Home;