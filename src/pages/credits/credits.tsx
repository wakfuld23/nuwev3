import React, { FunctionComponent, useState, useEffect } from 'react'
interface CreditsProps {}
import Pago from '../../components/tarjeta/Pago'
import classes from './credits.module.scss'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

export const Credits: FunctionComponent<CreditsProps> = () => {
  const [checkOut, setChekOut] = useState(false)
  const [productos, setProductos] = useState([
    { id: 1, name: 'Auriculares', credits: 20, cantidad: 50 },
  ])
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [creditos, setCreditos] = useState(0)
  let content


  function handelClick(id = 0, nameProducto = '', credito = 0) {
    setId(id)
    setName(nameProducto)
    setCreditos(credito)
    setChekOut(!checkOut)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      console.log(1)
      await fetch(`https://nuwe-htsv3-api.herokuapp.com/products`, {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('NUWE_TKN')!,
        },
      })
        .then(response => response.json())
        .then(response => {
          console.log(response.products)
          setProductos(response.products)
        })

        .catch(err => console.log(err))
    }

    fetchProducts()
  }, [])

  if (productos.length > 1) {
    content = productos.map(articulo => {
      return (
        <div key={articulo.id} className={classes.elementos}>
          <div>
            <h4>{articulo.name}</h4>
            <p>{articulo.credits} creditos</p>
          </div>
          {/* si articulo.cantidd = 0 hacer disabled */}
          <button onClick={() => handelClick(articulo.id, articulo.name, articulo.credits)}>
            comprar
          </button>
        </div>
      )
    })
  }

  return (
    <div>
      <div></div>
      {checkOut && (
        <div className={classes.containerRow}>
          <div>
            <IoArrowBackCircleOutline onClick={() => handelClick()} size={32} />
          </div>
          <Pago id={id} nombre={name} creditos={creditos} />
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
