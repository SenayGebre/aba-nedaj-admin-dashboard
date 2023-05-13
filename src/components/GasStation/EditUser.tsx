import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";


type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditUser = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  type LayoutType = Parameters<typeof Form>[0]['layout'];
  type props = Parameters<typeof Form>[0]['layout'];
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
  
return (
      <Form onFinish={onSubmitBtnClickHnd}>
        <Form.Item label="First Name">
          <Input value={firstName} onChange={onFirstNameChangeHnd} />
        </Form.Item>
        <Form.Item label="Last Name">
          <Input  value={lastName} onChange={onLastNameChangeHnd} />
        </Form.Item>
        <Form.Item label="Email Address">
          <Input value={email} onChange={onEmailChangeHnd} />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary" onClick={onBackBtnClickHnd} >Back</Button>
          <Button type="primary" htmlType="submit" value="Add User">
          Submit
        </Button>
        </Form.Item>
      </Form>
    )
  }
export default EditUser;