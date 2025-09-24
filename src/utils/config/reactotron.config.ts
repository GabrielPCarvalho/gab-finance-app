/* eslint-disable no-console */
import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';

declare global {
  interface Console {
    tron?: ReactotronReactNative;
  }
}

if (__DEV__) {
  console.tron = Reactotron
    .configure({ name: 'Gabz Finance' })
    .useReactNative()
    .connect();

  console.tron?.clear?.();
}

console.tron?.clear?.();
