import '../css/main.css';
import Star from './Star';

export default function Stars({ count } : number) {
  if (typeof(count) !== 'number' || count < 1 || count > 5) {
    return (<></>)
  }
  return ( new Array(count).fill(0).map(() => <Star/>));
}

Stars.defaultProps = {
  count: 0
}