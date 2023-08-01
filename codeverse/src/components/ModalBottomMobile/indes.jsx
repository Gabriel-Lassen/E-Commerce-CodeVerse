import styles from './styles.module.scss';

const ModalBottomMobile = ({children, title, setShowModal}) => {
  return (
    <div className={styles.wrapper} onClick={() => setShowModal(false)}>
        <div className={styles.modal}>
            {title &&
                <div className={styles.title}>
                    <span>{title}</span>
                    <div className={styles.divider}></div>
                </div>
            }
            {children}
        </div>
    </div>
  )
}

export default ModalBottomMobile