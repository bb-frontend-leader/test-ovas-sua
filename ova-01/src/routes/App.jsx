import React from 'react';
import Cover  from '../pages/cover/Cover';
import { paths } from './paths';
import NotFound from '../pages/NotFound';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
    
    return (
        <>
            <Router>
                <Suspense fallback={<span>Add spinner</span>}>
                    <Routes>
                        <Route path='/' element={ <Cover /> } />
                            {
                            paths.map( (route) => {
                                const tempComponent = route.component;
                                const Component = (props = {}) => React.cloneElement(tempComponent, { ...props })
                                
                                return (
                                    <Route path={ route.path } key={ route.id } element={ <Component/> } />
                                    );
                                })
                            } 
                        <Route component={ NotFound } />
                    </Routes>
                </Suspense>
            </Router>
        </>
    )
}

export default App;
