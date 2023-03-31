import { useContext } from 'react';
import Context from '../../Context/context';
import img from '../../assets/img/circle.png';
import img2 from '../../assets/img/ic cross in circle.png';
import InfoChecked from './InfoChecked/InfoChecked';
import InfoRejected from './InfoRejected/InfoRejected';

export default function Info(props) {
  const { info } = useContext(Context);

  return (info.success ? (
    <InfoChecked />
  ) : (
    <InfoRejected />
  ));
}
