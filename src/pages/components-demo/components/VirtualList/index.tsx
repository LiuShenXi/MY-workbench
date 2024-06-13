import React, { useState, useRef, useEffect } from 'react';
import { Avatar, message } from 'antd';
import List from 'rc-virtual-list';
import { generateData } from './listData'

interface DataItem {
  uid: number;
  name: string;
  addr: string;
}

const VirtualListDemo: React.FC = () => {
  const [dataList, setDataList] = useState<DataItem[]>([])

  useEffect(() => {
    setDataList(generateData(3000))
  }, [])

  return (
    <List 
      data={dataList}
      itemKey="uid"
      height={500}
      itemHeight={80}
    >
     {item => (
      <div>
        <span>{item.uid}</span>
        <span>{item.name}</span>
        <span>{item.addr}</span>
      </div>
     )}
    </List>
  )
};

export default VirtualListDemo;
