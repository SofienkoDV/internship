import { useState } from 'react';
import HomeItemView from './HomeItemView';

function HomeItem() {
  const [names, setNames] = useState(['Denis', 'Make', 'Jane']);

  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const addRandomName = () => {
    setNames((PrevNames) => [...PrevNames, getRandomName()]);
  };

  const RemoveRandomName = () => {
    setNames((PrevNames) => PrevNames.filter((name) => name !== getRandomName()));
  };

  return (
    <HomeItemView
      names={names}
      addRandomName={addRandomName}
      RemoveRandomName={RemoveRandomName}
    />
  );
}

export default HomeItem;
