/* eslint-disable no-alert */
import { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import {
  actions as getLecturesActions,
  selectors as getLecturesSelectors,
} from 'modules/Lectures/GetLectures';
import { useDispatch, useSelector } from 'react-redux';
import {
  actions as getFacultiesActions,
  selectors as getFacultiesSelectors,
} from 'modules/University/GetFaculties';
import {
  actions as filterLecturersActions,
  selectors as filterLecturersSelectors,
} from 'modules/Lectures/FilterLecturers';
import {
  actions as addCommentActions,
  selectors as addCommentSelectors,
} from 'modules/Lectures/AddComment';
import {
  actions as getLecturerCommentsActions,
  selectors as getLecturerCommentsSelectors,
} from 'modules/Lectures/GetComments';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import {
  hooks as authedUserHooks,
} from 'modules/Authentication/AuthedUser';
import {
  actions as removeCommentActions,
  selectors as removeCommentSelectors,
} from 'modules/Lectures/RemoveComment';
import {
  actions as updateCommentActions,
  selectors as updateCommentSelectors,
} from 'modules/Lectures/UpdateComment';
import {
  actions as updateRateActions,
} from 'modules/Lectures/UpdateRate';

export default () => {
  const { id: uniId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { authedUser } = authedUserHooks.useAuthedUser();
  const lectures = useSelector(getLecturesSelectors.selectGetLectures);
  const faculties = useSelector(getFacultiesSelectors.selectGetFaculties);
  const filteredLectures = useSelector(filterLecturersSelectors.selectFilterLecturers);
  const comments = useSelector(getLecturerCommentsSelectors.selectGetComments);
  const addCommentState = useSelector(addCommentSelectors.selectAddComment);
  const removeCommentState = useSelector(removeCommentSelectors.selectRemoveComment);
  const updateCommentState = useSelector(updateCommentSelectors.selectUpdateComment);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [keyWord, setKeyword] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [commentsList, setCommentsList] = useState({
    comments: [],
    totally: 0,
  });
  const [isEditing, setEditing] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedLecturer, setSelectedLecturer] = useState(null);
  const handleLectureClick = (lecture) => {
    setSelectedLecturer(lecture);
    setModalOpen(true);
  };

  // textarea

  const [comment, setComment] = useState('');
  const [cursPos, setCursPos] = useState(null);
  const textareaRef = useRef();

  const handleCommentChange = (e) => setComment(e.target.value);

  const handleCursorPosition = (e) => {
    setCursPos({ start: e.target.selectionStart, end: e.target.selectionEnd });
  };

  // emoji
  const [showEmoji, setShowEmoji] = useState(false);
  const emojiRef = useRef();

  const toggleEmoji = () => setShowEmoji(!showEmoji);

  const handleClickOutsideEmoji = (event) => {
    if (emojiRef.current && !emojiRef.current.contains(event.target)) {
      setShowEmoji(false);
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    const newComment = `${comment.substring(0, cursPos.start)}${emojiObject.emoji}${comment.substring(cursPos.end, comment.length)}`;
    setComment(newComment);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutsideEmoji, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideEmoji, true);
    };
  });

  // get lectures

  useEffect(() => {
    if (comments.statuses.isSucceed) {
      dispatch(getLecturerCommentsActions.getComments.reset());
      setCommentsList({
        totally: 0,
        comments: [],
      });
    }
  }, [selectedLecturer]);

  useEffect(() => {
    if (uniId && selectedFaculty) {
      dispatch(getLecturesActions.getLectures.request({
        offset: 0,
        limit: 500,
        universityId: uniId,
        facultyId: selectedFaculty,
      }));
    }
  }, [uniId, selectedFaculty]);

  // get faculties
  useEffect(() => {
    dispatch(getFacultiesActions.getFaculties.request(uniId));
  }, []);

  useEffect(() => {
    if (faculties.statuses.isSucceed && selectedFaculty === null && keyWord.length === 0) {
      setSelectedFaculty(faculties?.data?.faculties[0]?.id);
    }
  }, [faculties, selectedFaculty, keyWord]);

  // filter lecturers
  useEffect(() => {
    if (keyWord.length > 0) {
      setSelectedFaculty(null);
      dispatch(filterLecturersActions.filterLecturers.request({
        offset: 0,
        limit: 500,
        fullName: keyWord,
      }));
    }
  }, [keyWord]);

  const returnLectures = () => {
    if (keyWord.length > 0) {
      return filteredLectures?.data?.lecturers || [];
    }
    return lectures?.data?.lecturers || [];
  };

  // lecturer comments
  const handleCommentAdd = () => {
    dispatch(addCommentActions.addComment.request({
      text: comment,
      lecturerId: selectedLecturer.id,
      isPrivate,
    }));
  };

  const handleCheckBoxChange = (value) => {
    setPrivate(value);
  };

  useEffect(() => {
    if (addCommentState.statuses.isFailed && addCommentState?.data?.response?.data) {
      console.log(addCommentState);
      enqueueSnackbar(addCommentState?.data?.response?.data, {
        variant: 'error',
      });
    }
    if (addCommentState.statuses.isSucceed) {
      const data = {
        createdAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
        id: addCommentState.data.id,
        isPrivate,
        lecturerId: selectedLecturer.id,
        text: comment,
        updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
        userId: authedUser.userId,
        user: isPrivate ? null : {
          firstName: authedUser.firstName,
          id: authedUser.userId,
          image: authedUser.image,
          lastName: authedUser.lastName,
        },
      };
      setCommentsList({
        ...commentsList,
        comments: [data, ...commentsList.comments],
      });
      setComment('');
    }
  }, [addCommentState]);

  useEffect(() => {
    if (selectedLecturer && !commentsList.comments.length > 0) {
      dispatch(getLecturerCommentsActions.getComments.request({
        offset: 0,
        limit: 10,
        lecturerId: selectedLecturer.id,
      }));
    }
  }, [selectedLecturer]);

  useEffect(() => {
    if (comments.statuses.isSucceed) {
      dispatch(updateCommentActions.updateComment.reset());
      setCommentsList({
        totally: comments.data.totally,
        comments: [...commentsList.comments, ...comments.data.comments],
      });
    }
  }, [comments]);

  const handleScroll = ({ target }) => {
    if (target.scrollTop >= (target.scrollHeight - target.offsetHeight)
        && commentsList.comments.length < commentsList.totally) {
      dispatch(getLecturerCommentsActions.getComments.request({
        offset: commentsList.comments.length,
        limit: 10,
        lecturerId: selectedLecturer.id,
      }));
    }
  };

  // delete comment
  const handleDeleteComment = (commentId) => {
    setSelectedComment(commentId);
    const answer = window.confirm('ნამდვილად გსურთ კომენტარის წაშლა?');
    if (answer) {
      dispatch(removeCommentActions.removeComment.request(commentId));
    } else {
      setSelectedComment(null);
    }
  };

  useEffect(() => {
    if (removeCommentState.statuses.isFailed) {
      enqueueSnackbar(removeCommentState.errorMessage.response.data, {
        variant: 'error',
      });
    }
    if (removeCommentState.statuses.isSucceed) {
      enqueueSnackbar('კომენტარი წაიშალა', {
        variant: 'success',
      });
      dispatch(removeCommentActions.removeComment.reset());
      setCommentsList({
        ...commentsList,
        comments: commentsList.comments.filter((com) => com.id !== selectedComment),
      });
      setSelectedComment(null);
    }
  }, [removeCommentState, selectedComment]);

  // edit comment
  const handleEditComment = (com) => {
    setSelectedComment(com);
    setEditing(true);
    setComment(com.text);
  };

  const handleEditCancel = () => {
    setComment('');
    setEditing(false);
  };

  const handleEditSave = () => {
    dispatch(updateCommentActions.updateComment.request({
      text: comment,
      isPrivate,
      commentId: selectedComment.id,
    }));
  };

  useEffect(() => {
    if (updateCommentState.statuses.isSucceed) {
      setEditing(false);
      setComment('');
      setCommentsList({
        ...commentsList,
        comments: commentsList.comments.map((com) => {
          if (com.id === selectedComment.id) {
            const data = {
              ...com,
              isPrivate,
              text: comment,
              updatedAt: moment(new Date()).format('DD-MM-YYYY h:mm:ss'),
              userId: isPrivate ? null : authedUser.userId,
              user: isPrivate ? null : com.user,
            };
            return data;
          }
          return com;
        }),
      });
    }
  }, [updateCommentState]);

  useEffect(() => () => {
    dispatch(updateCommentActions.updateComment.reset());
  }, []);

  // handle rate change

  const setRate = (rate, lectId) => {
    dispatch(updateRateActions.updateRate.request({
      lecturerId: lectId,
      rateNumber: rate,
    }));
  };

  return {
    isModalOpen,
    handleLectureClick,
    setModalOpen,
    toggleEmoji,
    showEmoji,
    emojiRef,
    handleClickOutsideEmoji,
    comment,
    handleCommentChange,
    handleCursorPosition,
    textareaRef,
    onEmojiClick,
    faculties: faculties?.data.faculties || [],
    selectedFaculty,
    lectures: returnLectures(),
    setSelectedFaculty,
    keyWord,
    setKeyword,
    setSelectedLecturer,
    handleCommentAdd,
    handleCheckBoxChange,
    comments: commentsList?.comments || [],
    handleScroll,
    selectedLecturer,
    authedUser,
    handleDeleteComment,
    handleEditComment,
    isEditing,
    handleEditCancel,
    handleEditSave,
    setRate,
  };
};
