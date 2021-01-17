import React from 'react';
import { Header } from './header';
import { LoginPage } from './login';

export default function App(): JSX.Element {
    return (
       <React.Fragment>
           <Header />
           <LoginPage />
       </React.Fragment>
       
    );
}
