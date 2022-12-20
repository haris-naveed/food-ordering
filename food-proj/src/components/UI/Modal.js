import classes from './Modal.module.css';
import ReactDOM  from 'react-dom';
import React from 'react';



const Backdrop=(props)=>{ 
  return <div className={classes.backdrop}> </div>;
};
const ModalOverlay=(props)=>{
  return( <div className={classes.modal}>
  <div className={classes.content}> {props.children}</div>

    </div>);
}
const PortalElement=document.getElementById('overlay');
const Modal = (props) => {
  return (
    <>
       { ReactDOM.createPortal(<Backdrop/>,PortalElement)}; 
   { ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </>
  
    
  )
}

export default Modal;