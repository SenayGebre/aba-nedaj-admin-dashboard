import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";

import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';


type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};


const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const AddUser = (props: Props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd, } = props;

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
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };

  type LayoutType = Parameters<typeof Form>[0]['layout'];
  type props = Parameters<typeof Form>[0]['layout'];
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <Form>
      <Form.Item label="First Name">
        <Input placeholder="Enter First Name" value={firstName} onChange={onFirstNameChangeHnd} />
      </Form.Item>
      <Form.Item label="Last Name">
        <Input placeholder="Enter Last Name" value={lastName} onChange={onLastNameChangeHnd} />
      </Form.Item>
      <Form.Item label="Email Address">
        <Input placeholder="Enter Email Address" value={email} onChange={onEmailChangeHnd} />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={onBackBtnClickHnd} >Back</Button>
        <Button type="primary" onClick={onSubmitBtnClickHnd} >Add User</Button>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}
export default AddUser;
