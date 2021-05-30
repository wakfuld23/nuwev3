import React from 'react'
import { FunctionComponent } from 'react'
import { createPortal } from 'react-dom'

import classes from './modal.module.scss'

interface OnCloseProps {
  onClose: () => void
}

const Backdrop: FunctionComponent<OnCloseProps> = ({ onClose }) => (
  <div className={classes.backdrop} onClick={onClose} />
)

const ModalOverlay: FunctionComponent = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
)

const portalElement = document.getElementById('overlays')!

export const Modal: FunctionComponent<OnCloseProps> = ({ children, onClose }) => {
  return (
    <div>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </div>
  )
}
