import React, { useState, useEffect } from 'react';

export default function A() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => setTodo(json))
  }, []);

  return !todo.length ? <div>a</div> : todo.map(item => <div>{item.title}</div>);
}