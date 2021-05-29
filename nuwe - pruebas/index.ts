const data: User[] = require('./MOCK_DATA')

interface User {
  id: string
  first_name: string
  last_name: string
  ip: string
  pet?: string
}

// - *PrimerItem*: Número de veces que aparece el nombre Nuwe como last_name
const getFirstItem = (lastName = 'Nuwe') => {
  return data.filter(item => item.last_name === lastName).length
}

// - *SecondItem*: Coger el primer id con Nuwe, eliminar todas las mayúsculas y las minúsculas
const getSecondItem = () => {
  const secondItem = data.find(item => item.last_name === 'Nuwe')?.id
  return secondItem
    ?.split('')
    .filter(char => +char)
    .join('')
}

// - *ThirdItem*: De elementos que no tiene el atributo **[pet]** coger el màximo del primer elemento del parámetro ip
const getThirdItem = () => {
  const petLess = data.filter(item => !item.pet)
  const ips = petLess.map(item => +item.ip.split('.')[0])
  return Math.max(...ips)
}

module.exports = { getFirstItem, getSecondItem, getThirdItem }
// 9-129873-248
