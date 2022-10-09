import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {

    return (
        <div>
            <div className={`${styles.backdrop}`} onClick={props.onConfirm}/>
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
            
        </div>
        
    )
}

export default ErrorModal;