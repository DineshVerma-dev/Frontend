// import React, { useReducer } from 'react'

// function boxReducer(state, action) {
//     switch (action.type) {
//         case 'MOVE' :
//             return {
//                 ...state,
//                 left: action.payload.left,
//                 top: action.payload.top,
//             }

//     }
// }
// function Drag() {
//     const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 })
//     let isDragging = false
//     let initialX = 0;
//     let initialY = 0;
//     let initialZ = 0;

//     const handleMouseDown = (e) => {
//         let isDragging = true;
//         initialX = e.ClientX - boxState.left;
//         initialY = e.ClientY - boxState.top;
//     }
//     const handleMouseUP = (e) => {
//         isDragging = false;


//     }
//     const handleMouseMove = (e) => {
//         if (isDragging) {
//             const left = e.ClientX - initialX;
//             const top = e.ClientY - initialY;
//             dispatch({ type: "MOVE", payload: { left, top } })
//         }
//     }
//     return (
//         <div>
//             <div onMouseDown={handleMouseDown}
//                 onMouseUp={handleMouseUP}
//                 onMouseMove={handleMouseMove}
//                 style={{ left: boxState.left, top: boxState.top }}
//             >
//                 Drag
//             </div>
//         </div>
//     )
// }

// export default Drag
import React, { useReducer, useRef } from 'react';

function boxReducer(state, action) {
  switch (action.type) {
    case 'MOVE':
      return {
        ...state,
        left: action.payload.left,
        top: action.payload.top,
      };
    default:
      return state;
  }
}

function Drag() {
  const [boxState, dispatch] = useReducer(boxReducer, { left: 0, top: 0 });
  const isDragging = useRef(false);
  const initialX = useRef(0);
  const initialY = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    initialX.current = e.clientX - boxState.left;
    initialY.current = e.clientY - boxState.top;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const left = e.clientX - initialX.current;
      const top = e.clientY - initialY.current;
      dispatch({ type: 'MOVE', payload: { left, top } });
    }
  };

  return (
    <div>
      <div
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          left: boxState.left,
          top: boxState.top,
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          cursor: 'move',
        }}
      >
        Drag
      </div>
    </div>
  );
}

export default Drag;
