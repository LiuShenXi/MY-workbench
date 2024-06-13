import React, { useRef, useState, useEffect } from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Flex } from 'antd';
import VirtualList from './components/VirtualList'

const componentsDemo: React.FC = () => {
  // const container = ()
  return (
    <PageContainer

    >
      <Flex

      >
        <ProCard
          title="虚拟滚动列表 demo   (使用 rc-virtual-list 库)"
          boxShadow
          style={{ marginRight: 10, height: '60vh' }}
        >
          <VirtualList />
        </ProCard>
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
          boxShadow
          style={{ marginRight: 10, height: '50vh' }}
          // extra="extra"
        >
          hello worid!
        </ProCard>
      </Flex>
      
    </PageContainer>
  )
}

export default componentsDemo