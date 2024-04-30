import { useState, useRef } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

import './App.css'

const mokData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },

  {
    id: 1,
    isDone: false,
    content: "집에가기",
    date: new Date().getTime(),
  },

  {
    id: 2,
    isDone: false,
    content: "잠자기",
    date: new Date().getTime(),
  },
];

function App() {

  const [todoss, setTodss] = useState(mokData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodss([newTodo, ...todoss]);
  };

  const onUpdate = (id) => {
    setTodss(
      todoss.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );

  }

  const onDelete = (id) => {
    setTodss(todoss.filter((todo) => todo.id !== id));

  }

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todoss={todoss} onUpdate={onUpdate} onDelete={onDelete} />

    </div>
  )
}

export default App
