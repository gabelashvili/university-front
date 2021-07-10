/* eslint-disable no-alert */
import { useState, useRef, useEffect } from 'react';
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
import moment from 'moment';

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [keyWord, setKeyword] = useState('');
  const [isPrivate, setPrivate] = useState(false);
  const [commentsList, setCommentsList] = useState({
    comments: [],
    totally: 0,
  });
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
    dispatch(getLecturesActions.getLectures.request({
      offset: 0,
      limit: 500,
      universityId: uniId,
      facultyId: selectedFaculty,
    }));
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
    if (addCommentState.statuses.isFailed) {
      enqueueSnackbar(addCommentState.errorMessage.response.data, {
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
        user: {
          firstname: authedUser.firstName,
          id: authedUser.userId,
          image: authedUser.image,
          lastname: authedUser.lastName,
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
    if (selectedLecturer) {
      dispatch(getLecturerCommentsActions.getComments.request({
        offset: 0,
        limit: 10,
        lecturerId: selectedLecturer.id,
      }));
    }
  }, [selectedLecturer]);

  useEffect(() => {
    if (comments.statuses.isSucceed) {
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
    console.log(commentId);
    const answer = window.confirm('ნამდვილად გსურთ კომენტარის წაშლა?');
    if (answer) {
      console.log('ki');
    }
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
    comments: commentsList.comments,
    handleScroll,
    selectedLecturer,
    authedUser,
    handleDeleteComment,
  };
};
