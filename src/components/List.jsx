import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todoss, onUpdate, onDelete }) => {

    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === '') {
            return todoss;
        }
        return todoss.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
    };

    const filteredTodos = getFilteredData();

    return <div className='List'>
        <h4>Todo List 🌱</h4>
        <input
            value={search}
            onChange={onChangeSearch}
            placeholder="검색어를 입력하세요" />
        <div className='Todos'>
            {filteredTodos.map((todo) => {
                return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
            })}
        </div>
    </div>;
};

export default List;