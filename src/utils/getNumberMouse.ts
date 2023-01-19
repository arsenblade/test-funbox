export const getNumberMouse = (number: number) => {
  if(number === 1) {
    return 'мышь в подарок'
  }
  else if(number > 1 && number < 5) {
    return 'мыши в подарок'
  }

  return 'мышей в подарок'
}