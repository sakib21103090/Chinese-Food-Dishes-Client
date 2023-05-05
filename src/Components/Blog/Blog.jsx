import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
        
        <div className='Bcc card m-4'>
           <div className='text-center m-2'>
           <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='bg-info text-center' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           </div>
      <div ref={ref}>
      <div className='bg-info m-4 rounded'>
                 <h4>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h4>
            </div>
            <div className='bg-info m-4'>
                 <h4>PropTypes.any : The prop can be of any data type. 
                           <br /> PropTypes.bool : The prop should be a Boolean.
                           <br /> PropTypes.number : The prop should be a number.
                           <br /> PropTypes.string : The prop should be a string.
                           <br /> PropTypes.func : The prop should be a function.
                           <br /> PropTypes.array : The prop should be an array.
                          <br /> If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps. </h4>
            </div>
            <div className='bg-info m-4'>
                 <h4>Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications".</h4>
            </div>
            <div className='bg-info m-4'>
                 <h4>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code</h4>
            </div>
            
        </div>
    </div>
    );
};

export default Blog;