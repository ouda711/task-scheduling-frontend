import React,{useState, useEffect} from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState( '');
  const [css, theme] = useStyletron();
  const {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      phone: "",
      password: ""
    }
  });

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
          <form onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
            <h2 className={css({
              textAlign: 'center',
              fontWeight: 'bold',
              margin: '0'
            })}>Log In</h2>
            <p className={css({
              textAlign: 'center',
              fontWeight:' bold',
              textDecoration: 'none'
            })}>Don't have an account? <Link to="/register" className={css({
              textDecoration: 'none'
            })}> Sign Up</Link></p>

            <div className={css({
              display: 'flex',
              flexDirection: 'column'
            })}>
              <label htmlFor="phone" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Phone</b></label>
              <input type="text" placeholder="Enter Phone" id={"phone"} {...register("phone", {required: "Phone number is required", minLength: {value: 8, message: "Phone must be 8 characters and more"}})} name="phone" className={css({
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
              <input type="password" placeholder="Enter Password" id={"psw"} name="password" {...register("password", {required: "Password is required", minLength: {value: 5, message: "Password must be above 5 characters"}})} className={css({
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
              fontSize: '0.75rem',
              marginTop: '-0.75rem'
            })}>{errors.password && errors.password.message}</span>
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
            })}>Log In</button>
            <Link className={css({
              textAlign: 'center',
              display: 'block',
              textDecoration: 'none'
            })} to="/forget-password">Forgot password?</Link>
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

export default Login;