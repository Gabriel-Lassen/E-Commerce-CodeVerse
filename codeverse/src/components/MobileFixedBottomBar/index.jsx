import styles from './styles.module.scss';

const MobileFixedBottomBar = ({children}) => {
  return (
    <div className={styles.wrapper}>
        {children}
    </div>
  )
}

export default MobileFixedBottomBar