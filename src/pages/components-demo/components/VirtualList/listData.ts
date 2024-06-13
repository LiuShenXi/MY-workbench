interface DataItem {
  uid: number;
  name: string;
  addr: string;
}

export function generateData(count: number): DataItem[] {
  const data: DataItem[] = [];
  const name = 'aaaaa';
  const addr = 'dhsajk';

  for (let i = 1; i <= count; i++) {
    data.push({
      uid: i,
      name: name,
      addr: addr,
    });
  }

  return data;
}
