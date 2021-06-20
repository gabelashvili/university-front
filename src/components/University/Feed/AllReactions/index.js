import { useState } from 'react';
import {
  Div,
  Text,
  IconWrapper,
  Header,
  UserList,
  User,
  Avatar,
  AvatarWrapper,
  UserReaction,
  UserDetail,
  UserName,
  UserUni,
} from 'components/University/Feed/AllReactions/styles';
import { reactions } from 'components/University/Feed/Reactions/reactions';
import DefaultAvatar from 'Icons/DefaultAvatar';

const AllReaction = () => {
  const [selected, setSelected] = useState('all');
  return (
    <Div>
      <Header>
        <Text
          selected={selected === 'all'}
          onClick={() => setSelected('all')}
        >
          All 168
        </Text>
        {reactions.map((reaction) => (
          <IconWrapper
            key={reaction.id}
            color={reaction.color}
            selected={selected === reaction.title}
            onClick={() => setSelected(reaction.title)}
          >
            {reaction.icon}
            168
          </IconWrapper>
        ))}
      </Header>
      <UserList>
        <User>
          <AvatarWrapper>
            {false ? <Avatar alt="" src="" /> : <DefaultAvatar />}
            <UserReaction>{reactions[0].icon}</UserReaction>
          </AvatarWrapper>
          <UserDetail>
            <UserName>Lasha Gabelashvili</UserName>
            <UserUni>Caucasus Uni</UserUni>
          </UserDetail>
        </User>
      </UserList>
    </Div>
  );
};

export default AllReaction;
