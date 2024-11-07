import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import LinkButton from './children/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditPost() {
  function handleSubmit(e: React.ChangeEvent<any>) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);


  }
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //       <form method="post" onSubmit={handleSubmit}>
    //         <label>
    //           <textarea
    //             name="postContent"
    //             defaultValue=""
    //             rows={20}
    //             cols={100}
    //           />
    //         </label>
    //         <hr />
    //         <button type="reset">Reset edits</button>
    //         <button type="submit">Save post</button>
    //       </form>
    //       </Col>
    //   </Row>
    // </Container>
    <Form method='post' onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='exampleForm.ContolInput1'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type='email' placeholder='name@example.com' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type='reset'>reset edits</Button>{' '}
      <Button variant="primary" type='submit'>save post</Button>{' '}
    </Form>
    
    // <form method="post" onSubmit={handleSubmit}>
    //   <label>
    //     <textarea
    //       name="postContent"
    //       defaultValue=""
    //       rows={20}
    //       cols={100}
    //     />
    //   </label>
    //   <hr />
    //   <button type="reset">Reset edits</button>
    //   <button type="submit">Save post</button>
    // </form>
  );
}
