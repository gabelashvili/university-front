import { useState } from 'react';

export default () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLectureClick = () => {
    setModalOpen(true);
  };

  return {
    isModalOpen,
    handleLectureClick,
    setModalOpen,
  };
};
