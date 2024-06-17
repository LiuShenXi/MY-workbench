import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  ModalForm,
  PageContainer,
  ProDescriptions,
  ProFormText,
  ProFormTextArea,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import UpdateForm from './components/UpdateForm'; // 需要定义 UpdateForm 组件
import { addProduct, removeProduct, updateProduct, fetchProducts } from './service'; // 需要定义相应的服务方法
import { ProductInventory } from './data'

/**
 * 添加产品
 *
 * @param fields
 */
const handleAdd = async (fields: ProductInventory) => {
  const hide = message.loading('正在添加');

  try {
    await addProduct({ ...fields });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};

/**
 * 更新产品
 *
 * @param fields
 */
const handleUpdate = async (fields: Partial<ProductInventory>, currentRow?: ProductInventory) => {
  const hide = message.loading('正在配置');

  try {
    await updateProduct({ ...currentRow, ...fields });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};

/**
 * 删除产品
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: ProductInventory[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeProduct({
      key: selectedRows.map((row) => row.uuid),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const ProductTable: React.FC = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<ProductInventory>();
  const [selectedRowsState, setSelectedRows] = useState<ProductInventory[]>([]);

  const columns: ProColumns<ProductInventory>[] = [
    {
      title: '编号',
      dataIndex: 'uuid',
      tip: '唯一的编号',
    },
    {
      title: '图片',
      dataIndex: 'image',
      render: (dom, entity) => <img src={entity.image} alt={entity.name} style={{ width: 50, height: 50 }} />,
    },
    {
      title: '名称',
      dataIndex: 'name',
      render: (dom, entity) => (
        <a
          onClick={() => {
            setCurrentRow(entity);
            setShowDetail(true);
          }}
        >
          {dom}
        </a>
      ),
    },
    {
      title: '电池型号/节数',
      dataIndex: 'batteryType',
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
    {
      title: '价格',
      dataIndex: 'price',
      valueType: 'money',
    },
    {
      title: '数量',
      dataIndex: 'quantity',
    },
    {
      title: '规格',
      dataIndex: 'specification',
    },
    {
      title: '金额',
      dataIndex: 'amount',
      valueType: 'money',
    },
    {
      title: '建议价',
      dataIndex: 'suggestedPrice',
      valueType: 'money',
    },
    {
      title: '市值',
      dataIndex: 'marketValue',
      valueType: 'money',
    },
    {
      title: '备注',
      dataIndex: 'remark',
    },
    {
      title: '单重',
      dataIndex: 'unitWeight',
    },
    {
      title: '重量',
      dataIndex: 'totalWeight',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            handleUpdateModalVisible(true);
            setCurrentRow(record);
          }}
        >
          配置
        </a>,
        <a key="subscribeAlert" href="https://procomponents.ant.design/">
          订阅警报
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<ProductInventory>
        headerTitle="产品库存表"
        actionRef={actionRef}
        rowKey="uuid"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={fetchProducts}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                总金额 {selectedRowsState.reduce((pre, item) => pre + item.amount, 0)} 元
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}
      <ModalForm
        title="新建产品"
        width="400px"
        open={createModalVisible}
        onVisibleChange={handleModalVisible}
        onFinish={async (value) => {
          const success = await handleAdd(value as ProductInventory);
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
      >
        <ProFormText
          rules={[
            {
              required: true,
              message: '产品名称为必填项',
            },
          ]}
          width="md"
          name="name"
        />
        <ProFormTextArea width="md" name="desc" />
      </ModalForm>
      <UpdateForm
        onSubmit={async (value) => {
          const success = await handleUpdate(value, currentRow);

          if (success) {
            handleUpdateModalVisible(false);
            setCurrentRow(undefined);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalVisible(false);
          setCurrentRow(undefined);
        }}
        updateModalVisible={updateModalVisible}
        values={currentRow || {}}
      />
      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<ProductInventory>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<ProductInventory>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default ProductTable;
