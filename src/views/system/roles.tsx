import { CreateElement, VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import { TableColumn } from '../../components/common/T-table';

interface ColumnOption {
  id: number;
  name: string;
  description: string;
  memberNumber: number;
  status: number;
  render?: (h: CreateElement, params: ColumnOption) => VNode | string;
}

@Component
export default class Roles extends Vue {
  tableData: ColumnOption[] = [
    { id: 1, name: 'admin', description: '管理员拥有最高权限', memberNumber: 6, status: 10 },
    { id: 1, name: '技术总监', description: '技术负责人', memberNumber: 6, status: 10 },
    { id: 1, name: '开发工程师', description: '', memberNumber: 4, status: 10 },
    { id: 1, name: '产品总监', description: '', memberNumber: 1, status: 10 },
    { id: 1, name: '产品经理', description: '', memberNumber: 1, status: 10 },
    { id: 1, name: 'UI设计师', description: '', memberNumber: 1, status: 10 },
    { id: 1, name: 'PD', description: '', memberNumber: 1, status: 10 },
    { id: 1, name: 'SPM', description: '', memberNumber: 4, status: 10 },
    { id: 1, name: 'PM', description: '', memberNumber: 3, status: 10 },
  ];

  tableColumns: TableColumn<number, ColumnOption>[] = [
    { type: 'index', label: '序号', width: 50, align: 'center' },
    { label: '角色名称', prop: 'name', showOverflowTooltip: true },
    { label: '角色描述', prop: 'description', showOverflowTooltip: true },
    { label: '成员数量', prop: 'memberNumber', showOverflowTooltip: true },
    { label: '角色状态', prop: 'status', showOverflowTooltip: true },
    {
      label: '操作',
      renderHeader: (h: CreateElement, row: ColumnOption) => (<div>
        <el-button>按钮</el-button>
      </div>),
    },
  ];

  render() {
    const { tableData, tableColumns } = this.$data;
    return <div>
      <base-table border tableData={tableData} tableColumns={tableColumns}/>
    </div>;
  }
}
