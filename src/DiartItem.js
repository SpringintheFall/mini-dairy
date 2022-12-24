import { useRef, useState } from "react";

const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onRemove,
  onEdit
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`))
      onEdit(id, localContent);
    toggleIsEdit();
  };

  return (
    <div className="DiaryItem">
      <span className="info">
        작성자: {author} | 감정점수: {emotion}
        {isEdit ? (
          <>
            <button onClick={handleQuitEdit}>수정취소</button>
            <button onClick={handleEdit}>수정완료</button>
          </>
        ) : (
          <>
            <button onClick={toggleIsEdit}>수정하기</button>
            <button onClick={handleRemove}>삭제하기</button>
          </>
        )}
      </span>

      <br />
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <br />
      <span className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </span>
    </div>
  );
};

export default DiaryItem;
