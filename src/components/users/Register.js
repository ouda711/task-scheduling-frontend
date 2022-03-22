import React,{useState, useEffect} from 'react';
import {useStyletron} from 'baseui';
import {Grid, Cell} from 'baseui/layout-grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Register() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState( '');
  const [css, theme] = useStyletron();

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
          <form>
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
              <input type="text" placeholder="Enter first name" id={"fname"} name="fname" required className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <label htmlFor="lname" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Last Name</b></label>
              <input type="text" placeholder="Enter last name" name="lname" id={"lname"} required className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <label htmlFor="email" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="email" id={"email"} required className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <label htmlFor="phone" className={css({
                color: 'rgb(170 166 166)'
              })}> <b>Phone</b></label>
              <input type="text" placeholder="Enter Phone" name="phone" id={"phone"} required className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
              <label htmlFor="psw" className={css({
                color: 'rgb(170 166 166)'
              })}><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" id={"psw"} required className={css({
                padding: '10px 20px',
                marginTop: '8px',
                marginBottom: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxSizing: 'border-box'
              })}/>
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
            })}>Sign Up</button>
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