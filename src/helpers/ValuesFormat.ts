export const toRealBRFormat = (value : number) => {

  const brCoin = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)

  return brCoin
  
}