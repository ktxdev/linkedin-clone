import { cloneElement, createContext, useContext, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { createPortal } from "react-dom";
import Card from "./Card";

const ModalContext = createContext();

function Modal({ children }) {
  const [openWindowName, setOpenWindowName] = useState("");

  const close = () => setOpenWindowName("");
  const open = setOpenWindowName;

  return (
    <ModalContext.Provider value={{ openWindowName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: windowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(windowName) });
}

function Window({ children, name }) {
  const { openWindowName, close } = useContext(ModalContext);
  const modalRef = useClickOutside(close);

  if (name != openWindowName) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-screen w-screen bg-transparent z-50">
      <div ref={modalRef} className="relative w-2/5 bg-white shadow rounded-md">
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
