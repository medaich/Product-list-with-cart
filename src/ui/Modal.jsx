import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  function handleClick() {
    open((openName) => (openName === opens ? "" : opens));
  }

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children, name }) {
  const { close, openName } = useContext(ModalContext);

  if (openName !== name) return null;

  function handleClose() {
    close();
  }

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center">
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("clicked");
          handleClose();
        }}
        className="absolute inset-0 backdrop-brightness-50"
      ></div>

      <div className="z-20 max-h-[70vh] min-w-[23vw] overflow-y-scroll rounded-lg bg-rose-50 p-8 max-sm:w-full">
        {cloneElement(children, { onCloseModal: handleClose })}
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
