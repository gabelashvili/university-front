import { constants } from 'modules/University/Feed/FetchedPosts';

const initialState = null;

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
    default:
      return state;
  }
};

export default fetchedPosts;
