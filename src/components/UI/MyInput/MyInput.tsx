import classes from './MyInput.module.css'
const MyInput = (props: any) => {
    return (
        <input {...props} className={classes.myInp} />
    )
}
export default MyInput