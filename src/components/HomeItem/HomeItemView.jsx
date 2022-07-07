import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HomeItem.module.scss';

class HomeItemView extends Component {
  render() {
    const { names, addRandomName, RemoveRandomName } = this.props;
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
            Add random name
          </button>
        </div>
        <div className={styles.centerHome}>
          <button
            type="button"
            className={styles.buttonHome}
            onClick={RemoveRandomName}
          >
            Remove random name
          </button>
        </div>
      </>
    );
  }
}

HomeItemView.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  addRandomName: PropTypes.func,
  RemoveRandomName: PropTypes.func,
};

HomeItemView.defaultProps = {
  addRandomName: () => {},
  RemoveRandomName: () => {},
};

export default HomeItemView;
