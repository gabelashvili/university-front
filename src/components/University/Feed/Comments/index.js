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
} from 'components/University/Feed/Comments/styles';
import Button from 'components/Button';

const Comments = ({ data }) => (
  <>
    {data && data.map((comment) => (
      <ComContainer key={comment.id}>
        <Comment>
          <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
          <CommentDetails>
            <ComAuthor href="/">
              {`${comment.user.firstname} ${comment.user.lastname}`}
              <ComAuthorUni>უნივერსიტეტიიიი</ComAuthorUni>
            </ComAuthor>
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
export default Comments;
