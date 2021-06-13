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
    case constants.SET_COMMENTS_POST: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.postId);
      if (postsList[postIndex]?.comments) {
        postsList[postIndex] = {
          ...postsList[postIndex],
          comments: {
            totally: data.comments.totally,
            list: [...postsList[postIndex].comments.list, ...data.comments.comments],
          },
        };
      } else {
        postsList[postIndex] = {
          ...postsList[postIndex],
          comments: {
            totally: data.comments.totally,
            list: data.comments.comments,
          },
        };
      }
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.RESET_COMMENTS_POST: {
      const postId = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === postId);
      postsList[postIndex] = {
        ...postsList[postIndex],
        comments: null,
      };
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.RESET_FETCHED_POST:
      return initialState;
    case constants.ADD_COMMENT: {
      const comment = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === comment.postId);
      postsList[postIndex] = {
        ...postsList[postIndex],
        commentCnt: postsList[postIndex].commentCnt += 1,
        comments: {
          totally: postsList[postIndex]?.comments ? postsList[postIndex]?.comments.totally + 1 : 1,
          list: postsList[postIndex]?.comments
            ? [comment.data, ...postsList[postIndex]?.comments?.list] : [comment.data],
        },
      };
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.REMOVE_COMMENT: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.postId);
      postsList[postIndex] = {
        ...postsList[postIndex],
        commentCnt: postsList[postIndex].commentCnt -= 1,
        comments: {
          totally: postsList[postIndex].comments.totally - 1,
          list: postsList[postIndex].comments.list
            .filter((comment) => comment.id !== data.commentId),
        },
      };
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.UPDATE_COMMENT: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.postId);
      postsList[postIndex] = {
        ...postsList[postIndex],
        comments: {
          list: postsList[postIndex].comments.list
            .map((comment) => {
              if (comment.id === data.id) {
                return data;
              }
              return comment;
            }),
        },
      };
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.INSER_REPLIES_IN_COMMENT: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.comments[0].postId);
      const comentIndex = postsList[postIndex].comments.list
        .findIndex((com) => com.id === data.comments[0].parent);
      if (postsList[postIndex].comments.list[comentIndex].replies) {
        postsList[postIndex].comments.list[comentIndex].replies = {
          totally: data.totally,
          list: [...postsList[postIndex].comments.list[comentIndex].replies.list, ...data.comments],
        };
      } else {
        postsList[postIndex].comments.list[comentIndex].replies = {
          totally: data.totally,
          list: data.comments,
        };
      }
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.RESET_REPLIES_IN_COMMENT: {
      const data = action.payload;
      const postsList = [...state.posts];
      const postIndex = postsList.findIndex((post) => post.id === data.postId);
      const comentIndex = postsList[postIndex].comments.list
        .findIndex((com) => com.id === data.parentId);
      postsList[postIndex].comments.list[comentIndex].replies = null;
      return {
        totally: state.totally,
        posts: postsList,
      };
    }
    case constants.ADD_REPLY_IN_REPLIES_IN_COMMENT: {
      const { data } = action.payload;
      return {
        totally: state.totally,
        posts: state.posts.map((post) => {
          if (post.id === data.postId) {
            return {
              ...post,
              comments: {
                ...post.comments,
                list: post.comments.list.map((com) => {
                  if (com.id === data.parent) {
                    return {
                      ...com,
                      replyCnt: com.replyCnt + 1,
                      replies: com.replies ? {
                        totally: com.replies.totally + 1,
                        list: [data, ...com.replies.list],
                      } : {
                        totally: 1,
                        list: [data],
                      },
                    };
                  }
                  return com;
                }),
              },
            };
          }
          return post;
        }),
      };
    }
    case constants.REMOVE_REPLY_IN_REPLIES_IN_COMMENT: {
      const data = action.payload;
      return {
        totally: state.totally,
        posts: state.posts.map((post) => {
          if (post.id === data.postId) {
            return {
              ...post,
              comments: {
                ...post.comments,
                list: post.comments.list.map((com) => {
                  if (com.id === data.parent) {
                    return {
                      ...com,
                      replyCnt: com.replyCnt - 1,
                      replies: {
                        totally: com.replies.totally - 1,
                        list: com.replies.list.filter((rep) => rep.id !== data.id),
                      },
                    };
                  }
                  return com;
                }),
              },
            };
          }
          return post;
        }),
      };
    }
    default:
      return state;
  }
};

export default fetchedPosts;
