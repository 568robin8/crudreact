  
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const ProductosContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProductosProvider = (props) => {

    // crear el state del Context
    const [Productos, guardarProductos] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerProductos = async () => {
            const url = 'http://localhost:4000/productos';

            const Productos = await axios.get(url);
            console.log(Productos);
           // guardarProductos(Productos.data.drinks);
        }
        obtenerProductos();
    }, []);

    return (
        <ProductosContext.Provider
            value={{
                Productos
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}
export default ProductosProvider;