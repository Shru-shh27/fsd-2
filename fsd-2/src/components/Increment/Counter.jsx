import React from "react";

export const Counter = () => {
    return (
        <div>
            <h1 style={{
                backgroundColor : "#c43464",
                padding : "15px",
                
            }
          }  > Counter </h1>
          <h3 style = {{color : count < 0 ? "red" : "green"}}>{count}</h3>

          <button style={{width : "50px"}} onClick={() => setCount(count+1)}>+</button>
          


        </div>
    )
}