import styles from './FoodItem.module.scss'
import cn from 'classnames'
import { FC } from 'react'
import { IMock } from '../../Main'
import {useState} from 'react'
import { getNumberMouse } from '../../../../utils/getNumberMouse'
import { ICatsFoodList } from '../FoodList'

interface IFoodItem {
  catsFood: IMock,
  selectedFood: ICatsFoodList | null;
  toggleCatsFood: (id: string) => void,
}

const FoodItem:FC<IFoodItem> = ({toggleCatsFood, catsFood, selectedFood}) => {
  const [visuallyHover, setVisuallyHover] = useState<boolean>(false)

  let miniTitleText = 'Сказочное заморское яство'
  let sloganText = 'Чего сидишь? Порадуй котэ, '
  let bonusText = ` ${getNumberMouse(catsFood.bonus)} ${catsFood.bonus >= 5 ? 'заказчик доволен' : ''}`

  if(selectedFood && visuallyHover) {
    miniTitleText = 'Котэ не одобряет?'
  }

  if(selectedFood && !catsFood.isDisabled) {
    sloganText = catsFood.description
  }
  else if(catsFood.isDisabled) {
    sloganText = catsFood.disabledText
  }


  return (
    <li key={catsFood.id} className={cn(styles.catsFoodItem, {
      [styles.selectedFood]: selectedFood && !catsFood.isDisabled,
      [styles.disabled]: catsFood.isDisabled
    })}
    onMouseLeave={() => selectedFood && !catsFood.isDisabled && setVisuallyHover(true)}
    onMouseEnter={() => selectedFood && !catsFood.isDisabled && setVisuallyHover(false)}
    >
      <div className={styles.contentCatsFood} onClick={() => toggleCatsFood(catsFood.id)}>
        {<h3 className={cn(styles.miniTitle, {
          [styles.miniTitleHover]: selectedFood && visuallyHover
        })}>{miniTitleText}</h3>}
        <h2 className={styles.titleFood}>Нямушка</h2>
        <span className={styles.clarify}>{catsFood.clarify}</span>
        <span className={styles.numberServing}><b>{catsFood.numberServing}</b> порций</span>
        <br />
        <span className={styles.bonus}><b>{catsFood.bonus}</b>{bonusText}</span>
        <div className={styles.weight}>
          {catsFood.weight} <span>кг</span>
        </div>
        <img className={styles.img} src='/img/photo-cat.png'  alt=''/>
      </div>
      <p className={styles.slogan}>
        {sloganText}
        {!selectedFood && !catsFood.isDisabled && <span onClick={() => toggleCatsFood(catsFood.id)}>купи.</span>}
      </p>
    </li>
  )
}

export default FoodItem