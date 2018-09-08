import React from 'react';



const FormErrorMessage = ({content, type}) => (
    <span
       style={{ color: type === 'error' ? "#9f3A38" : "#6597a7" }} 
    >{content}</span>

    
    
);

export default FormErrorMessage;