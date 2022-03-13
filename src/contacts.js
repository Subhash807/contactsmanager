
import styles from "./contacts.module.css";
import { Typography, Input, Table } from "antd";
import { Button } from "antd";
import React, { useState } from "react";

const { Title, Link, Text } = Typography;

function Contacts() {
  const dataSource = [
    {
      key: "1",
      name: "virat kohli",
      phno: 9191919191,
      email: "virat@gmail.com",
    },
    {
      key: "2",
      name: "dhoni",
      phno: 81818181818,
      email: "dhoni@gmail.com",
    },
  ];
  const [list, setList] = useState(dataSource);
  const [Contact, setcontact] = useState({ name: "", phno: "", email: "" });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ph No",
      dataIndex: "phno",
      key: "phno",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  const updateContact = (label, value) => {
    setcontact({ ...Contact, [label]: value,key:list.length+1 });
  };
  const addContact = () => {
    
    setList([...list, Contact]);
  };
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Title level={1}>Add Contacts</Title>

        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <Input
            placeholder="name"
            onChange={(e) => {
              updateContact("name", e.target.value);
            }}
          />
        </div>
        <div className={styles.phno}>
          <label htmlFor="phno">Ph No</label>
          <Input
            placeholder="phno"
            onChange={(e) => {
              updateContact("phno", e.target.value);
            }}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <Input
            placeholder="email"
            onChange={(e) => {
              updateContact("email", e.target.value);
            }}
          />
        </div>
        <Button type="primary" onClick={addContact}>
          Save
        </Button>
      </div>
      <div className={styles.table}>
        <Title level={2}>My Contacts</Title>
        <Table dataSource={list} columns={columns} />
      </div>
    </div>
  );
}

export default Contacts;
