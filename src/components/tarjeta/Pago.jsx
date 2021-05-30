import React from 'react'

const Pago = () => {

const imgUrl = "https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    return (
        <div className="container">
            <h1 className="text-center mt-sm-4 mb-sm-5 mt-3">Paga con Tarjeta</h1>
            <div className="row mt-sm-4 mt-3">
                <div className="col-12 col-sm-6 mb-4">
                    <img src={imgUrl} alt="img-tarjeta" className="img-fluid" />
                </div>
                <form className="col-12 col-sm-6 my-auto">
                    <label className="form-label">Nombre y Apellido del titular:</label>
                    <input type="text" className="form-control mb-sm-2 mb-3"/>
                    <label>Número de Tarjeta:</label>
                    <input type="text" className="form-control mb-sm-2 mb-3"/>

                    <div className="row">
                       <div className="col-sm-6 col-6">
                          <label>Vencimiento:</label>
                          <input type="text" className="form-control"/>
                       </div>
                       <div className="col-sm-6 col-6">
                          <label>CVV:</label>
                          <input type="text" className="form-control"/>
                       </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Pago