import { FormEventHandler, FormHTMLAttributes, useRef } from "react"


interface TopicoFormProps {
    onAdd: (text: string) => void
}

export function TopicoForm({ onAdd }: TopicoFormProps){

  const descriptionInputRef = useRef<HTMLInputElement>(null)
  
  const handleSubmit = () => {
    //event.preventDefault()
    const text = descriptionInputRef.current!.value

    // event.target.reset()
    // descriptionInputRef.current!.focus()

    onAdd(text)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={descriptionInputRef} placeholder="Quais são as novidades?" />

      <input type="submit" value="Publicar" />
    </form>
  )
}