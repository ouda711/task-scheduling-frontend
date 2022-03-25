import React, { useEffect, useState } from 'react';
import {useStyletron} from 'baseui';
import TaskHolder from './TaskHolder';
import { TaskAxiosService } from '../../services/net/TaskAxiosService';
import Pagination from '../partials/Pagination';

function TaskContainer() {
  const [css, theme] = useStyletron();
  const [currentPage, setCurrentPage] = useState(1);

  const [tasks, setTasks] = useState([]);
  const [pageMeta, setPageMeta] = useState({});

  useEffect(() => {
    fetchTasks();
  },[]);

  const fetchTasks = (query) => {
    TaskAxiosService.fetchPage(query).then(res=> {
      console.log(res.data.tasks)
      setTasks(res.data.tasks);
      setPageMeta(res.data.page_meta)
    }).catch(err=>{
      console.error(err)
    })
  }

  const fetchMore = (location, page, page_size) => {
    fetchTasks({location, page, page_size})
  }

  let taskSummary;

  if(tasks){
    taskSummary = [...Array(tasks.length).keys()].map(i => {
      let task = tasks[i];

      return (
        <TaskHolder
          link={`/task/${task.id}`}
          id ={task.id}
          status ={task.task_status}
          first_name={task.customer.first_name}
          other_name={task.customer.last_name}
          last_name={task.customer.last_name}
          phone={task.customer.phone_number}
          gender={task.customer.gender}
          comments={task.comments_count}
        />
      )
    })
  }else{
    taskSummary = <h2>Loading ...</h2>
  }

  return (
    <div className={css({
      padding: '1rem'
    })}>
      {taskSummary}
      <div className={css({
        backgroundColor:'#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })}>
        <Pagination location={'/tasks'} loadMore={fetchMore} pageMeta={pageMeta}/>
      </div>
    </div>
  )
}

export default TaskContainer