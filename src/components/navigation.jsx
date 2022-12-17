import Image from 'next/image';
import { useEffect } from 'react';
import styles from '../styles/Navigation.module.css';

const Navigation = () => {

  useEffect(() => {
    document.onscroll = function () { onScroll() };
  })

  function onScroll() {

    const header = document.getElementById(styles.nav)
    if (document.documentElement.scrollTop > 5 || document.body.scrollTop > 5) {
      header.classList.add(styles.elevation)
    } else {
      header.classList.remove(styles.elevation)
    }
  }



  return (
    <div id={styles.nav}>
      <div>
        <Image
          src="/logo_nav.svg"
          alt="Logo"
          width={65}
          height={65}
        />
        <h1>TeleShare</h1>
      </div>
    </div>
  )
}

export default Navigation;
