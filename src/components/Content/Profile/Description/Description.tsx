import { FC } from 'react';
import classes from './Description.module.css'

const Description: FC = () => {
    return (
        <div className={classes.description}>
            <h2>Markovich Roman</h2>
            <h4>Age: 31 years</h4>
            <h4>Birthplace: Krasnoyarsk</h4>
        </div>
    );
};
export default Description;