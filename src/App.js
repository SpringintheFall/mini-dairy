import { useEffect, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "김코딩",
    content: "오늘의 일기는..🔥",
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: "김자바",
    content: "오늘의 일기는..❤️",
    emotion: 3,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: "김자스",
    content: "오늘의 일기는..🖤",
    emotion: 1,
    created_date: new Date().getTime()
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
