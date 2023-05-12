import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const DriverForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const[fullname,setFullname] = useState("");
  const[gender,setGender] = useState("");
  const[phone,setPhone] = useState("");
  const[email,setEmail] = useState("")

  const[list,setList] = useState([] as any);

  const handleSubmit=(e:any)=>{
    e.preventDefault();
    const data={fullname,gender,phone,email}
    setList((ls:any)=>[...ls,data])
    setFullname("")
    setPhone("")
    setEmail("")

  }
const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: 600 }}
    >
      
      <Form.Item label="fullname">
        <Input placeholder="enter fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} />
      </Form.Item>
      <Form.Item label="gender">
        <Input placeholder="enter gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
      </Form.Item>
      <Form.Item label="phone">
        <Input placeholder="enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
      </Form.Item>
      <Form.Item label="email">
        <Input placeholder="enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Item>
    {/*   <Form.Item label="region">
        <Input placeholder="enter region" />
      </Form.Item>
      <Form.Item label="city">
        <Input placeholder="enter city" />
      </Form.Item>
      <Form.Item label="Street">
        <Input placeholder="enter street" />
      </Form.Item>
      <Form.Item label="RoleId">
        <Input placeholder="enter roleId" />
      </Form.Item>
      <Form.Item label="GasStationId">
        <Input placeholder="enter gasStationId" />
      </Form.Item>
      <Form.Item label="HashPass">
        <Input placeholder="enter hashPass" />
      </Form.Item>
      <Form.Item label="Status">
        <Input placeholder="enter status" />
      </Form.Item>
      <Form.Item label="IsNew">
        <Input placeholder="is new?" />
      </Form.Item>
      <Form.Item label="Default Account">
        <Input placeholder="enter defaultAccount" />
      </Form.Item> */}
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onSubmit={handleSubmit}>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default DriverForm;
