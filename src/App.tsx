import {useState} from 'react'
import * as Component from './App.styles'
import { Item } from './types/Item';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => 
{
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Pedir ela em casamento',
      done: false
    },
    {
      id: 2,
      name: 'Namorar com a bb',
      done: true
    }
  ]);

  const handleAddTask = (taskName: string) => 
  {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
      <Component.Container>
        <Component.Area>

          <Component.Header>
            <p>Lista de Tarefas</p>
          </Component.Header>

          <AddItem onEnter={ handleAddTask}></AddItem>

          {list.map((item, index)=>(
            <ListItem key={index} item={item} />
          ))}

        </Component.Area>
      </Component.Container>
  );
}

export default App;