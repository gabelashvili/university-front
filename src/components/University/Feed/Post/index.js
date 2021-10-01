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
  Avatar,
  DialogButtonWrapper,
  IconWrapper,
} from 'components/University/Feed/Post/styles';
import LikeIcon from 'Icons/Like';
import CommentIcon from 'Icons/Comment';
import Button from 'components/Button';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import Modal from 'components/Modal';
import ToolTip from 'components/University/Feed/Reactions';
import Comments from 'components/University/Feed/Comments';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import usePostHook from 'components/University/Feed/Post/hook';
import DefaultAvatar from 'Icons/DefaultAvatar';
import uuid from 'react-uuid';

const PostComponent = ({ post, setEditPost }) => {
  const {
    showComment,
    setShowComment,
    handlePostRemove,
    agreePostDelete,
    disagreePostDelete,
    isModalOpen,
    setModalOpen,
    handleEditComment,
    handleShowMore,
    handleEmojiSend,
    getEmojiBytid,
    handleShowAllReaction,
    totalEmoji,
    authedUser,
  } = usePostHook(post);
  return (
    <Post id={`post-${post.id}`}>
      <Modal
        title="პოსტის წაშლა"
        showClose
        closeOnAwayClick
        costumeStyles={modalStyles}
        costumeCloseIcon={<CloseIconWithoutCircle />}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        ნამდვილად გსურთ არჩეული პოსტის წაშლა?
        <DialogButtonWrapper>
          <Button type="button" handleClick={disagreePostDelete}>არა</Button>
          <Button
            type="button"
            handleClick={() => agreePostDelete(post.id)}
          >
            კი
          </Button>
        </DialogButtonWrapper>
      </Modal>
      <PostHeader>
        <AuthorAvatar>
          {post.user.image ? <Avatar alt="" src={post.user.image} /> : <DefaultAvatar />}
        </AuthorAvatar>
        <AuthorDetails>
          <AuthorName>{`${post.user.firstName} ${post.user.lastName}`}</AuthorName>
          <AuthorUni>{post?.user?.university?.name || ''}</AuthorUni>
        </AuthorDetails>
        {authedUser.userId === post.userId && (
        <EditPost>
          <EditIcon handleClick={() => setEditPost(post)} />
          <RemoveIcon handleClick={handlePostRemove} />
        </EditPost>
        )}
      </PostHeader>
      <PostDesc>
        {post.text}
        {post.image && (
        <PostImg
          src={post.image}
          alt=""
        />
        )}
      </PostDesc>
      <PostReactions
        onClick={handleShowAllReaction}
      >
        { totalEmoji(post.emoji) > 0 && (
        <Reaction>
          {Object.keys(post.emoji).map((key) => (
            <div key={uuid()}>
              {post.emoji[key].quantity > 0 && (
              <IconWrapper color={getEmojiBytid(post.emoji[key].id).color}>
                {getEmojiBytid(post.emoji[key].id).icon}
              </IconWrapper>
              )}
            </div>
          ))}
          <ReactionsCount>
            (
            {totalEmoji(post.emoji)}
            )
          </ReactionsCount>
        </Reaction>
        )}
      </PostReactions>
      <PostBottom>
        <LikeButtonWrapper>
          <ToolTip
            handleClick={handleEmojiSend}
            data={{ postId: post.id }}
          />
          <Button costumStyles={postButton} type="button" iconColor={post.yourEmoji && getEmojiBytid(post.yourEmoji).color}>
            {post.yourEmoji ? (
              <>
                {getEmojiBytid(post.yourEmoji).icon}
                {getEmojiBytid(post.yourEmoji).title}
              </>
            ) : (
              <>
                <LikeIcon />
                Like
              </>
            )}
          </Button>
        </LikeButtonWrapper>
        <Button costumStyles={postButton} type="button" handleClick={() => setShowComment(!showComment)}>
          <CommentIcon />
          comments
          {' '}
          (
          {post.commentCnt}
          )
        </Button>
      </PostBottom>
      {showComment && (
        <>
          <Comments
            data={post?.comments?.list}
            handleEditComment={handleEditComment}
            postId={post.id}
            handleShowMore={handleShowMore}
            total={post.commentCnt}
          />
        </>
      )}

    </Post>
  );
};

export default memo(PostComponent);
