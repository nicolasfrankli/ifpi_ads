import { Topico } from "../../models/Topico";
import "./estilo.css";

interface TopicoListProps {
    topico: Topico
}

export function TopicoListItem({ topico }: TopicoListProps){

    const data_string = topico.created_at.toLocaleString()

    return (
        <>
            <div className="bigsquare" >
                <p className="titletopico">{topico.descricao}</p>
                <p className="titletopico">{data_string}</p>
                <div className="curtidas_container">
                    <p className="curtidas">Tags: {topico.tags}</p>
                </div>
            </div>
        </>
    )
}