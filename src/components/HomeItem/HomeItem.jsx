import { Component } from "react";
import styles from './HomeItem.module.scss';

class Home extends Component {

    state = {
        names: ['Denis', 'Maks', 'Jane'],
    };

    getRandomName = () => {
        const { names } = this.state;
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
 
    addRandomName = () => {
        this.setState({
            names: [...this.state.names, this.getRandomName()],
        });
    };

    componentDidMount() {
        console.log("Компонент загружен");
    }

    componentDidUpdate(prevState) {
        if (prevState.names !== this.state.names) {
            console.log("Компонент обновился");
        }
    }

    componentWillUnmount() {
        console.log("Компонент зникає");
    }

    render() {
        return (
        <>
            <div className={styles.centerHome}>
                <ul className={styles.listUl}>
                    {this.state.names.map((name, index) => (
                    <li className={styles.listLi} key={index}>{name}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.centerHome}>
                <button className={styles.buttonHome} onClick={this.addRandomName}>Додати ім'я</button>
            </div>
        </>
        );
    }
}

export default Home;