
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });
const handleClose =()=>{
  ref.current.close()
}
  return createPortal(
    <dialog className="modal  " ref={dialog}>
      {children}
      <button onClick={handleClose} className=' absolute top-2 right-3 text-red-600 text-xl font-extrabold' >X</button>
    </dialog>,
    document.getElementById('modal')
  );
});


export default Modal;
