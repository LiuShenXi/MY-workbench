import React, { useRef, useState, useEffect } from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Flex } from 'antd';

const componentsDemo: React.FC = () => {
  // const container = ()
  return (
    <PageContainer

    >
      <Flex

      >
        <ProCard
          title="虚拟滚动列表 demo"
          // extra="extra"
          boxShadow
          style={{ marginRight: 10, height: '50vh' }}
        >
          hello worid!
        </ProCard>
        <ProCard
          title="虚拟滚动列表 demo"
          // extra="extra"
        >
          hello worid!
        </ProCard>
        <ProCard
          title="虚拟滚动列表 demo"
          // extra="extra"
        >
          hello worid!
        </ProCard>
      </Flex>
      
    </PageContainer>
  )
}

export default componentsDemo