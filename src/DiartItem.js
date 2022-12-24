const DiaryItem = ({
  id,
  author,
  content,
  emotion,
  created_date,
  onDelete
}) => {
  return (
    <div className="DiaryItem">
      <span className="info">
        작성자: {author} | 감정점수: {emotion}
        <button
          onClick={() => {
            console.log(id);
            if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
              onDelete(id);
            }
          }}
        >
          삭제하기
        </button>
      </span>

      <br />
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <br />
      <span className="content">{content}</span>
    </div>
  );
};

export default DiaryItem;
