import uuid from 'react-uuid';
import { ToolTip, IconWrapper } from 'components/University/Feed/Reactions/styles';
import { reactions } from 'components/University/Feed/Reactions/reactions';

const Reactions = ({ handleClick, data }) => (
  <ToolTip>
    {reactions.map((reaction) => (
      <IconWrapper
        color={reaction.color}
        title={reaction.title}
        key={uuid()}
        onClick={() => handleClick(reaction, data)}
      >
        {reaction.icon}
      </IconWrapper>
    ))}
  </ToolTip>
);

export default Reactions;
