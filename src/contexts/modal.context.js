import { createContext, useContext, useEffect, useState } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(null);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    }

    return () => (document.body.style.overflow = 'unset');
  }, [showModal]);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {showModal && (
        <div
          className='modal-backdrop grid-center'
          onClick={() => setShowModal(false)}
        >
          {showModal}
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
