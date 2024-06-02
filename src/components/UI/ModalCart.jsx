import ReactDOM from 'react-dom';
import './ModelStyles.css';

const ModalCart = ({ children, onClose }) => {
    return ReactDOM.createPortal(
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      document.getElementById('overlays')
    );
  };
  export default ModalCart;