import React from 'react';
import { Hourglass } from 'react-loader-spinner';

const ActivityLoader = ({width, inline, colors}) =>{
  


    const size = width || 20;
    
      return (
        <>
        {!inline && <div className="col-md-12 text-center" style={{marginTop:"10px"}}>
        <Hourglass
                colors={colors || ["#3f6ad8", "#d92550"]}
                ariaLabel="Please wait..."
                height={size}
                width={size}/>
        </div>}
        {inline && <span>
          <Hourglass
                colors={colors || ["#3f6ad8", "#d92550"]}
                height={size}
                width={size}/>
          </span>}
        </>

      );
    
 
}

export default ActivityLoader