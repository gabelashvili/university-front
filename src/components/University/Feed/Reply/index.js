import { useEffect, useRef, useState } from 'react';
import {
  Reply,
  TextArea,
} from 'components/University/Feed/Reply/styles';

const ReplyComponent = () => {
  const [comment, setComment] = useState('');
  const textareaRef = useRef();
  // resize textarea automatically
  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const { scrollHeight } = textareaRef.current;
    textareaRef.current.style.height = `${scrollHeight}px`;
  }, [comment]);
  return (
    <Reply>
      <TextArea
        rows={1}
        ref={textareaRef}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    </Reply>
  );
};

export default ReplyComponent;
