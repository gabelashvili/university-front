import {
  Comment,
  Avatar,
  CommentDetails,
  ComAuthor,
  ComText,
  ComButtons,
  comButtonStyle,
  ComContainer,
  ComReplies,
  ComAuthorUni,
  EditComment,
  HeaderWrapper,
  modalStyles,
  DialogButtonWrapper,
  ComImg,
  ShowMore,
  LikeButtonWrapper,
} from 'components/University/Feed/Comments/styles';
import Button from 'components/Button';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import useComment from 'components/University/Feed/Comments/hook';
import Modal from 'components/Modal';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import AddComment from 'components/University/Feed/AddComment';
import ToolTip from 'components/University/Feed/Reactions';
import DefaultAvatar from 'Icons/DefaultAvatar';

const Comments = ({
  data, postId, handleShowMore, total,
}) => {
  const {
    handleDelete,
    isModalOpen,
    setModalOpen,
    handleDeleteDisagree,
    handleDeleteAgree,
    handleCommentEdit,
    selectedCom,
    setSelectedCom,
    showReply,
    handleShowReply,
    handleShowMoreReply,
    sendReaction,
    getEmojiBytid,
  } = useComment(postId);
  return (
    <>
      <AddComment
        postId={postId}
        data={selectedCom?.isEditing && selectedCom}
        setSelectedCom={setSelectedCom}
        parent={null}
      />
      <Modal
        title="კომენტარის წაშლა"
        showClose
        closeOnAwayClick
        costumeStyles={modalStyles}
        costumeCloseIcon={<CloseIconWithoutCircle />}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        ნამდვილად გსურთ არჩეული კომენტარის წაშლა?
        <DialogButtonWrapper>
          <Button type="button" handleClick={handleDeleteDisagree}>არა</Button>
          <Button
            type="button"
            handleClick={handleDeleteAgree}
          >
            კი
          </Button>
        </DialogButtonWrapper>
      </Modal>
      {data && data.map((comment) => (
        <ComContainer key={comment.id} id={`comment-${comment.id}`}>
          <Comment>
            <>
              {comment.user.image ? <Avatar alt="" src={comment.user.image} /> : <DefaultAvatar />}
            </>
            <CommentDetails>
              <HeaderWrapper>
                <ComAuthor href="/">
                  {`${comment.user.firstName} ${comment.user.lastName}`}
                  <ComAuthorUni>{comment?.user?.university?.name || ''}</ComAuthorUni>
                </ComAuthor>
                <EditComment>
                  <EditIcon handleClick={() => handleCommentEdit(comment)} />
                  <RemoveIcon handleClick={() => handleDelete(comment)} />
                </EditComment>
              </HeaderWrapper>
              <ComText>
                {comment.text}
              </ComText>
              {comment.image && <ComImg alt="" src={comment.image} />}
              <ComButtons>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                >
                  Reactions
                  (
                  {Object.keys(comment.emoji)
                    .reduce((acc, cur) => acc + comment.emoji[cur].quantity, 0)}
                  )
                </Button>
                <LikeButtonWrapper>
                  <ToolTip
                    handleClick={sendReaction}
                    data={{
                      postId: comment.postId,
                      commentId: comment.id,
                      parent: comment.parent,
                    }}
                  />
                  <Button costumStyles={comButtonStyle} type="button" iconColor={comment.yourEmoji && getEmojiBytid(comment.yourEmoji).color}>
                    {comment.yourEmoji ? (
                      <>
                        {getEmojiBytid(comment.yourEmoji).icon}
                        {getEmojiBytid(comment.yourEmoji).title}
                      </>
                    ) : 'Like'}
                  </Button>
                </LikeButtonWrapper>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                  handleClick={() => handleShowReply(comment.id)}
                >
                  Reply
                  {' '}
                  (
                  {comment.replyCnt}
                  )
                </Button>
              </ComButtons>
            </CommentDetails>
          </Comment>
          {showReply && comment.id in showReply && showReply[comment.id] && (
          <ComReplies>
            <AddComment
              postId={postId}
              parent={comment.id}
              data={selectedCom?.isEditing && selectedCom}
              setSelectedCom={setSelectedCom}
            />
            {comment?.replies
            && comment.replies.list.length > 0
            && comment.replies.list.map((reply) => (
              <Comment key={reply.id} id={`comment-${reply.id}`}>
                {reply.user.image ? <Avatar alt="" src={reply.user.image} /> : <DefaultAvatar />}
                <CommentDetails>
                  <HeaderWrapper>
                    <ComAuthor href="/">
                      {`${reply.user.firstName} ${reply.user.lastName}`}
                      <ComAuthorUni>{reply?.user?.university?.name || ''}</ComAuthorUni>
                    </ComAuthor>
                    <EditComment>
                      <EditIcon handleClick={() => handleCommentEdit(reply)} />
                      <RemoveIcon handleClick={() => handleDelete(reply)} />
                    </EditComment>
                  </HeaderWrapper>
                  <ComText>
                    {reply.text}
                  </ComText>
                  {reply.image && <ComImg alt="" src={reply.image} />}
                  <ComButtons>
                    <Button
                      type="button"
                      costumStyles={comButtonStyle}
                    >
                      Reactions
                      (
                      {Object.keys(reply.emoji)
                        .reduce((acc, cur) => acc + reply.emoji[cur].quantity, 0)}
                      )
                    </Button>
                    <LikeButtonWrapper>
                      <ToolTip
                        handleClick={sendReaction}
                        data={{
                          postId: reply.postId,
                          commentId: reply.id,
                          parent: reply.parent,
                        }}
                      />
                      <Button costumStyles={comButtonStyle} type="button" iconColor={reply.yourEmoji && getEmojiBytid(reply.yourEmoji).color}>
                        {reply.yourEmoji ? (
                          <>
                            {getEmojiBytid(reply.yourEmoji).icon}
                            {getEmojiBytid(reply.yourEmoji).title}
                          </>
                        ) : 'Like'}
                      </Button>
                    </LikeButtonWrapper>
                  </ComButtons>
                </CommentDetails>
              </Comment>
            ))}
            {comment?.replies && comment.replies.list.length < comment.replies.totally
            && (
            <ShowMore
              onClick={() => handleShowMoreReply(comment.id, comment.replies.list.length)}
            >
              მეტის ჩვენება
            </ShowMore>
            )}
          </ComReplies>
          )}
        </ComContainer>
      ))}
      {data && data.length < total && <ShowMore onClick={handleShowMore}>მეტის ჩვენება</ShowMore>}
    </>
  );
};

export default Comments;
