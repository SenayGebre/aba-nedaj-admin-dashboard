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
  
  const [CompanyName, setCompanyName] = useState(data.CompanyName);
  const [LogoURL, setLogoURL] = useState(data.LogoURL);


  const onFirstNameChangeHnd = (e: any) => {
    setCompanyName(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      CompanyName: CompanyName,
      LogoURL: LogoURL,
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
        <Form.Item label="Enter Comany Name">
          <Input value={CompanyName} onChange={onFirstNameChangeHnd} />
      < Button type="primary" onClick={onBackBtnClickHnd} > Back </ Button >{ ' ' }
      < Button type="primary" value="Update Employee" onClick={onSubmitBtnClickHnd} > Update Employee </ Button >
        </Form.Item>
      </Form>
    )
  }
export default EditUser;