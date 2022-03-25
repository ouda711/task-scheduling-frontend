import React,{useState, useEffect} from 'react';
import {useStyletron} from 'baseui';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AxiosUsersService } from '../../services/net/AxiosUsersService';
import { ToastContainer, toast } from 'react-toastify';
import { history } from '../../history';

function Register() {
  const [css, theme] = useStyletron();
  const { handleSubmit, register, formState: {errors} } = useForm();
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const success = () => {
    toast('Check your email to verify your account', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const onSubmit = (values) => {
    setLoading(true)
    AxiosUsersService.create(values).then(res => {
      if(res.data.success === false){
        setLoading(false)
      }
      if(res.data && res.data.success) {
        setMessage(<div className={"alert alert-success"}>{res.data.full_messages}</div>)
        setLoading(false)
        success()
      }else{
        setMessage(<div className={"alert alert-error"}>{res.data.full_messages}</div>)
        setLoading(false)
      }
      console.log(res)
      setLoading(false)
    }).catch(err=>{
      setLoading(false)
      setMessage(<div className={'alert alert-danger'}>Its possible the phone and/or email are taken</div>)
    })
  }

  useEffect(() => {

  }, []);

  return (
    <Outer>
      <Inner>
        <div className={css({
          fontFamily: 'sans-serif',
          width: '400px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '3em',
          marginBottom:'3em',
          borderRadius: '10px',
          backgroundColor: '#ffff',
          padding: '1.8rem',
          boxShadow: '2px 5px 20px rgba(0, 0, 0, 0.1)',
        })}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {message}
            <h2 className={css({
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '0'
            })}>Sign Up</h2>
            <p className={css({
              textAlign: 'center',
              fontWeight:' bold',
              textDecoration: 'none'
            })}>Already have an account? <Link to="/login" className={css({
              textDecoration: 'none'
            })}> Login </Link></p>

            <div className={css({
              display: 'flex',
              flexDirection: 'column'
            })}>
              <label htmlFor="fname" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>First Name</b></label>
              <input type="text" placeholder="Enter first name" id={"fname"} name="first_name" {...register("first_name", {required: "First name is required"})} className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <span className={css({
                color: ' #ec7063 ',
                fontSize: '0.75rem'
              })}>{errors.fname && errors.fname.message}</span>
              <label htmlFor="lname" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Last Name</b></label>
              <input type="text" placeholder="Enter last name" name="last_name" id={"lname"} {...register("last_name", {required: "Last name is required"})} className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <span className={css({
                color: ' #ec7063 ',
                fontSize: '0.75rem'
              })}>{errors.lname && errors.lname.message}</span>
              <label htmlFor="email" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="email" id={"email_address"} {...register('email_address', {required: "Email address is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please provide a valid email address"}})} className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <span className={css({
                color: ' #ec7063 ',
                fontSize: '0.75rem'
              })}>{errors.email && errors.email.message}</span>
              <label htmlFor="phone" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Phone</b></label>
              <input type="text" placeholder="Enter Phone" name="phone_number" id={"phone"} {...register('phone_number', {required:'Phone number is required', minLength: {value: 8, message:'Please provide a valid phone number'}, maxLength:{value: 12, message: 'Please provide a valid phone number'}})} className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <span className={css({
                color: ' #ec7063 ',
                fontSize: '0.75rem'
              })}>{errors.phone && errors.phone.message}</span>
              <label htmlFor="psw" className={css({
                color: 'rgb(170 166 166)'
              })}><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id={"psw"} {...register('password', {required:'Please provide a password', minLength: {value: 5, message: 'Password must be longer than 5 characters'}})} className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
            </div>
            <span className={css({
              color: ' #ec7063 ',
              fontSize: '0.75rem'
            })}>{errors.password && errors.password.message}</span>
            {loading? <button className={css({
              backgroundColor: 'rgba(69, 69, 185, 0.2)',
              color: 'white',
              padding: '10px 20px',
              marginTop: '10px',
              marginBottom: '20px',
              width: '100%',
              borderRadius: '10px',
              border: 'none',
              cursor: 'disabled'
            })}>Please wait...</button>:<button className={css({
              backgroundColor: 'rgb(69, 69, 185)',
              color: 'white',
              padding: '10px 20px',
              marginTop: '10px',
              marginBottom: '20px',
              width: '100%',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer'
            })}>Sign Up</button>}
          </form>
        </div>
      </Inner>
    </Outer>
  )
}

const Outer = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.borderTransparent,
      })}
    >
      {children}
    </div>
  );
};
const Inner = ({children}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '.25rem',
        minHeight: '98vh',
        overflow: 'hidden'
      })}
    >
      {children}
    </div>
  );
};

export default Register;