import React from 'react'

import styles from "./styles.module.scss";
import user from '../../assets/imgs/imgUser.jpg'

function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img src={user} alt="" />
        <button>Upload</button>
      </div>
      <div>
        <input type="text" />
        <input type="text" />
        <div>
          <input type="email" name="" id="" />
          <input type="date" name="" id="" />
          <input type="password" />
          <input type="password" />
        </div>
      </div>
    </div>
  )
}

export default Signup;