import React, { FunctionComponent, useState } from 'react'
interface CreditsProps {}
import Pago from '@components/tarjeta/Pago'
import classes from './credits.module.scss'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

export const Credits: FunctionComponent<CreditsProps> = () => {
  const [checkOut, setChekOut] = useState(false)
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [creditos, setCreditos] = useState(0)
  let content

  const productos = [
    { id: 1, name: 'Auriculares', creditos: 20, cantidad: 50 },
    { id: 2, name: 'Teclado', creditos: 25, cantidad: 0 },
    { id: 3, name: 'Raton', creditos: 10, cantidad: 10 },
    { id: 4, name: 'Lampara', creditos: 5, cantidad: 10 },
    { id: 5, name: 'Monitor', creditos: 120, cantidad: 10 },
    { id: 6, name: 'Consola', creditos: 200, cantidad: 10 },
    { id: 7, name: 'Television', creditos: 250, cantidad: 10 },
    { id: 8, name: 'Movil', creditos: 200, cantidad: 10 },
    { id: 9, name: 'Auriculares', creditos: 20, cantidad: 10 },
    { id: 10, name: 'Auriculares', creditos: 20, cantidad: 10 },
    { id: 11, name: 'Auriculares', creditos: 20, cantidad: 10 },
  ]

  function handelClick(id = 0, nameProducto = '', credito = 0) {
    setId(id)
    console.log(nameProducto)
    setName(nameProducto)
    setCreditos(credito)
    setChekOut(!checkOut)
  }

  content = productos.map(articulo => {
    return (
      <div key={articulo.id} className={classes.elementos}>
        <div>
          <h4>{articulo.name}</h4>
          <p>{articulo.creditos} creditos</p>
        </div>
        {/* si articulo.cantidd = 0 hacer disabled */}
        <button onClick={() => handelClick(articulo.id, articulo.name, articulo.creditos)}>
          comprar
        </button>
      </div>
    )
  })

  return (
    <div>
      <div></div>
      {checkOut && (
        <div className={classes.containerRow}>
          <div>
            <IoArrowBackCircleOutline onClick={() => handelClick()} size={32} />
          </div>
          <Pago id={id.toString()} nombre={name} creditos={creditos.toString()} />
        </div>
      )}
      {!checkOut && (
        <div className={classes.containerColumn}>
          <h1>CANJEA TUS CREDITOS</h1>
          <div className={classes.grid}>{content}</div>
        </div>
      )}
    </div>
  )
}

export default Credits
