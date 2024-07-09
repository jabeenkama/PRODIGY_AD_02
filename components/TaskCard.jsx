// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from '../assets/delete.png';
// eslint-disable-next-line react/prop-types, no-unused-vars
const TaskCard = ({title, tags, handleDelete, index}) => {
  return (
    <article className='task_card'>
        <p className="task_text">{title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
{
  // eslint-disable-next-line react/prop-types
  tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true}/>)
}

            </div>
            <div className='task_delete' onClick={() => handleDelete(index)}>
                <img src={deleteIcon} className='delete_icon' alt=''/>
            </div>
        </div>
    </article>
  )
}

export default TaskCard