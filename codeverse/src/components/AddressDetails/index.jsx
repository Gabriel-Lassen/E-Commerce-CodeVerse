import styles from './styles.module.scss';

const AddressDetails = ({name, complement, street, city, pinCode}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <span>Address Details</span>
        </div>
        <div className={styles.informations}>
            <div className={styles.name}>
                <span>{name}</span>
                <div className={styles.complement}>
                    <span>{complement}</span>
                </div>
            </div>
            <div className={styles.address}>
                <span>{street}</span>
                <span>{city}</span>
                <span>{pinCode}</span>
            </div>
        </div>
    </div>
  )
}

export default AddressDetails