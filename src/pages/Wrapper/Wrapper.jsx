import {
  Features, Footer, Header, Intro, Team, Works 
} from '../../components';

import styles from './Wrapper.module.scss';
import 'macro-css';

function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Intro />
      <Features />
      <Works />
      <Team />
      <Footer />
    </div>
  );
}

export default Wrapper;
