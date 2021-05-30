import React, { FunctionComponent } from 'react'
interface CreditsProps {}
import classes from './credits.module.scss'

export const Credits: FunctionComponent<CreditsProps> = () => {
  let content

  const productos = [
    { id: 1, name: 'Auriculares', creditos: '20', cantidad: 50 },
    { id: 2, name: 'Teclado', creditos: '25', cantidad: 0 },
    { id: 3, name: 'Raton', creditos: '10', cantidad: 10 },
    { id: 4, name: 'Lampara', creditos: '5', cantidad: 10 },
    { id: 5, name: 'Monitor', creditos: '120', cantidad: 10 },
    { id: 6, name: 'Consoloa', creditos: '200', cantidad: 10 },
    { id: 7, name: 'Television', creditos: '250', cantidad: 10 },
    { id: 8, name: 'Movil', creditos: '200', cantidad: 10 },
    { id: 9, name: 'Auriculares', creditos: '20', cantidad: 10 },
    { id: 10, name: 'Auriculares', creditos: '20', cantidad: 10 },
    { id: 11, name: 'Auriculares', creditos: '20', cantidad: 10 },
  ]

  function handelClick() {
      console.log('comprando')
  }

  content = productos.map(articulo => {
    return (
      <div key={articulo.id} className={classes.elementos}>
        <div>
          <h4>{articulo.name}</h4>
          <p>{articulo.creditos} creditos</p>
        </div>
        {/* si articulo.cantidd = 0 hacer disabled */}
        <button onClick={() => handelClick()}>comprar</button>
      </div>
    )
  })

  return (
    <div className={classes.container}>
      <h1>CANJEA TUS CREDITOS</h1>
      <div className={classes.tarjeta}>AQUI METEMOS TARJETA</div>
      <div className={classes.grid}>{content}</div>
    </div>
  )
}

export default Credits
