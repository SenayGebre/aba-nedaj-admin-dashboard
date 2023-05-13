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

  const [CompanyName, setCompanyName] = useState("");
  const [LogoURL, setLogoURL] = useState("");
 
  const { onBackBtnClickHnd, onSubmitClickHnd,} = props;

  const onFirstNameChangeHnd = (e: any) => {
    setCompanyName(e.target.value);
    };
  const onLastNameChangeHnd = (e: any) => {
    setLogoURL(e.target.value);
    };
 
  const onSubmitBtnClickHnd = (e: any) => {
  e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      CompanyName: CompanyName,
      LogoURL: LogoURL,
   
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
      <Form.Item label="Enter Comany Name">
        <Input placeholder="Enter Comany Name" value={CompanyName} onChange={onFirstNameChangeHnd} />
      </Form.Item>
      <Form.Item label="Enter the Logo">
      <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        < Button type="primary" onClick={onBackBtnClickHnd} > Back </ Button >{ ' ' }
        < Button type="primary" onClick={onSubmitBtnClickHnd} > Add Business </ Button >
      </Form.Item>
    </Form>
  )
}
export default AddUser;
