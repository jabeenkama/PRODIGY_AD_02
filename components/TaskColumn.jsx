// eslint-disable-next-line no-unused-vars
import React from 'react';
//import Todo from "../assets/target.png";
import "./TaskColumn.css"
import TaskCard from './TaskCard';

// eslint-disable-next-line react/prop-types
const TaskColumn = ({title, icon, tasks, status, handleDelete}) => {

  return (
    <section className='task_column'>
        <h2 className='task_column_heading'> <img className='task_column_icon' src={icon} alt=''/>{""}
        {title}
        </h2>
        {
          // eslint-disable-next-line react/prop-types
          tasks.map((task, index) => task.status === status && <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index}/> )
        }
    </section>
  );
};

export default TaskColumn