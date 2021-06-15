import {
  Stars,
  IconWrapper,
} from 'components/Raiting/styles';
import HalfStar from 'Icons/HalfStar';

const Raiting = ({ raiting = 0, isDisabled = true }) => (
  <Stars raiting={1} isDisabled={isDisabled}>
    {new Array(10).fill().map((el, index) => (
      <IconWrapper checked={(10 - index) <= raiting / 0.5} key={`Raiting-${2 * index}`}>
        <HalfStar />
      </IconWrapper>
    ))}
  </Stars>
);

export default Raiting;
