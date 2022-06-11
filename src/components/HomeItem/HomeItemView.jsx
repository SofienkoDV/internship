/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Component } from 'react';
import PropTypes from 'prop-types';

class HomeItemView extends Component {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { names, addRandomName, RemoveRandomName, styles } = this.props;
    return (
      <>
        <div className={styles.centerHome}>
          <ul className={styles.listUl}>
            {names.map((name) => (
              <li className={styles.listLi} key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.centerHome}>
          <button
            type="button"
            className={styles.buttonHome}
            onClick={addRandomName}
          >
            Додати ім'я
          </button>
        </div>
        <div className={styles.centerHome}>
          <button
            type="button"
            className={styles.buttonHome}
            onClick={RemoveRandomName}
          >
            Видалити ім'я
          </button>
        </div>
      </>
    );
  }
}

HomeItemView.propTypes = {
  names: PropTypes.array,
  addRandomName: PropTypes.func,
  RemoveRandomName: PropTypes.func,
  styles: PropTypes.object,
};

HomeItemView.defaultProps = {
  names: [],
  addRandomName: () => {},
  RemoveRandomName: () => {},
  styles: {},
};

export default HomeItemView;
