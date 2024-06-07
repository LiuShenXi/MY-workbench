import React, { useState, useRef, useEffect } from 'react';
import { IListProps } from './IListProps';

const VirtualList: React.FC<IListProps> = ({ itemCount, itemHeight, renderItem }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const listRef = useRef<HTMLDivElement>(null);

  const calculateVisibleItems = (): number[] => {
    if (listRef.current) {
      const scrollTop = listRef.current.scrollTop;
      const clientHeight = listRef.current.clientHeight;
      const startIndex = Math.floor(scrollTop / itemHeight);
      const endIndex = Math.min(itemCount - 1, startIndex + Math.ceil(clientHeight / itemHeight));
      return Array.from({ length: endIndex - startIndex + 1 }, (_, i) => startIndex + i);
    }
    return [];
  };

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setVisibleItems(calculateVisibleItems());
    });
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.addEventListener('scroll', handleScroll);
      handleScroll(); // 初始化可视项
    }
    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [itemCount, itemHeight]);

  return (
    <div ref={listRef} style={{ overflowY: 'auto', height: '100%' }}>
      <div style={{ height: itemCount * itemHeight, position: 'relative' }}>
        {visibleItems.map(index => (
          <div key={index} style={{ position: 'absolute', top: index * itemHeight, height: itemHeight }}>
            {renderItem(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
