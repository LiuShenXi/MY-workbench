export type ProductInventory = {
  uuid: string; // 编号
  image: string; // 图片
  name: string; // 名称
  batteryType: string; // 电池型号/节数
  unit: string; // 单位
  price: number; // 价格
  quantity: number; // 数量
  specification: string; // 规格
  amount: number; // 金额
  suggestedPrice: number; // 建议价
  marketValue: number; // 市值
  remark: string; // 备注
  unitWeight: number; // 单重
  totalWeight: number; // 重量
}
