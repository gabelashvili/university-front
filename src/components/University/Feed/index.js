import Container from 'components/Container';
import {
  Div,
  containerStylesLeft,
  // containerStylesRight,
  containerStylesMiddle,
  modalStyles,
  UniDetail,
  RightSide,
  UniTitle,
  BoxTitle,
} from 'components/University/Feed/styles';
import Post from 'components/University/Feed/Post';
import AddPost from 'components/University/Feed/AddPost';
import useFeeHook from 'components/University/Feed/hook';
import Modal from 'components/Modal';
import AllReaction from 'components/University/Feed/AllReactions';

const Feedback = () => {
  const {
    fetchedPosts,
    editPost,
    setEditPost,
    isModalOpen,
    setModalOpen,
    reactionsData,
    uniList,
    handleUniClick,
  } = useFeeHook();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        title="რეაქციები"
        closeOnAwayClick
        onClose={() => setModalOpen(false)}
        showClose
        costumeStyles={modalStyles}
      >
        <AllReaction data={reactionsData} />
      </Modal>
      <Div>
        <Container costumStyles={containerStylesLeft}>
          <BoxTitle>TOP 5 უნივერსიტეტი</BoxTitle>
          {uniList.map((uni) => (
            <UniDetail key={uni.id}>
              <RightSide>
                <UniTitle onClick={() => handleUniClick(uni.id)}>{`${uni.name} (${uni.rate})`}</UniTitle>
              </RightSide>
            </UniDetail>
          ))}
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
        {/* <Container costumStyles={containerStylesRight}>
          RightSide
        </Container> */}
      </Div>
    </>
  );
};

export default Feedback;
