import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {useStyletron} from 'baseui';
import {ReactComponent as Add} from '../../assets/add.svg';
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg';
import {ReactComponent as Bell} from '../../assets/bell.svg';
import {ReactComponent as Message} from '../../assets/message.svg';
import {ReactComponent as User} from '../../assets/user.svg';
import {ReactComponent as Exit} from '../../assets/exit.svg';
import {ReactComponent as Task} from '../../assets/task.svg';
import image from '../../assets/face.jpg'
import { UsersService } from '../../services/local/UsersService';
import { history } from '../../history';


function Header() {
  return (
    <Navbar>
      <NavItem icon={<Add />} />
      <NavItem icon={<Bell />} />
      <NavItem icon={<Message/>} />
      <NavItem icon={<ArrowDown />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  )
}

function Navbar(props) {
  const [css, theme] = useStyletron();
  return (
    <nav className={css({
      height: '60px',
      background: '#fff',
      padding: '0 1rem',
      borderBottom: 'rgba(0,0,0,0.4)',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    })}>
      <ul className={css({
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
      })}>
          <div className={css({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center!important',
            alignContent: 'center',
            cursor: 'pointer',
            borderRadius: '10rem',
            height: '2.2rem',
            margin: 'auto 0'
          })}>
            <img className={css({
              width: '2rem',
              height: '2rem',
              objectFit: 'cover',
              borderRadius: '50%',
            })} src={image} alt=""/>
            <h5 className={css({
              color: '#0f0f0f',
              fontSize: '1rem',
              fontWeight: '900',
              alignItems: 'center',
              margin: 'auto 0.5rem',
            })}>Ouda</h5>
          </div>
          {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [css, theme] = useStyletron();
  const node = useRef();

  useEffect(()=>{
    document.addEventListener("mousedown", handleClick);
    return ()=>{
      document.removeEventListener("mousedown", handleClick)
    }
  },[])

  const handleClick = (e)=>{
    if(node.current.contains(e.target)){
      return;
    }
    setOpen(false)
  }

  return (
    <li className={css({
      width: 'calc(60px * 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    })} ref={node}>
      <a href="#" className={css({
        width: 'calc(60px*0.5)',
        height: 'calc(60px*0.5)',
        background: 'rgba(0, 0, 0, 0.1) none repeat scroll 0% 0%',
        borderRadius: '50%',
        padding: '5px',
        margin: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'filter 300ms',
        '&:hover': {
          filter: 'brightness(1.2)'
        },
        '& svg': {
          width: '20px',
          height: '20px'
        }
      })} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [css, theme] = useStyletron();

  // useEffect(() => {
  //   setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  // }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {

    return (
      <a href={props.link} className={css({
        height: '40px',
        color:'#0f0f0f',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50%',
        transition: 'background 500ms',
        padding: '0.5rem',
        '&:hover':{
          color: 'red'
        }
      })} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={css({
          marginRight: '0.5rem'
        })}>{props.leftIcon}</span>
        {props.children}
        <span className={css({
          marginRight:'auto'
        })}>{props.rightIcon}</span>
      </a>
    );
  }

  const logout = () => {
    UsersService.clearSession();
    history.push('/login')
    window.location.reload();
  }

  return (
    <div className={css({
      position: 'absolute',
      top: '58px',
      width: '240px',
      transform: 'translateX(-45%)',
      backgroundColor: '#fff',
      borderRadius: '0.2rem',
      padding: '1rem',
      overflow: 'hidden',
      transition: 'height 500ms ease',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    })} style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className={css({
          width: '100%'
        })}>
          <DropdownItem link={'/profile'} leftIcon={<User/>}>My Profile</DropdownItem>
          <DropdownItem link={'/tasks'} leftIcon={<Task/>}>Tasks</DropdownItem>
          <button onClick={logout}>Sign Out</button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Header