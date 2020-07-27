import { CreateElement, VNode } from 'vue';

type TableColumnType = 'default' | 'index' | 'selection' | 'expand';
type TableColumnFixedType = 'left' | 'right';
type TableColumnAlign = 'left' | 'center' | 'right';
type TableColumnTooltip = true | false;

export interface TableColumn<T, U> {
  type?: TableColumnType;
  label?: string;
  prop?: keyof U;
  width?: T;
  align?: TableColumnAlign;
  fixed?: TableColumnFixedType;
  formatter?: (row: U, column: TableColumn<T, U>) => string;
  selectable?: (row: U, index: number) => boolean;
  showOverflowTooltip?: TableColumnTooltip;
  renderHeader?: (h: CreateElement, row: U) => VNode | string;
}

interface Params {
  id: number;
  name: string;
  sex: string;
  age: number;
}

const tableColumns: TableColumn<number, Params>[] = [
  { type: 'index', label: '序号', width: 50 },
  { label: '姓名', prop: 'name', align: 'center' },
  { label: '性别', prop: 'sex', align: 'center' },
  { label: '年龄', prop: 'age', align: 'center' },
];

const tableData: Params[] = [
  {
    id: 1, name: '吴笑笑', age: 26, sex: '女',
  },
  {
    id: 2, name: '步星星', age: 27, sex: '男',
  },
];
