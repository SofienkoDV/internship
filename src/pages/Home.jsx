import { Component } from "react";
import styles from './Home.module.scss';

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

    render() {
        return (
        <div className="mt-50">
            <div className={styles.center}>
                <ul>
                    {this.state.names.map((num, index) => (
                    <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.center}>
                <button onClick={this.addRandomName}>Добавить имя</button>
            </div>
        </div>
        );
    }
}

export default Home;