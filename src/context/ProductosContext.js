  
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el Context
export const ProductosContext = createContext();

// Provider es donde se encuentran las funciones y state
const ProductosProvider = (props) => {

    // crear el state del Context
    const [productos, guardarProductos] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerProductos = async () => {
            const url = 'http://localhost:4000/productos';

            const productos = await axios.get(url);
            console.log(productos);
            guardarProductos(productos.data);
        }
        obtenerProductos();
    }, []);


    const deleteAxios = async (id) => {
        const resultado =  await axios.delete(`http://localhost:4000/productos/${id}`);
    }

    const deleteProducts = (productoeliminar) => {
        deleteAxios(productoeliminar);
        guardarProductos(productos.filter( producto => producto.id !== productoeliminar));
    }

    return (
        <ProductosContext.Provider
            value={{
                productos,
                deleteProducts
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}
export default ProductosProvider;