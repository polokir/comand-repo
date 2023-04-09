import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const onSubmit = text => {
    console.log(text);
    const todo = { id: nanoid(), text };
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <>
      <SearchForm handleSubmit={onSubmit} />
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo
              id={todo.id}
              text={todo.text}
              counter={index + 1}
              deleteTodo={deleteTodo}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
