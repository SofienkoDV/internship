import { useContext, useState } from 'react';
import BiographyItem from '../../components/BiographyItem/BiographyItem';
import BiographyView from './BiographyView';
import AppContext from '../../context';

function Biography() {
  const { items } = useContext(AppContext);
  const [value, setValue] = useState('');

  const filterName = items.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <BiographyView
      filterName={filterName}
      setValue={setValue}
      BiographyItem={BiographyItem}
    />
  );
}

export default Biography;
