import React from "react"

const Modal = ({ children }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 flex flex-col justify-center items-center"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      {children}
    </div>
  )
}

export default Modal
