import React, { useEffect, useState } from 'react';
import SquareForm from './squareform.component';
import { 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Badge,
    Progress } from 'reactstrap';
import { GrEdit } from 'react-icons/gr';
import { GrTrash } from 'react-icons/gr';
import { GiStrong } from 'react-icons/gi';

function Square(props) {
  // consts
  const [category, setCategory] = useState(props.square.square.name);
  const [booktitle, setBookTitle] = useState(props.square.book.title);
  const [author, setAuthor] = useState(props.square.book.author);
  const [percent, setPercent] = useState(props.square.book.percentcomplete);
  const [isHardmode, setHardmode] = useState(props.square.book.hardmode);
  const [isCompleted, setCompleted] = useState(props.square.book.complete);
  const [isToggled, setToggle] = useState(false);

  const toggleShowHide = () => setToggle(!isToggled);

  // hooks
  useEffect(() => {
    console.log("useEffect fired.")
  }, [booktitle, author, percent, isHardmode, isCompleted]);

  return(
    <div className="square">
      <div className="category">{category}</div>
      <br />
      <div className="title">{booktitle}</div>
      <div className="author">{author}</div>
      <div className="badges">
        { (isCompleted) ? <div className="percent"><Badge pill color="danger">Completed</Badge></div> 
          : <div className="percent">
            { (percent > 0) ? <Progress striped color="danger" value={percent}>`${percent}%`</Progress> : '' }
          </div> 
        }
        { (isHardmode) ? <div className="hardmode"><Badge pill color="danger"><GiStrong /></Badge></div> : <div className="hardmode"></div> }
      </div>

      <div className="buttons">
        <Button color="outline-secondary" size="sm" onClick={toggleShowHide}>
          <GrEdit />
        </Button>
        <Button color="outline-danger" size="sm" onClick={toggleShowHide}>
          <GrTrash />
        </Button>
      </div>

      <Modal show={isToggled}>
        <Modal.Header closeButton onClick={toggleShowHide}>
          <Modal.Title>{category}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SquareForm
            booktitle={booktitle}
            author={author}
            percent={percent}
            complete={isCompleted}
            hardmode={isHardmode}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="secondary"
            onClick={toggleShowHide}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={toggleShowHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Square;