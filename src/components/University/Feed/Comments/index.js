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
} from 'components/University/Feed/Comments/styles';
import Button from 'components/Button';
import LikeIcon from 'Icons/Like';
import HeartIcon from 'Icons/Heart';

const Comments = () => (
  <>
    <ComContainer>
      <Comment>
        <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
        <CommentDetails>
          <ComAuthor href="/">Lasha</ComAuthor>
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
              <HeartIcon />
              250 Likes
            </Button>
            <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
              <LikeIcon />
              {' '}
              you like it
            </Button>
            <Button costumStyles={comButtonStyle} type="button" dislike><LikeIcon /></Button>
            <Button
              type="button"
              costumStyles={comButtonStyle}
            >
              Comment
            </Button>
          </ComButtons>
        </CommentDetails>
      </Comment>
      <ComReplies>
        <Comment>
          <Avatar src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
          <CommentDetails>
            <ComAuthor href="/">Lasha</ComAuthor>
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
                <HeartIcon />
                250 Likes
              </Button>
              <Button costumStyles={comButtonStyle} type="button" alreadyLiked>
                <LikeIcon />
                {' '}
                you like it
              </Button>
              <Button costumStyles={comButtonStyle} type="button"><LikeIcon /></Button>
              <Button costumStyles={comButtonStyle} type="button" dislike><LikeIcon /></Button>
              <Button
                type="button"
                costumStyles={comButtonStyle}
              >
                Comment
              </Button>
            </ComButtons>
          </CommentDetails>
        </Comment>
      </ComReplies>
    </ComContainer>
  </>
);
export default Comments;
