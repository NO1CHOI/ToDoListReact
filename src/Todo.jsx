import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as sbrand from '@fortawesome/free-solid-svg-icons'
import './assets/styles/reset.css'
import './assets/styles/Todo.css'


function Todo(){
    return (
        <main>
            <input type="text" placeholder="오늘의 할일을 입력해주세요" />
            <button type="button">
            <FontAwesomeIcon icon={sbrand.faPenToSquare} />
            </button>
        </main>
    )
}

export default Todo;