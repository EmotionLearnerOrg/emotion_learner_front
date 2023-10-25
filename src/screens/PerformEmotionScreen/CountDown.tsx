import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-magnus';

const Countdown = ({
  duration,
  size,
  color,
  onFinished,
}: {
  duration: number;
  size?: number;
  color?: string;
  onFinished: () => void;
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(duration);
  const [finAlcanzado, setFinAlcanzado] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      } else if (!finAlcanzado) {
        onFinished();
        setFinAlcanzado(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [finAlcanzado, onFinished, remainingTime]);

  const formatTime = (time: number) => {
    // const hours = Math.floor(time / 3600);
    // const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${seconds.toString().padStart(2, '0')}`;
    // Dejo comentado mostrar la hora:minuto:segundo
    // return `${hours.toString().padStart(2, '0')}:${minutes
    //   .toString()
    //   .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text fontSize={size} color={color}>
        {formatTime(remainingTime)}
      </Text>
    </View>
  );
};

export default Countdown;
