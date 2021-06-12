import { constants } from 'modules/University/Feed/FetchedPosts';

const initialState = {
  totally: 0,
  posts: [],
};

const fetchedPosts = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_FETCHED_POSTS_LIST:
      if (!state) {
        return {
          totally: action.payload.totally,
          posts: action.payload.posts,
        };
      }
      return {
        totally: action.payload.totally,
        posts: [...state.posts, ...action.payload.posts],
      };
    case constants.REMOVE_POST: {
      const postId = action.payload;
      return {
        totally: state.totally - 1,
        posts: state.posts.filter((post) => post.id !== postId),
      };
    }
    case constants.ADD_POST: {
      const data = action.payload;
      return {
        totally: state.totally + 1,
        posts: [data, ...state.posts],
      };
    }
    case constants.UPDATE_POST: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.id);
      postsList[postIndex] = {
        ...postsList[postIndex],
        ...data,
      };
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    default:
      return state;
  }
};

export default fetchedPosts;
