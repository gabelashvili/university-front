import {
  Comment,
  Avatar,
  CommentDetails,
  ComAuthor,
  ComText,
  ComButtons,
  comButtonStyle,
  ComContainer,
  // eslint-disable-next-line no-unused-vars
  ComReplies,
  ComAuthorUni,
  EditComment,
  HeaderWrapper,
  modalStyles,
  DialogButtonWrapper,
  ComImg,
  ShowMore,
} from 'components/University/Feed/Comments/styles';
import Button from 'components/Button';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import useComment from 'components/University/Feed/Comments/hook';
import Modal from 'components/Modal';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';
import AddComment from 'components/University/Feed/AddComment';

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
  } = useComment(postId);
  return (
    <>
      <AddComment
        postId={postId}
        data={selectedCom?.isEditing && selectedCom}
        setSelectedCom={setSelectedCom}
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
            <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
            <CommentDetails>
              <HeaderWrapper>
                <ComAuthor href="/">
                  {`${comment.user.firstname} ${comment.user.lastname}`}
                  <ComAuthorUni>უნივერსიტეტიიიი</ComAuthorUni>
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
                  Reactions (20)
                </Button>
                <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                  Like
                </Button>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                  handleClick={() => handleShowReply(comment.id)}
                >
                  Reply
                  {' '}
                  (
                  {' '}
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
              // data={selectedCom?.isEditing && selectedCom}
              // setSelectedCom={setSelectedCom}
            />
            {comment?.replies
            && comment.replies.list.length > 0
            && comment.replies.list.map((reply) => (
              <Comment key={reply.id}>
                <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                <CommentDetails>
                  <HeaderWrapper>
                    <ComAuthor href="/">
                      {`${reply.user.firstname} ${reply.user.lastname}`}
                      <ComAuthorUni>უნივერსიტეტიიიი</ComAuthorUni>
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
                      Reactions (20)
                    </Button>
                    <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                      Like
                    </Button>
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
