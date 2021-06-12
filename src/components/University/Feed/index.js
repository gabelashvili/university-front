/* eslint-disable no-unused-vars */

import Container from 'components/Container';
import {
  containerStyles,
  containerStylesLeft,
  containerStylesRight,
  containerStylesMiddle,
} from 'components/University/Feed/styles';
import Post from 'components/University/Feed/Post';
import AddPost from 'components/University/Feed/AddPost';
import useFeeHook from 'components/University/Feed/hook';

const Feedback = () => {
  const {
    fetchedPosts,
    editPost,
    setEditPost,
  } = useFeeHook();
  return (
    <Container costumStyles={containerStyles}>
      <Container costumStyles={containerStylesLeft}>
        LeftSide
      </Container>
      <Container costumStyles={containerStylesMiddle}>
        <AddPost
          editPost={editPost}
          setEditPost={setEditPost}
        />
        {fetchedPosts?.totally > 0
        && fetchedPosts.posts.map((post) => (
          <Post
            post={post}
            key={post.id}
            setEditPost={setEditPost}
          />
        ))}
      </Container>
      <Container costumStyles={containerStylesRight}>
        RightSide
      </Container>
    </Container>
  );
};

export default Feedback;
