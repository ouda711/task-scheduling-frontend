import React,{useState} from 'react';
import {useStyletron} from 'baseui';
import TaskHolder from './TaskHolder';
import { Pagination } from "baseui/pagination";

function TaskContainer() {
  const [css, theme] = useStyletron();
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className={css({
      padding: '1rem'
    })}>
      <TaskHolder />
      <TaskHolder />
      <TaskHolder />
      <TaskHolder />
      <TaskHolder />
      <div className={css({
        backgroundColor:'#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      })}>
        <Pagination
          numPages={20}
          currentPage={currentPage}
          onPageChange={({ nextPage }) => {
            setCurrentPage(
              Math.min(Math.max(nextPage, 1), 20)
            );
          }}
        />
      </div>
    </div>
  )
}

export default TaskContainer