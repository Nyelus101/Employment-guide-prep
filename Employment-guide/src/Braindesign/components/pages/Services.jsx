/*import React from 'react';
import '../../App.css';

export default function Services() {
  return <h1 className='services'>SERVICES</h1>;
}*/













//THE MAIN!!!
// import React from 'react';
// import '../../App.css';
// import Exam from '../../Quiz-app/Exam.jsx';
// // import QuizApp from '../../../Test/QuizApp.jsx';
// import "../../../Test/index.scss";

// export default function Services() {
//   return (
//     <>
//       {/* <QuizApp /> */}
//       <Exam />
      
//     </>
//   );
// }

/*<h1 className='services'>SERVICES</h1>*/


//THE MAIN MODAL
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// // import Exam from '../../Quiz-app/Exam.jsx';
// import QuizApp from '../../../Test/QuizApp.jsx';
// import "../../../Test/index.scss";

// function Services() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch static backdrop modal
//       </Button>

//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <QuizApp />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary">Understood</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Services;


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exam from '../../Quiz-app/Exam.jsx';
import QuizApp from '../../../Test/QuizApp.jsx';
import "../../../Test/index.scss";

function Services() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Click to Start Quiz
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>THE SECP QUIZ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QuizApp />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Services;