import './App.css'
import { Component1 } from './components/Component1'


// Node-> helps us to write js code in an integrated development environment ie: ide eg) vs code
// -> Andoroid phone -> pre installed application
// -> Node -> Childprocess , filesystem , operating system (os) , http-> node package manager npm -> helps us to install packages and dependencies(npm i)
// ->NPM -> node package manager X

// common js or module js
// installed -> apps -> require or impprt 
// not installed -> packages -> require or import



function App() {
 

  return (
    <>
    <Component1 name="John" age={25} /> //attributes to pass data from parent to child component
    <Component1 name="Jane" age={30} > hello world </Component1> 
    <!--here we write the data between the opening and closing tags of the component which is called children props-->
    </>
  )
}

export default App
