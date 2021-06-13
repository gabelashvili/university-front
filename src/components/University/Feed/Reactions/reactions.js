import LaughIcon from 'Icons/Laugh';
import HeartIcon from 'Icons/Heart';
import LikeIcon from 'Icons/Like';
import DislikeIcon from 'Icons/Dislike';

export const reactions = [
  {
    id: 1,
    title: 'like',
    color: 'blue',
    icon: <LikeIcon />,
  },
  {
    id: 2,
    title: 'love',
    color: 'red',
    icon: <HeartIcon />,
  },
  {
    id: 3,
    title: 'dislike',
    color: 'blue',
    icon: <DislikeIcon />,
    isDislike: true,
  },
  {
    id: 4,
    title: 'haha',
    color: null,
    icon: <LaughIcon />,
  },
];
