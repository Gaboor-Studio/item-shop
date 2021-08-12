import classes from './Spinner.module.css';
import Backdrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import React from 'react';

const Spinner = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show}/>
            {props.show ? <div className={classes.Loader}>Loading...</div> : null}
        </Aux>
    );
}

export default Spinner;