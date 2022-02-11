import U1p1 from "../pages/unit-1/U1p1";

/*
 * Ingresar cantidad de unidades del OVA
 * Ingresar en cada posicion del array el numero de paginas que contiene cada unidad
 */
export const numberOfUnits =  1;
export const numberOfPages = [ 1 ];

export const paths = [
    {
        id: 1,
        path:`/unit/1/page/1`,
        component: <U1p1 />,
        component_route: `unit-1/u1p1`
    }
];