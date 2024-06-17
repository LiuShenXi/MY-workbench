// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import { ProductInventory } from './data';

/** 获取产品列表 GET /api/products */
export async function fetchProducts(
  params: {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: ProductInventory[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  }>('/api/products', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新产品 PUT /api/products */
export async function updateProduct(data: Partial<ProductInventory>, options?: { [key: string]: any }) {
  return request<ProductInventory>('/api/products', {
    data,
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建产品 POST /api/products */
export async function addProduct(data: ProductInventory, options?: { [key: string]: any }) {
  return request<ProductInventory>('/api/products', {
    data,
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除产品 DELETE /api/products */
export async function removeProduct(data: { key: string[] }, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/products', {
    data,
    method: 'DELETE',
    ...(options || {}),
  });
}
