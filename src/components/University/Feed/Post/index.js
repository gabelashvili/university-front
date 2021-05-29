import {
  Post,
  PostHeader,
  AuthorAvatar,
  AuthorDetails,
  AuthorUni,
  AuthorName,
  PostDesc,
  PostImg,
  PostReactions,
  Reaction,
  ReactionsCount,
  PostBottom,
  postButton,
  LikeButtonWrapper,
  ToolTip,
  IconWrapper,
  modalStyles,
} from 'components/University/Feed/Post/styles';
import LikeIcon from 'Icons/Like';
import HeartIcon from 'Icons/Heart';
import CommentIcon from 'Icons/Comment';
import LaughIcon from 'Icons/Laugh';
import Button from 'components/Button';
import Reply from 'components/University/Feed/Reply';
import { useState } from 'react';
import uuid from 'react-uuid';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Modal from 'components/Modal';
import { actions as modalActions } from 'modules/Modal';
import { useDispatch } from 'react-redux';

const PostComponent = () => {
  const dispatch = useDispatch();
  const [addNewComment, setAddNewComment] = useState(false);
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
      title: 'like',
      color: 'blue',
      icon: <LikeIcon />,
      isDislike: true,
    },
    HaHa: {
      title: 'like',
      color: null,
      icon: <LaughIcon />,
    },
  };
  const showAllReactions = () => dispatch(modalActions.setModalState.open());
  return (
    <Post>
      <Modal
        title="რეაქციები"
        showClose
        closeOnAwayClick
        costumeStyles={modalStyles}
        costumeCloseIcon={<CloseIconWithoutCircle />}
      >
        qwdqwd
      </Modal>
      <PostHeader>
        <AuthorAvatar src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="" />
        <AuthorDetails>
          <AuthorName>John Doe</AuthorName>
          <AuthorUni>Caucasus University</AuthorUni>
        </AuthorDetails>
      </PostHeader>
      <PostDesc>
        lorem ipsumlorem ipsumlorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
        <PostImg
          src="https://media-exp1.licdn.com/dms/image/C4E22AQHoZlqp8dWaog/feedshare-shrink_800/0/1621521849666?e=1624492800&v=beta&t=FANoN4IckroFiIK-YHSE_aBMT_cIs_vQ22rxlXbuRW4"
          alt=""
        />
      </PostDesc>
      <PostReactions
        onClick={showAllReactions}
      >
        <Reaction>
          <LikeIcon />
          <LikeIcon />
          <LikeIcon />
          <ReactionsCount>4</ReactionsCount>
        </Reaction>
      </PostReactions>
      <PostBottom>
        <LikeButtonWrapper>
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
          <Button costumStyles={postButton} type="button" likeButton>
            <LikeIcon />
            Like
          </Button>
        </LikeButtonWrapper>
        <Button costumStyles={postButton} type="button" handleClick={() => setAddNewComment(!addNewComment)}>
          <CommentIcon />
          Comment
        </Button>
      </PostBottom>
      {addNewComment && <Reply />}
    </Post>
  );
};

export default PostComponent;
