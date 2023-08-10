import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './styles.css';

// import LoginForm from '../../components/LoginForm';

import AppRoutes from '../../routes/routes';

const Layout: React.FC = () => {
    return(
        <div className="container">
            <div className="layout-page-left">  
                <Row className="row-custom">
                <AppRoutes />
                </Row>
            </div>
        </div>       
    );
}

export default Layout;