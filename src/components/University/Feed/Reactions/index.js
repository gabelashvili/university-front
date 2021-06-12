import LaughIcon from 'Icons/Laugh';
import HeartIcon from 'Icons/Heart';
import LikeIcon from 'Icons/Like';
import DislikeIcon from 'Icons/Dislike';
import uuid from 'react-uuid';
import { ToolTip, IconWrapper } from 'components/University/Feed/Reactions/styles';

const Reactions = () => {
  const reactions = {
    like: {
      title: 'like',
      color: 'blue',
      icon: <LikeIcon />,
    },
    love: {
      title: 'love',
      color: 'red',
      icon: <HeartIcon />,
    },
    dislike: {
      title: 'dislike',
      color: 'blue',
      icon: <DislikeIcon />,
      isDislike: true,
    },
    HaHa: {
      title: 'haha',
      color: null,
      icon: <LaughIcon />,
    },
  };
  return (
    <ToolTip>
      {Object.keys(reactions).map((reaction) => (
        <IconWrapper
          color={reactions[reaction].color}
          title={reactions[reaction].title}
          key={uuid()}
        >
          {reactions[reaction].icon}
        </IconWrapper>
      ))}
    </ToolTip>
  );
};

export default Reactions;
