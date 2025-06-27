import './assets/styles/reset.css'
import './assets/styles/List.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as sbrand from '@fortawesome/free-solid-svg-icons'

function List(){
    return (
        <li>
            <input type="checkbox" name="list" />
            <span>방 청소하기</span>
            <button type="button">
            <FontAwesomeIcon icon={sbrand.faEllipsisVertical} />
            </button>
        </li>
    )
}

export default List;