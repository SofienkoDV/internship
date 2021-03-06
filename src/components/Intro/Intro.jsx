import { useRef, useState } from 'react';
import IntroView from './IntroView';

function Intro() {
  const myRef = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const onMouseMoveItem = (e) => {
    const width = myRef.current.offsetWidth;
    const height = myRef.current.offsetHeight;
    const oX = (e.nativeEvent.offsetX / width) * 100;
    const oY = (e.nativeEvent.offsetY / height) * 100;
    setX(oX);
    setY(oY);
  };

  const maskStyle = {
    '--maskX': x,
    '--maskY': y,
  };

  return (
    <IntroView
      _myRef={myRef}
      _onMouseMove={onMouseMoveItem}
      maskStyle={maskStyle}
    />
  );
}

export default Intro;
