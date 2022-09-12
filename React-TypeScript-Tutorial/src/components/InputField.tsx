import './styles.css'
import { useRef } from 'react'

interface props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.SyntheticEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: props) => {

  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <form 
      className="input" 
      onSubmit={(e) => 
        {
          handleAdd(e)
          inputRef.current?.blur();
        }
      }>
      <input 
        type='input' 
        placeholder="Enter A Task" 
        className="input-box" 
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        />
      <button className="input-btn" type='submit' >Go</button>
    </form>
  )
}

export default InputField;