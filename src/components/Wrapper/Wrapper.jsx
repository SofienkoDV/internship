import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Team from '../Team/Team';
import Works from '../Works/Works';

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
    )
}

export default Wrapper;