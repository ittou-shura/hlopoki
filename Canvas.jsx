import styles from '../styles/canvas.module.css'
function Canvas({child}){
    return(
        <div className={styles["Container"]}>
            {child}
        </div>
    )
}

export default Canvas