import React, { useState } from 'react'

import './App.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';



export default function App() {

    const [input_field, setinput_field] = useState("");
    const [list_item, setlist_item] = useState([]);

    const updateInput = (value) => {
        setinput_field(value);
        console.log(list_item)
    }


    const addItem = () => {
        if(input_field !== '' ){
          const input_field1 = {
            value : input_field
          }

          const list_item_Array = [...list_item];
          list_item_Array.push(input_field1);

            setinput_field("");
            setlist_item([...list_item_Array]);
        }
    }

    return (
        <div className="background-color">
            <h1 className="heading-1">Todo App</h1>
            <InputGroup className="mb-3">
            <FormControl
            
            placeholder="add item . . . "
            size="lg"
            value = {input_field}
            onChange = {(item) => updateInput(item.target.value)}
            aria-label="add something"
            aria-describedby="basic-addon2"
            className = "input-field-1"
            />
            <InputGroup.Append>
            <br />
            
            <Button
            className = "Add-btn"
               variant="dark"
               size="lg"
               onClick = {() => addItem()
            }
               >
               ADD 
            </Button>
            </InputGroup.Append> 
            </InputGroup>

            <h2 className="list-items-heading">List Items</h2>
            <ListGroup>
              {list_item.map((item,index) => { return(
  
            <ListGroup.Item className = "list-item" >
             {index+1}. {item.value}
            </ListGroup.Item>
  
         )})}
        </ListGroup>

        </div>
    )
}





// import React, {Component} from 'react';
  
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import ListGroup from 'react-bootstrap/ListGroup';
  
  
// class App extends Component  {
//   constructor(props) {
//     super(props);
  
//     // Setting up state
//     this.state = {
//       userInput : "",
//       list:[]
//     }
//   }
  
//   // Set a user input value
//   updateInput(value){
//     this.setState({
//       userInput: value,
//     });
//   }
  
//   // Add item if user input in not empty
//   addItem(){
//     if(this.state.userInput !== '' ){
//       const userInput = {
  
//         // Add a random id which is used to delete
//         id :  Math.random(),
  
//         // Add a user value to list
//         value : this.state.userInput
//       };
  
//       // Update list
//       const list = [...this.state.list];
//       list.push(userInput);
  
//       // reset state
//       this.setState({
//         list,
//         userInput:""
//       });
//     }
//   }
  
//   // Function to delete item from list use id to delete
//   deleteItem(key){
//     const list = [...this.state.list];
  
//     // Filter values and leave value which we need to delete
//     const updateList = list.filter(item => item.id !== key);
  
//     // Update list in state
//     this.setState({
//       list:updateList,
//     });
  
//   }
  
//   render(){
//     return(<Container>
  
//           <Row style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   fontSize: '3rem',
//                   fontWeight: 'bolder',
//                 }}
//                 >TODO LIST
//             </Row>
  
//            <hr/>
//           <Row>
//           <Col md={{ span: 5, offset: 4 }}>
  
//           <InputGroup className="mb-3">
//           <FormControl
//             placeholder="add item . . . "
//             size="lg"
//             value = {this.state.userInput}
//             onChange = {item => this.updateInput(item.target.value)}
//             aria-label="add something"
//             aria-describedby="basic-addon2"
//           />
//           <InputGroup.Append>
//             <Button
//               variant="dark"
//               size="lg"
//               onClick = {()=>this.addItem()}
//               >
//               ADD
//             </Button>
//           </InputGroup.Append>
//         </InputGroup>
  
//      </Col>
//    </Row>
//    <Row>
//      <Col md={{ span: 5, offset: 4 }}>
//         <ListGroup>
//           {/* map over and print items */}
//          {this.state.list.map(item => {return(
  
//             <ListGroup.Item variant="dark" action 
//               onClick = { () => this.deleteItem(item.id) }>
//               {item.value}
//             </ListGroup.Item>
  
//          )})}
//         </ListGroup>
//      </Col>
//    </Row>
//      </Container>
//     );
//   }
// }  
