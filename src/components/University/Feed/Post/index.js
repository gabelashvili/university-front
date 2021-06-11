import { memo } from 'react';
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
  EditPost,
} from 'components/University/Feed/Post/styles';
import LikeIcon from 'Icons/Like';
import CommentIcon from 'Icons/Comment';
import Button from 'components/Button';
import AddComment from 'components/University/Feed/AddComment';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Modal from 'components/Modal';
import ToolTip from 'components/University/Feed/Reactions';
import Comments from 'components/University/Feed/Comments';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import usePostHook from 'components/University/Feed/Post/hook';

const PostComponent = ({ post }) => {
  const {
    addNewComment,
    setAddNewComment,
    handlePostRemove,
  } = usePostHook(post);
  console.log(`rendered post id: ${post.id}`);
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
        <EditPost>
          <EditIcon handleClick={() => console.log('edit')} />
          <RemoveIcon handleClick={() => handlePostRemove(post.id)} />
        </EditPost>
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
        onClick={() => console.log('show')}
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
      <Comments />
    </Post>
  );
};

export default memo(PostComponent);
