import '../css/main.css';
import Star from './Star';

type Props = { count: number}

export default function Stars(props : Props) {
  const count = props.count;
  if (typeof(count) !== 'number' || count < 1 || count > 5) {
    return (<></>)
  }
  return ( new Array(count).fill(0).map(() => <Star/>));
}

Stars.defaultProps = {
  count: 0
}