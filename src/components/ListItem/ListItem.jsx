import React, {useState} from 'react';
import { Button } from 'react-bootstrap';


const ListItem = (props) => {

    const handleClick = props.onClick;
    const id = props.id;
    const title = props.title;
    const userId = props.userId;

    const [state, setState] = useState(0);

    return (
        <tr data-testid="listitemrow" className="ListItem" >
          <td data-testid="listitemcolone" id="number">{props.id}</td>
          <td data-testid="listitemcoltwo" id="txt">{props.title}</td>
          <td data-testid="listitemcolbtn"><Button data-testid="calldetailbtn" className="btn btn-primary" onClick={() => handleClick(id, title, userId)} >More</Button></td>
        </tr>
      );
    }
    

export default ListItem;