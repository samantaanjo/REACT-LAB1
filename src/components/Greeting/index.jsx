// 1) Import React
import React from 'react';

// create the styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';


const Greeting = ({name}) => {
   return(

    <Jumbotron>
    
     <h1> Hi, <p> {name.item} </p> React is not easy as you make it sound. But it's enjoyable </h1>
    
    </Jumbotron>


  );

};

   

export default Greeting;