import React from 'react';
import {useStyletron} from 'baseui';
import { Link } from 'react-router-dom';
import {ReactComponent as More} from '../../assets/more.svg';

function TaskHolder(props) {
  const [css, theme] = useStyletron();

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
        <Link to={props.link} className={css({
          textDecoration:'none',
          fontWeight:'600',
          fontSize:'1.25rem',
          color:'#283747'
        })}>Task {props.id}</Link>
        <button className={css({
          background: 'transparent',
          border: 'none',
          cursor:'pointer'
        })}><More className={css({width:'1rem', height:'1rem'})}/></button>
      </div>
      {props.status === 'deferred'?<div className={css({
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
      })}>{props.status}</span>
      </div>: null}
      {props.status==='in_progress'?<div className={css({
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
        })}>{props.status}</span>
      </div>:null}
      {props.status ==='complete'?<div className={css({
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
        })}>{props.status}</span>
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
          })}>First Name: <span className={css({color: '#616a6b'})}>{props.first_name}</span></span>
        </div>

        <div className={css({

        })}>
          <span className={css({
            fontWeight: '600'
          })}>Other Name: <span className={css({color: '#616a6b'})}>{props.other_name}</span></span>
        </div>

        <div className={css({

        })}>
          <span className={css({
            fontWeight: '600'
          })}>Last Name: <span className={css({color: '#616a6b'})}>{props.last_name}</span></span>
        </div>
      </div>
      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Phone Number: <span className={css({color: '#616a6b'})}>{props.phone}</span></span>
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
          })}>Gender: <span className={css({color: '#616a6b'})}>{props.gender}</span></span>
      </div>

      <div className={css({
        marginTop:'1rem'
      })}>
          <span className={css({
            fontWeight: '600'
          })}>Comments: <span className={css({color: '#616a6b'})}>{props.comments}</span></span>
      </div>
    </div>
  )

}

export default TaskHolder