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
} from 'components/University/Feed/Post/styles';
import LikeIcon from 'Icons/Like';
import HeartIcon from 'Icons/Heart';
import CommentIcon from 'Icons/Comment';
import LaughIcon from 'Icons/Laugh';
import Button from 'components/Button';
import Reply from 'components/University/Feed/Reply';

const PostComponent = () => (
  <Post>
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
    <PostReactions>
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
          <IconWrapper color="blue" title="like">
            <LikeIcon />
          </IconWrapper>
          <IconWrapper color="red" title="love">
            <HeartIcon />
          </IconWrapper>
          <IconWrapper color="blue" dislike title="dislike">
            <LikeIcon />
          </IconWrapper>
          <IconWrapper title="HaHa">
            <LaughIcon />
          </IconWrapper>
        </ToolTip>
        <Button costumStyles={postButton} type="button" likeButton>
          <LikeIcon />
          Like
        </Button>
      </LikeButtonWrapper>
      <Button costumStyles={postButton} type="button">
        <CommentIcon />
        Comment
      </Button>
    </PostBottom>
    <Reply />
  </Post>
);

export default PostComponent;
