import { FC } from 'react';
import classes from './Description.module.css'

const Description: FC = () => {
    return (
        <div className={classes.description}>
            <h2>Маркович Роман</h2>
            <h4>Возраст: 31 год</h4>
            <h4>Место рождения: Красноярск</h4>
        </div>
    );
};
export default Description;