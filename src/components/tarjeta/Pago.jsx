import React, { useState } from 'react'

const Pago = ({ id, nombre, creditos }) => {
  const [cardInfo, setCardInfo] = useState({
    name: '',
    number: '',
    expiration: '',
    CVV: '',
  })
  const imgUrl =
    'https://images.pexels.com/photos/4968633/pexels-photo-4968633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

  const handleChange = event => {
    const { name, value } = event.target
    setCardInfo(prev => ({ ...prev, [name]: value }))
    console.log(cardInfo)
  }

  const onSubmit = event => {
    event.preventDefault()
    fetch('', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description: this.state.description }),
    })
  }

  return (
    <div className='container'>
      <h1 className='text-center mt-sm-4 mb-sm-5 mt-3'>Paga con Tarjeta</h1>
      <div className='row mt-sm-4 mt-3'>
        <div className='card col-sm-6 col-12 pt-sm-5 py-5 mb-4' style={{ background: 'lightgray' }}>
          <div className='card-body'>
            <h5>ID de compra {id}</h5>
            <h2 className='card-title'>Has comprado: {nombre}</h2>
            <h3 className='card-text'>Tienes {creditos} creditos.</h3>
          </div>
        </div>

        <form id='main-login' onSubmit={onSubmit} className='col-12 col-sm-6 my-auto'>
          <label className='form-label'>Nombre y Apellido del titular:</label>
          <input
            type='text'
            className='form-control mb-sm-2 mb-3'
            name='name'
            onChange={handleChange}
          />
          <label>Número de Tarjeta:</label>
          <input
            type='text'
            className='form-control mb-sm-2 mb-3'
            name='number'
            onChange={handleChange}
          />

          <div className='row'>
            <div className='col-sm-6 col-6'>
              <label>Vencimiento:</label>
              <input
                type='text'
                className='form-control'
                name='expiration'
                onChange={handleChange}
              />
            </div>
            <div className='col-sm-6 col-6'>
              <label>CVV:</label>
              <input type='text' className='form-control' name='CVV' onChange={handleChange} />
            </div>
          </div>
          <button className='btn btn-danger btn-block'>Comprar</button>
        </form>
      </div>
    </div>
  )
}

export default Pago
