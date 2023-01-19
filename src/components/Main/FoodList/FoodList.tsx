import React, { FC, useState } from 'react'
import { IMock } from '../Main'
import FoodItem from './FoodItem/FoodItem'
import styles from './FoodList.module.scss'

interface IFoodList {
  mockData: IMock[]
}

export interface ICatsFoodList {
  id: string,
  isOutMouse: boolean,
}

const FoodList:FC<IFoodList> = ({mockData}) => {
  const [catsFoodList, setCatsFoodList] = useState<ICatsFoodList[]>([])

  const toggleCatsFood = (id: string) => {
    if(catsFoodList.find(catsFoodItem => catsFoodItem.id === id)) {
      setCatsFoodList((prev) => prev.filter(food => food.id !== id))
    }
    else {
      setCatsFoodList((prev) => [...prev, {id, isOutMouse: false}])
    }
  }

  return (
    <ul className={styles.catsFoodList}>
    {mockData.map((catsFood) => {
      const selectedFood = catsFoodList.find(catsFoodItem => catsFoodItem.id === catsFood.id)

      return (<FoodItem key={catsFood.id} toggleCatsFood={toggleCatsFood} catsFood={catsFood} selectedFood={selectedFood || null}/>)
    })}
  </ul>
  )
}

export default FoodList