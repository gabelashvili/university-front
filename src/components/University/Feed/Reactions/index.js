import uuid from 'react-uuid';
import { ToolTip, IconWrapper } from 'components/University/Feed/Reactions/styles';
import { reactions } from 'components/University/Feed/Reactions/reactions';

const Reactions = () => (
  <ToolTip>
    {reactions.map((reaction) => (
      <IconWrapper
        color={reaction.color}
        title={reaction.title}
        key={uuid()}
      >
        {reaction.icon}
      </IconWrapper>
    ))}
  </ToolTip>
);

export default Reactions;
