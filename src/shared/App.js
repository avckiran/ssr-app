import React from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import './main.scss';

export const App = ({ initialData }) => {
    return (
        <div>
            <Header />
            <Content items={initialData} />
            <Footer />
        </div>
    )
};
