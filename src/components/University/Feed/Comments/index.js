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
} from 'components/University/Feed/Comments/styles';
import Button from 'components/Button';
import EditIcon from 'Icons/Edit';
import RemoveIcon from 'Icons/Remove';
import useComment from 'components/University/Feed/Comments/hook';
import Modal from 'components/Modal';
import CloseIconWithoutCircle from 'Icons/CloseIconWithoutCircle';

const Comments = ({ data }) => {
  const {
    handleDelete,
    isModalOpen,
    setModalOpen,
    handleDeleteDisagree,
    handleDeleteAgree,
  } = useComment();
  return (
    <>
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
        <ComContainer key={comment.id}>
          <Comment>
            <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
            <CommentDetails>
              <HeaderWrapper>
                <ComAuthor href="/">
                  {`${comment.user.firstname} ${comment.user.lastname}`}
                  <ComAuthorUni>უნივერსიტეტიიიი</ComAuthorUni>
                </ComAuthor>
                <EditComment>
                  <EditIcon handleClick={() => console.log('edit')} />
                  <RemoveIcon handleClick={() => handleDelete(comment.id, comment.postId)} />
                </EditComment>
              </HeaderWrapper>
              <ComText>
                {comment.text}
              </ComText>
              <ComButtons>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                  totalLikes
                >
                  Reactions (20)
                </Button>
                <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                  Like
                </Button>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                >
                  Comment
                </Button>
              </ComButtons>
            </CommentDetails>
          </Comment>
          {/* <ComReplies>
          <Comment>
            <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
            <CommentDetails>
              <ComAuthor href="/">
                Lasha
                <ComAuthorUni>Caucasus University</ComAuthorUni>
              </ComAuthor>
              <ComText>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
              </ComText>
              <ComButtons>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                  totalLikes
                >
                  Reactions (20)
                </Button>
                <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                  Like
                </Button>
                <Button
                  type="button"
                  costumStyles={comButtonStyle}
                >
                  Comment
                </Button>
              </ComButtons>
            </CommentDetails>
          </Comment>
        </ComReplies> */}
        </ComContainer>
      ))}
    </>
  );
};

export default Comments;
