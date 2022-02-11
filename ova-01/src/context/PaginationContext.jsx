import { createContext, useEffect, useState } from "react";
import { numberOfUnits, paths } from "../routes/paths";

// Hereda propiedades directamente
export const PaginationContext = createContext();

// Propiedades que se heredaran directamente
export const PaginationProvider = ( { children } ) => {
    const [ routes, setRoutes ] = useState( [] );
    const [ currentUnit, setCurrentUnit ] = useState( null );
    const unitTitles = [ 'Title Unit' ];
    const unitPageTitles = [
        ['Title page' ]
    ];

    // Filtra, valida y asigna unidades
    useEffect( () => {
        const allPaths = paths;
        let routesPerUnits = [];

        for ( let i = 0; i <= numberOfUnits; i++ ) {
            const filter = allPaths.filter( path => path.component_route.includes( `unit-${i}` ) );

            if ( filter.length !== 0 ) {
                routesPerUnits.push( filter );
            };
        };

        setRoutes( routesPerUnits );
    }, [] );

    return (
        <PaginationContext.Provider
            value={
                {   routes, 
                    currentUnit, 
                    unitTitles, 
                    setCurrentUnit, 
                    unitPageTitles 
                }
            } >

            { children }
        </PaginationContext.Provider>
    );
};

