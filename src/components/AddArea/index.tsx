import { useState, KeyboardEvent } from "react"
import * as C from "./style"

type Prop = {
    onEnter: (taskName: string) => void
}

export function AddArea({ onEnter }: Prop){
    const [inputText, setInputText] = useState('')

    const handleOnClick = () => {
        if(inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    const handleKeyUpEvent = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Component>
            <input 
                className='task'
                type="text"
                placeholder='Digite a tarefa'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUpEvent}
                />
                <button onClick={handleOnClick} type="submit">
                    <h1>+</h1>
                </button>
        </C.Component>
    )
}