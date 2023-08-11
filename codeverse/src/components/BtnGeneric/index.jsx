import styles from './styles.module.scss';

const BtnGeneric = ({theme, icon, text, onClick}) => {
  return (
    <button className={theme === 'dark' ? `${styles.button} ${styles.dark}` : `${styles.button} ${styles.light}`} onClick={onClick}>
        {icon &&
            <img src={icon} />
        }
        <span>{text}</span>
    </button>
  )
}

export default BtnGeneric