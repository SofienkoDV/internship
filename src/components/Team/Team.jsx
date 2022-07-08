import { useContext } from 'react';
import AppContext from '../../context';
import TeamItem from '../TeamItem/TeamItem';
import styles from './Team.module.scss';

function Team() {
  const { team } = useContext(AppContext);

  return (
    <div className={styles.team}>
      <div className={styles.container}>
        <div className={styles.team__inner}>
          {team.map((teamItem) => (
            <TeamItem 
              key={teamItem.id}
              name={teamItem.name}
              prof={teamItem.prof}
              text={teamItem.text}
              textTwo={teamItem.textTwo}
              alt={teamItem.alt}
              photoUrl={teamItem.photoUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
