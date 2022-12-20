import { Fragment } from 'react';
import MealsSummary from '../MEAL-ITEMS/MealsSummary';
import AvailableMeals from './AvailableMeals';
import mealimage from '../../assest/meals.jpg';

const Meals = () => {
  return (
    <Fragment>
      <div className='  z-0 overflow-hidden w-full h-96 '  >
                <img  className=' object-cover   w-full h-full transform -rotate-1  -translate-y-4 -translate-x-1  ' src={mealimage} alt="" />
            </div>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;