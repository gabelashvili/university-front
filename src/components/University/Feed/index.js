/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions as getAllPostsActions } from 'modules/University/Feed/GetPosts';
import Container from 'components/Container';
import {
  containerStyles,
  containerStylesLeft,
  containerStylesRight,
  containerStylesMiddle,
} from 'components/University/Feed/styles';
import Post from 'components/University/Feed/Post';
import AddPost from 'components/University/Feed/AddPost';

const Feedback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostsActions.getPosts.request({
      offset: 0,
      limit: 5,
    }));
  }, []);

  return (
    <Container costumStyles={containerStyles}>
      <Container costumStyles={containerStylesLeft}>
        LeftSide
      </Container>
      <Container costumStyles={containerStylesMiddle}>
        <AddPost />
        <Post />
      </Container>
      <Container costumStyles={containerStylesRight}>
        RightSide
      </Container>
    </Container>
  );
};

export default Feedback;
