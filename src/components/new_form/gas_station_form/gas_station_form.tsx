import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const GasStationForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

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
        <Input placeholder="enter fullname" />
      </Form.Item>
      <Form.Item label="gender">
        <Input placeholder="enter gender" />
      </Form.Item>
      <Form.Item label="phone">
        <Input placeholder="enter phone number" />
      </Form.Item>
      <Form.Item label="email">
        <Input placeholder="enter email" />
      </Form.Item>
      <Form.Item label="region">
        <Input placeholder="enter region" />
      </Form.Item>
      <Form.Item label="city">
        <Input placeholder="enter city" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default GasStationForm;
