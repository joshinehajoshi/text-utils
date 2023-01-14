import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function TextForm(props) {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        console.log("nn")
        setText(e.target.value)
    }

    const UpperCaseHandler = () => {
        const text1 = text.toUpperCase();
       setText(text1)
    }

  return (
    <Container>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
    <label htmlFor="myBox" className="form-label">Example Textarea</label>
    <textarea className='form-control' value={text} id="myBox" rows="10" onChange={handleChange} ></textarea>
    </div>
    <Button onClick={UpperCaseHandler}>Convert to Upper Case</Button>

    <div className='mb-3'>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        
    </div>

    </Container>
  )
}

export default TextForm