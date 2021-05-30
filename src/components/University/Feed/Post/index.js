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
  modalStyles,
} from 'components/University/Feed/Post/styles';
import LikeIcon from 'Icons/Like';
import CommentIcon from 'Icons/Comment';
import Button from 'components/Button';
import AddComment from 'components/University/Feed/AddComment';
import { useState } from 'react';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Modal from 'components/Modal';
import { actions as modalActions } from 'modules/Modal';
import { useDispatch } from 'react-redux';
import ToolTip from 'components/University/Feed/Reactions';

const PostComponent = () => {
  const dispatch = useDispatch();
  const [addNewComment, setAddNewComment] = useState(false);

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
          <ToolTip />
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
      {addNewComment && <AddComment />}
    </Post>
  );
};

export default PostComponent;
