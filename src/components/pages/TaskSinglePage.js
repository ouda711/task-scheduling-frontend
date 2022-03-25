import React from 'react';
import {useStyletron} from 'baseui';
import Header from '../header/Header';
import TaskContainer from '../tasks/TaskContainer';
import TaskSingleContainer from '../tasks/TaskSingleContainer';

function TaskSinglePage() {
  const [css, theme] = useStyletron();

  return (
    <div className={css({
      position:'relative',
      width: '100%',
      padding:'0'
    })}>
      <div className={css({
        position: 'fixed',
        width: '100%',
        marginTop: '-1rem',
        zIndex: '1000',
        top: '0',
      })}>
        <Header />
      </div>
      <main className={css({
        marginTop: '10rem',
        width: '50%',
        margin:' 6rem auto auto auto'
      })}>
        <TaskSingleContainer />
      </main>

    </div>
  )
}

export default TaskSinglePage