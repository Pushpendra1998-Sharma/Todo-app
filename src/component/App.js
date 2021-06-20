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





