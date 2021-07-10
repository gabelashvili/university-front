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
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

export default () => {
  const { id: uniId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const lectures = useSelector(getLecturesSelectors.selectGetLectures);
  const faculties = useSelector(getFacultiesSelectors.selectGetFaculties);
  const filteredLectures = useSelector(filterLecturersSelectors.selectFilterLecturers);
  const addCommentState = useSelector(addCommentSelectors.selectAddComment);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [keyWord, setKeyword] = useState('');
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
      isPrivate: true,
    }));
  };

  useEffect(() => {
    if (addCommentState.statuses.isFailed) {
      enqueueSnackbar(addCommentState.errorMessage.response.data, {
        variant: 'error',
      });
    }
  }, [addCommentState]);

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
  };
};
