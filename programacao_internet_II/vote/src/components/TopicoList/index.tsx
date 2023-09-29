import { Topico } from "../../models/Topico";
import { TopicoListItem } from "../TopicoListItem";

interface ListaTopicosProps {
    topicos: Topico[]
}

export function TopicosList({ topicos }: ListaTopicosProps){

    return (
        <>
        <h3>{topicos.length} Tarefas cadastradas</h3>
        <ul>
          {topicos.map(topico => <TopicoListItem topico={topico}/>)}
        </ul>
      </>
    )
}

  
  

