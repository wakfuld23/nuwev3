import React from 'react';
// import credits from '../../pages/credits'

const Pago = ({ nombre, id, creditos }) => {

    // console.log(nombre, id, creditos)

     const enviarDatos = (e) => {
        e.preventDefault();

        fetch(datos.formAction, {
            headers: {
                'Aceptado': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({datos: datos})
        });
    }
    
    return (
      <div className="container">
            <h1 className="text-center mt-sm-4 mb-sm-5 mt-3">Paga con Tarjeta</h1>
            <div className="row mt-sm-4 mt-3">
            <div className="card col-sm-6 col-12 pt-sm-5 py-5 mb-4" style={{background: 'lightgray' }}>
                <div className="card-body">
                        <h5># de compra: { id }</h5>
                        <h2 className="card-title">Vas a comprar:  { nombre}</h2>
                        <h3 className="card-text">Tienes { creditos }  creditos.</h3>
                </div>
            </div>
              
                <form onSubmit={ enviarDatos }
                     id="main-login"
                     action="http://don.healthedata.com/admin/login"
                     method="post"
                     className="col-12 col-sm-6 text-black">
                        <label className="form-label">Nombre y Apellido del titular:</label>
                        <input type="text" className="form-control"/>
                        <label>Número de Tarjeta:</label>
                        <input type="text" className="form-control"/>

                <div className="row mb-sm-2 mb-4">
                   <div className="col-sm-6 col-6">
                      <label>Vencimiento:</label>
                      <input type="text" className="form-control"/>
                   </div>
                   <div className="col-sm-6 col-6">
                      <label>CVV:</label>
                      <input type="text" className="form-control"/>
                   </div>
                </div>

               <button className="btn btn-dark btn-block mt-sm-1 mt-3">Comprar</button>
               </form>
            </div>
        </div>
    )
}

export default Pago