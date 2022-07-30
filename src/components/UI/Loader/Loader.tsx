import { FC } from 'react'
import classes from './Loader.module.css'

const Loader: FC = () => {
    return(
        <div className={classes.place}>
            <div className={classes.loader}></div>
        </div>
    )
}

export default Loader