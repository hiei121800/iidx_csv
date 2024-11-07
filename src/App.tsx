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
  }
  // ボタン押下時に発火してログを出力する。
  function wave(text: string) {
    console.log(text);
  }
  // Reactでデフォで用意されている、値を変数に入れるためのuseState関数。引数に値を入れるとそれが初期値になる。
  const [value, setValue] = useState("");
  // テキストエリアを編集したときに呼び出される。
  // setValueで、画面の値に入力された値を、「value」変数に入れる。
  function onChange(event: React.ChangeEvent<any>) {
    setValue(event.target.value);
  }
  return (
    <Container>
      <Form method='post' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>CSV入力</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={value}
            onChange={onChange} />
        </Form.Group>
        {/* // リセットボタンについてはあとで実装予定。 */}
        <Button as="input" type="reset" value="Reset" />
        <Button variant="primary" type='submit' onClick={() => wave(value)}>CSV取り込み</Button>{' '}
      </Form>
      {value}
    </Container>
  );
}
