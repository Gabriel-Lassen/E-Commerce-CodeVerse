import { Link } from 'react-router-dom'
import arrow from "../../../assets/imgs/arrowLong.svg";
import styles from "./styles.module.scss";
import rectangle from "../../../assets/imgs/rectangle.png";

const InviteAFriend = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>Invite Friends & Earn</h1>
        <p>Get up to 100 reward points for every friend you invite</p>

      <Link to='/profile/referandearn'>
        <button>
          Invite Now
          <img src={arrow} alt="" />
        </button>
      </Link>
      </div>
      <img src={rectangle} alt="" className={styles.rectangle}/>
    </div>
  );
};

export default InviteAFriend;
