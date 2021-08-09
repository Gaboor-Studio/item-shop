import classes from './CardMain.module.css';

const CardMain = (props) => {
    return (
        <div className={classes.CardMain}>
            <img src={props.src} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.price}$</p>
            <button className={classes.button}>افزودن به سبد</button>
        </div>
    );
}

export default CardMain;