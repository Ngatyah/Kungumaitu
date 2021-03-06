import { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onclose} />

};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>


}
const Modal = props => {
    const portalElement = document.getElementById('overlays')
    return <Fragment>
        {/* <Backdrop />
        <ModalOverlay>{props.children}</ModalOverlay>*/}
        {ReactDom.createPortal(<Backdrop onclose={props.onclose} />, portalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>

};
export default Modal;