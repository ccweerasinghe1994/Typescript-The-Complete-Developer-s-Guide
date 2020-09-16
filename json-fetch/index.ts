import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  title: string;
  id: number;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as ToDo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logToDo(title, completed, id);
});

const logToDo = (title: string, completed: boolean, id: number) => {
  console.log(`
  To Do with id : ${id}
  Has a Title of : ${title}
  IS it finished : ${completed}
  `);
};
