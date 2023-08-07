import styles from './styles.module.scss';

const BtnTransparent = ({icon, text, onClick}) => {
  return (
    <button onClick={onClick} className={styles.button}>
        <img src={icon} />
        <span>{text}</span>
    </button>
  )
}

export default BtnTransparent