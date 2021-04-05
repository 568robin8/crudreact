import React from 'react'

function Producto() {
    return (
        <tr>
            <td>p2</td>
            <td><span className="font-weight-bold"> $ 44 </span></td>
            <td className="acciones">
                <button 
                    type="button"
               
                    className="btn btn-primary mr-2">
                    Editar
                </button>
                <button 
                    type="button"
                    className="btn btn-danger"
                  
                >Eliminar </button>
            </td>
        </tr>
    )
}

export default Producto
