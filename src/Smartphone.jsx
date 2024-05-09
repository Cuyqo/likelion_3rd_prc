import './Smartphone.css';
import { useState } from 'react';

export function Smartphone() {
  const [image, setImage] = useState('/images/새내기와우.png');
  const [value, setValue] = useState(0);

  const setWowImg = (count) => {
    if (count === 0) {
      return '/images/새내기와우.png';
    } else if (count > 0 && count <= 5) {
      return '/images/그냥와우2.png';
    } else if (count > 5) {
      return '/images/컴공와우.jpeg';
    } else if (count < 0) {
      return '/images/시험기간와우.png';
    }
  };

  const btnDecrease = () => {
    setValue((prevValue) => prevValue - 1);
  };
  const btnIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const btnReset = () => {
    setValue(0);
  };

  return (
    <>
      <div className="smart">
        <h1 className="head">와우 키우기</h1>
        <img
          className="wow-img"
          src={process.env.PUBLIC_URL + setWowImg(value)}
          alt="와우이미지"
        />
        <p>와우의 능력치</p>
        <p>{value}</p>
        <div className="button-container">
          <button className="btn decrease" onClick={btnDecrease}>
            괴롭히기
          </button>
          <button className="btn reset" onClick={btnReset}>
            다시!
          </button>
          <button className="btn increase" onClick={btnIncrease}>
            갓생살기
          </button>
        </div>
      </div>
    </>
  );
}
