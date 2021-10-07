import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function PrintTodo({ todoList, deleteItem }) {
    function removeItem(e,item){
        deleteItem(e,item);
    }
    return (
        <div>
            <div class="Items">
                {todoList.map((item, index) => {
                   return (<p className="todotab" key={index}>
                        {item}
                        <div className="delicon" onClick={e=>removeItem(e,item)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </p>)}
                )}
            </div>
        </div>
    );
}
export default PrintTodo;