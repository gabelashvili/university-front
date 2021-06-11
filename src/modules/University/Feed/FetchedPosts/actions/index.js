import { constants } from 'modules/University/Feed/FetchedPosts';

export const fetchedPosts = ({
  updateList: (data) => ({
    type: constants.UPDATE_FETCHED_POSTS_LIST,
    payload: data,
  }),
});
