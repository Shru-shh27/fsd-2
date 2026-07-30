//lifecycle of raect component
1.Mounting
2.Updating
3.Unmounting

// in class components -> components did mount , component will mount , componet did update , component will update , component will unmount , component did unmount

// funtional components =>
1.Mounting => runs only once when the components is first rendered
2.Updating => runs whenever the specified state or prop chnages
3.Unmounting => when the component is removed , when the component is
removed react executes the cleanup function returened by useEffect

useEffect 
=> to deal with the sideeffects;
=>sideeffects => api calling , pushing your information in database ,  retriving the information from harddisk,
set Interval(), setTimeout(); {all inside sideffect}

3 varitions of useEffect:
-- without any dependency
--with dependency array
--with dependency state

export , export default