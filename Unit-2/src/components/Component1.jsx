import React from 'react'

export const Component1 = (props) => {
  return (
    <div>{props.name}, {props.age}</div>
  )
}

// props = {
//     name :"John",
//     age : 25,
//     Children : "Hello world"
// props.children = "Hello world" //children props is a special prop which is used to pass data from parent to child component
// }