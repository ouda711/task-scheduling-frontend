import React,{useState, useEffect} from 'react';
import {useStyletron} from 'baseui';
import { useForm } from 'react-hook-form';
import {Grid, Cell} from 'baseui/layout-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ForgetPassword() {
  const [email, setEmail] = useState( '');
  const [css, theme] = useStyletron();
  const { handleSubmit, register, formState: {errors} } = useForm();

  const onSubmit = (values) => {
    console.log(values)
  }

  useEffect(() => {

  }, []);

  return (
    <Outer>
      <Inner>
        <div className={css({
          fontFamily: 'sans-serif',
          width: '300px',
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
            <h2 className={css({
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '0 0 1rem 0'
            })}>Forget Password</h2>
            <div className={css({
              display: 'flex',
              flexDirection: 'column'
            })}>
              <label htmlFor="email" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="email" id={"email"} {...register('email', {required: "Email address is required", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Please provide a valid email address"}})} className={css({
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
            </div>
            <button className={css({
              backgroundColor: 'rgb(69, 69, 185)',
              color: 'white',
              padding: '10px 20px',
              marginTop: '10px',
              marginBottom: '20px',
              width: '100%',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer'
            })}>Request</button>
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

export default ForgetPassword;

