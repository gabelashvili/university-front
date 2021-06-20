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
import { groupBy, filter } from 'lodash';

const AllReaction = ({ data }) => {
  const [selected, setSelected] = useState(0);
  const getEmojiByid = (id) => reactions.find((el) => el.id === parseInt(id, 10));
  const groupedData = groupBy(data, (item) => item.emojiId);
  const filteredData = selected === 0 ? data : filter(data, (item) => item.emojiId === selected);
  return (
    <Div>
      <Header>
        <Text
          selected={selected === 0}
          onClick={() => setSelected(0)}
        >
          All
          {' '}
          {Object.keys(groupedData).reduce((acc, cur) => acc + groupedData[cur].length, 0)}
        </Text>
        {Object.keys(groupedData).map((key) => (
          <IconWrapper
            key={getEmojiByid(key).id}
            color={getEmojiByid(key).color}
            selected={selected === getEmojiByid(key).id}
            onClick={() => setSelected(getEmojiByid(key).id)}
          >
            {getEmojiByid(key).icon}
            {groupedData[key].length}
          </IconWrapper>
        ))}
      </Header>
      <UserList>
        {filteredData.map(() => (
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
        ))}
      </UserList>
    </Div>
  );
};

export default AllReaction;
