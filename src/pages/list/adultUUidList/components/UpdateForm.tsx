import {
  ProFormText,
  ProFormTextArea,
  StepsForm,
  ProFormDigit,
  ProFormDatePicker,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import React from 'react';
import type { ProductInventory } from '../data';

export type FormValueType = Partial<ProductInventory>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<ProductInventory>;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{
              padding: '32px 40px 48px',
            }}
            destroyOnClose
            title="更新产品信息"
            open={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          name: props.values.name,
          desc: props.values.remark,
        }}
        title="基本信息"
      >
        <ProFormText
          name="name"
          label="产品名称"
          width="md"
          rules={[
            {
              required: true,
              message: '请输入产品名称！',
            },
          ]}
        />
        <ProFormTextArea
          name="remark"
          width="md"
          label="产品描述"
          placeholder="请输入产品描述"
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          price: props.values.price,
          suggestedPrice: props.values.suggestedPrice,
          marketValue: props.values.marketValue,
        }}
        title="价格信息"
      >
        <ProFormDigit
          name="price"
          label="价格"
          width="md"
          min={0}
          rules={[
            {
              required: true,
              message: '请输入产品价格！',
            },
          ]}
        />
        <ProFormDigit
          name="suggestedPrice"
          label="建议价"
          width="md"
          min={0}
        />
        <ProFormDigit
          name="marketValue"
          label="市值"
          width="md"
          min={0}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          quantity: props.values.quantity,
          unitWeight: props.values.unitWeight,
          totalWeight: props.values.totalWeight,
          specification: props.values.specification,
        }}
        title="库存与规格"
      >
        <ProFormDigit
          name="quantity"
          label="数量"
          width="md"
          min={0}
          rules={[
            {
              required: true,
              message: '请输入产品数量！',
            },
          ]}
        />
        <ProFormText
          name="specification"
          label="规格"
          width="md"
          rules={[
            {
              required: true,
              message: '请输入产品规格！',
            },
          ]}
        />
        <ProFormDigit
          name="unitWeight"
          label="单重"
          width="md"
          min={0}
        />
        <ProFormDigit
          name="totalWeight"
          label="总重量"
          width="md"
          min={0}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default UpdateForm;
