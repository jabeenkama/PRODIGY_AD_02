// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import "./TaskForm.css";
import Tag from './Tag';

// eslint-disable-next-line react/prop-types
const TaskForm = ({setTasks}) => {
    // eslint-disable-next-line no-unused-vars
    const [taskData,setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
});
const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
}
const selectTag = (tag) => {
    if(taskData.tags.some(item=>item===tag)){
      const filterTags =  taskData.tags.filter(item=>item!==tag)
      setTaskData(prev => {
        return {...prev,tags:filterTags}
      })
    } else {
        setTaskData(prev => {
            return {...prev, tags:[...prev.tags, tag]};
        })
    }
};

    const handleChange = (e) => {
        const { name, value} = e.target;
        
        
        setTaskData(prev => {
            return {...prev, [name]: value};
        });
    };
    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(taskData);
            setTasks(prev => {
                return [...prev, taskData];
            });
            setTaskData({task: "",
                status: "todo",
                tags: [],})
    };
 
    
    
  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={taskData.task} className='task_input' placeholder='Enter your task' onChange={handleChange}/>
            <div className='task_form_bottom_line'>
            <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag tagName="JAVASCRIPT" selectTag={selectTag} selected={checkTag("JAVASCRIPT")}/>
            <Tag tagName="REACT" selectTag={selectTag} selected={checkTag("REACT")}/> 
                
                
                <select name="status" value={taskData.status} className='task_status' onChange={handleChange}>
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type="submit" className='task_submit'>
                +Add Task
                </button>
                
            </div>
        </form>
      </header>
  )
}

export default TaskForm;