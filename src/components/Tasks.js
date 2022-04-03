import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
            Double click on a task to set as completed
            {tasks.map((task) => (

                <Task key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle} 
                />
            
            ))}
            
        </>
    )
}

export default Tasks
