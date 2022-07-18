import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

function withApp(Component) {
  // eslint-disable-next-line func-names
  return function () {
    const [items, setItems] = useState([]);
    const [features, setFeatures] = useState([]);
    const [works, setWorks] = useState([]);
    const [team, setTeam] = useState([]);
    const instance = useMemo(() => axios.create({
      baseURL: 'https://618115078bfae60017adfe03.mockapi.io',
    }), []);

    useEffect(() => {
      async function fetchData() {
        try {
          const [itemsResponse, featuresResponse, worksResponse, teamResponse] = await Promise.all([
            instance.get('/items'),
            instance.get('/arrFeatures'),
            instance.get('/works'),
            instance.get('/arrTeam'),
          ]);

          setFeatures(featuresResponse.data);
          setItems(itemsResponse.data);
          setWorks(worksResponse.data);
          setTeam(teamResponse.data);
        } catch (error) {
          // eslint-disable-next-line no-alert
          alert('Помилка при запиті даних :(');

          // eslint-disable-next-line no-console
          console.log(error);
        }
      }

      fetchData();
    }, []);

    const value = useMemo(
      () => ({
        items,
        features,
        works,
        team,
      }),
      [items, features, works, team]
    );

    return (
      <Component
        value={value}
      />
    );
  };
}

export default withApp;
