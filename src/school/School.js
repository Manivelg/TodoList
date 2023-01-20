import React, { useEffect, useState } from 'react';
import Header from '../bar/header';
import Sidemenu from '../bar/sidemenu';
import TaskView from '../task/TaskView';
import { TfiAngleLeft, TfiMoreAlt } from "react-icons/tfi";
import { TfiPlus } from "react-icons/tfi";
 

function School() {

        //DeleteTodo List
        const DeleteTodo = (id) => {
            const filterTask = TaskContent.filter((e,i) => {
                return e.id !== id
            })
            SetTaskcontent(filterTask);
        }

    //Todo Task value getting
    const SaveData = () => {
        const data = localStorage.getItem('TaskContent');
        //console.log(data);
        if(data) {
          return JSON.parse(data);
        }
        else {
          return []
        }
      }

    //Hooks
    const [Name, SetName] = useState([]);
    const [Open, SetOpen] = useState(false);
    const [TaskContent, SetTaskcontent] = useState(SaveData());
    
    //function
    const Task_submit = (e) => {

        e.preventDefault(e);

        if(!Name) return;

            let TaskView = {
                id : Number(TaskContent.length+1),
                Name,
                checked : false,
            }

            SetTaskcontent([...TaskContent,TaskView]);
            SetName('');
            
        }

        //Save data localStorage
        useEffect(() => {
            localStorage.setItem('TaskContent', JSON.stringify(TaskContent));
        },[TaskContent])


  return (
    <>
    <Header />

    <div className='view_data'>
    <Sidemenu />

    <section className='list_data'>
        <div className='list_dashboard'>
            <div className='dashboard_view'>
                <div className='dashboard_set'>
                    <div className='left_chevron'>
                    <TfiAngleLeft className='back_to_chevron'/>
                    </div>
                    <div className='dash_head'>School</div>
                </div>
                
                <div className='list_view'>
                <TfiMoreAlt className='show_view'/>
                </div>
            </div>

          <div className='add_task'>
            <div className='task_plus'>
                <TfiPlus className='plus_sign' />
                <input
                      type= 'text'
                      placeholder='Add a Task'
                      value={Name}
                      className='input_file'
                      onChange={(e) => {SetName(e.target.value)}}
                      onClick={()=> SetOpen(!Open)}
                      required
                />
                <button className={`submit ${Open ? "block" : "hidden"}`} onClick={Task_submit}>Add</button>
            </div>
          </div>


          <div className='view_status'>

          {TaskContent.length > 0 && 
            <>
                <TaskView TaskContent={TaskContent} DeleteTodo = {DeleteTodo} />
            </>
          }

          {TaskContent.length < 1 && <div className='empty_task'><div className='enter_task'> No task added...</div></div>}


          </div>

        </div>

    </section>

    </div>
    </>
  )
}

export default School