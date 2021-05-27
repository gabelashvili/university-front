import { constants } from 'modules/University/Feed';

export const postNewFeed = ({
  request: (image, data) => ({
    type: constants.POST_NEW_FEED_REQUESTED,
    payload: {
      image,
      data,
    },
  }),
  succeed: (response) => ({
    type: constants.POST_NEW_FEED_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.POST_NEW_FEED_FAILED,
    error,
  }),
});
