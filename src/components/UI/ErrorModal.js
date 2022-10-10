import styles from "./ErrorModal.module.css";
import Button from "./Button";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return (
        <div className={`${styles.backdrop}`} onClick={props.onClickBackdrop} />
    )
}

const OverlayModal = props => {
    return (
        <div className={`${styles.modal}`}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button className={styles.button} onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
    )
}

const ErrorModal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClickBackdrop={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<OverlayModal onConfirm={props.onConfirm} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}
        </React.Fragment>

    )
}

export default ErrorModal;