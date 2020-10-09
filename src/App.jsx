// 1) Import React
import React , {useState} from 'react';
import Greeting from './components/Greeting';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


// 2) Define our component function
const App = () => {
 
  
 // state variable called name, and it's setter, setName
  const [name,setName] = useState({});

  //function to take the value of the form control and transfer it put into the input
  const handleChange = (event) => {
    setName({
      item: event.target.value
    }) 
  };

  return (
    <>
   <Form>
     {console.log(name)}
       <Form.Group> 
            <Form.Label size="lg"> 
              Lab 01 - Introducing React and Components
            </Form.Label>
            <Form.Control
             name="item"
             placeholder = "Type your name here: "
             //call the function 'handleChange' when the value changes
             onChange={handleChange}
             />
                 
       </Form.Group>
       
   </Form>  
     <Greeting  name={name}/></> 
 
  );

}; 
     
  


// 3) Export our component
export default App;