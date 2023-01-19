import styles from './Main.module.scss'
import FoodList from './FoodList/FoodList'

export interface IMock {
  id: string,
  clarify: string,
  numberServing: number,
  bonus: number,
  weight: string,
  description: string,
  isDisabled: boolean,
  disabledText: string,
}

const mockData:IMock[] = [
  {id: '1',clarify: 'с фуа-гра', bonus: 1, numberServing: 10, weight: '0,5', description: 'Печень утки разварная с артишоками.', isDisabled: false, disabledText: 'Печалька, с фуа-гра закончился.'},
  {id: '2',clarify: 'с рыбой', bonus: 2, numberServing: 40, weight: '2', description: 'Головы щучьи с чесноком да свежайшая сёмгушка.', isDisabled: false, disabledText: 'Печалька, с рыбой закончился.'},
  {id: '3',clarify: 'с курой', bonus: 5, numberServing: 100, weight: '5', description: 'Филе из цыплят с трюфелями в бульоне.', isDisabled: true, disabledText: 'Печалька, с курой закончился.'},
]

const Main = () => {

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Ты сегодня покормил кота?</h1>
      <FoodList mockData={mockData} />
    </div>
  )
}

export default Main