import React, { createRef } from 'react';
import Pdf from 'react-to-pdf';

const ref = createRef();

const PDF=()=>{
        return(
            <div>
                <div ref={ref} className='post'>
                    <h5>hay this is pdf</h5>
                    <p>this is explanation</p>
                    
                </div>
                <Pdf targetRef={ref} filename="post.pdf">
                    {({toPdf})=><button onClick={toPdf}>Capture as Pdf</button>}
                </Pdf>
            </div>
        )
} 

export default PDF;
