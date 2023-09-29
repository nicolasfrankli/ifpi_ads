import { ulid } from 'ulidx';
import { useState } from 'react';
import { Topico } from '../../models/Topico';
import { Autor } from '../../models/Autor'
import { TopicoForm } from '../../components/TopicoForm';
import { TopicosList } from '../../components/TopicoList';

export function TopicosPage() {
    
    const [topicos, settopicos] = useState<Topico[]>([])

    const handleAddTopico = (text: string) => {
        const newTopico = {
            id: ulid(),
            descricao: text,
            created_at: new Date(),
            tags: ["Rojão"],
            active: true
        }

        settopicos([newTopico, ...topicos])
    }

    return (
      <>
        <TopicoForm onAdd={handleAddTopico} />
        <TopicosList topicos={topicos} />
      </>
      )
}


// export function TasksPage() {

//   const [tasks, setTasks] = useState<Task[]>([])


//   const handleAddTask = (text: string) => {
//     const new_task = {
//       id: ulid(),
//       created_at: new Date(),
//       name: text,
//       description: 'Brincar quando estiver cansado',
//       done: false
//     }

//     setTasks([new_task, ...tasks])
//   }

//   const handleRemoveTask = (task: Task) => {
//     const filtradas = tasks.filter(t => t.id !== task.id)
//     setTasks(filtradas)
//   }

//   return (
//     <>
//       <TaskForm onAdd={handleAddTask} />
//       <TaskList tasks={tasks} onRemove={handleRemoveTask} />
//     </>
//   )
// }