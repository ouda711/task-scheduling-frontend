import React, { useEffect, useState } from 'react';
import {useStyletron} from 'baseui';
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import {ReactComponent as More} from '../../assets/more.svg';
import { TaskAxiosService } from '../../services/net/TaskAxiosService';

function TaskSingleContainer(props) {
  const details = useParams();
  const taskId = details.id;
  const [css, theme] = useStyletron();

  const [task, setTask] = useState({});
  const [customer, setCustomer] = useState({});
  const [count, setCount] = useState( 0);
  const [comment, setComment] = useState([]);
  const [agent, setAgent] = useState([]);

  useEffect(() => {
    singleTask()
  },[])

  const singleTask = () => {
    TaskAxiosService.getById(taskId).then((response) => {
      if(response.data && response.data.success) {
        console.log(response.data)
        setTask(response.data)
        setCustomer(response.data.customer)
        setCount(response.data.comments.length)
        setComment(response.data.comments);
        setAgent(response.data.agents)
        console.log(response.data.agents)
      }
    }).catch(err=>{

    })
  }


  return (
    <div className={css({
      backgroundColor: '#ffffff',
      padding: '0.5rem',
      marginBottom: '1rem',
      borderRadius: '0.2rem',
      boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px'
    })}>
      <div className={css({
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      })}>
        <h2 className={css({
          textDecoration:'none',
          fontWeight:'600',
          fontSize:'1.25rem',
          color:'#283747'
        })}>Task {task.id}</h2>
        <button className={css({
          background: 'transparent',
          border: 'none',
          cursor:'pointer'
        })}><More className={css({width:'1rem', height:'1rem'})}/></button>
      </div>
      {task.task_status === 'deferred'?<div className={css({
        display:'flex',
        alignItems: 'center',
        marginTop: '0.75rem'
      })}>
        <span className={css({
          width:'1rem',
          height: '1rem',
          backgroundColor: '#e74c3c',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '0.75rem'
        })}>
        </span>
        <span className={css({
          color: '#e74c3c',
          fontSize: '0.95rem'
        })}>{task.task_status}</span>
      </div>: null}
      {task.task_status==='in_progress'?<div className={css({
        display:'flex',
        alignItems: 'center',
        marginTop: '0.75rem'
      })}>
        <span className={css({
          width:'1rem',
          height: '1rem',
          backgroundColor: '#f1c40f',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '0.75rem'
        })}>
        </span>
        <span className={css({
          color: '#f1c40f',
          fontSize: '0.95rem'
        })}>{task.task_status}</span>
      </div>:null}
      {task.task_status ==='complete'?<div className={css({
        display:'flex',
        alignItems: 'center',
        marginTop: '0.75rem'
      })}>
        <span className={css({
          width:'1rem',
          height: '1rem',
          backgroundColor: '#2ecc71',
          borderRadius: '50%',
          display: 'inline-block',
          marginRight: '0.75rem'
        })}>
        </span>
        <span className={css({
          color: '#2ecc71',
          fontSize: '0.95rem'
        })}>{task.task_status}</span>
      </div>:null}
      <div className={css({
        marginTop: '1rem',
        color: '#616a6b',
        fontSize: '0.95rem',
        fontWeight: '600'
      })}>Customer Details</div>

      <div className={css({
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: '0.75rem'
      })}>
        <div className={css({

        })}>
          <span className={css({
            fontWeight: '600'
          })}>First Name: <span className={css({color: '#616a6b'})}>{customer.first_name}</span></span>
        </div>

        <div className={css({

        })}>
          <span className={css({
            fontWeight: '600'
          })}>Other Name: <span className={css({color: '#616a6b'})}>{customer.last_name}</span></span>
        </div>

        <div className={css({

        })}>
          <span className={css({
            fontWeight: '600'
          })}>Last Name: <span className={css({color: '#616a6b'})}>{customer.last_name}</span></span>
        </div>
      </div>
      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Phone Number: <span className={css({color: '#616a6b'})}>{customer.phone_number}</span></span>
      </div>

      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Location: <span className={css({color: '#616a6b'})}>Mpweke Lane, South B, Nairobi Kenya</span></span>
      </div>

      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Gender: <span className={css({color: '#616a6b'})}>{customer.gender}</span></span>
      </div>

      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Comments: <span className={css({color: '#616a6b'})}>{count}</span></span>
      </div>
      <ul className={css({

      })}>
        {comment.map(i => (<li>{i.content}</li>))}
      </ul>

      <div className={css({
        marginTop: '1rem',
        color: '#616a6b',
        fontSize: '0.95rem',
        fontWeight: '600'
      })}>Agent Details</div>
      {task.assigned?agent.map(i =>(
        <>
          <div>First Name: {i.personel_first_name}</div>
          <div>Middle Name: {i.personel_last_name}</div>
          <div>Last Name: {i.personel_last_name}</div>
        </>
      )):<p>Pending agent assignment</p>}
    </div>
  )
}

export default TaskSingleContainer