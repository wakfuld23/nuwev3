import React from 'react'

const Pago = () => {

    const imgUrl = "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

     constructor(props, context) {
        super(props, context);

        this.state = { description: '' };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        fetch(this.props.formAction, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: this.state.description})
        });

        this.setState({description: ''});
    }

    return (
      <div className="container">
            <h1 className="text-center mt-sm-4 mb-sm-5 mt-3">Paga con Tarjeta</h1>
            <div className="row mt-sm-4 mt-3">
            <div className="card col-sm-6 col-12 pt-sm-5 py-5 mb-4" style={{background: 'lightgray' }}>
                <div className="card-body">
                    <h5># de compra (id):</h5>
                  <h2 className="card-title">Has comprado:</h2>
                  <h3 className="card-text">Tienes ...  creditos.</h3>
                </div>
            </div>
              
               <form id="main-login"
                     action="http://don.healthedata.com/admin/login"
                     method="post"
                     className="col-12 col-sm-6">
                        <label className="form-label">Nombre y Apellido del titular:</label>
                        <input type="text" className="form-control mb-sm-1 mb-3"/>
                        <label>Número de Tarjeta:</label>
                        <input type="text" className="form-control mb-sm-1 mb-3"/>

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

               <button className="btn btn-danger btn-block">Comprar</button>
               </form>
            </div>
        </div>
    )
}

export default Pago