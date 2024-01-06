import {forwardRef, useImperativeHandle, useRef} from 'react'

import React from 'react'
// if i cretae  a form with method dialog inside a html tag dialog a button 
//that submits the form will close the dialog
// by default the dialog model is invisible
// forward ref helps us to pass a useref from one component to another component via props  
 const ResultModal = forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref){
  const formattedTime = (remainingTime/1000).toFixed(2);
  const dialog= useRef();
  useImperativeHandle(ref,()=>{
    return {
      open(){
        dialog.current.showModal();
      }
    }
  })
  return (
    <dialog ref={dialog} className=' result-modal'>
        {remainingTime <=0 && <h2>You Lost</h2>}
        <p>The target time is <strong>{targetTime} seconds.</strong></p>
      <p>You Stopped the timer with <strong>{formattedTime} seconds left</strong></p>
          <form action="" method='dialog' onSubmit={onReset}>
            <button>Close</button>
          </form>
    </dialog>
  )
})

export default ResultModal