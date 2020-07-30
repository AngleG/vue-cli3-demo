import { CreateElement, VNode } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import { TableColumn } from '@/components/common/T-table';
import webApi from '../../lib/api/api';

interface ColumnOption {
  id: number;
  name: string;
  description: string;
  members: number;
  status: number;
  render?: (h: CreateElement, params: ColumnOption) => VNode | string;
}

@Component
export default class Roles extends Vue {
  isLoading = false;

  tableData: ColumnOption[] = [];

  tableColumns: TableColumn<number, ColumnOption>[] = [
    { type: 'index', label: '序号', width: 50, align: 'center' },
    { label: '角色名称', prop: 'name', showOverflowTooltip: true },
    { label: '角色描述', prop: 'description', showOverflowTooltip: true },
    { label: '成员数量', prop: 'members', showOverflowTooltip: true },
    { label: '角色状态', prop: 'status', showOverflowTooltip: true },
    { label: '操作' },
  ];

  async getRoles() {
    this.isLoading = true;
    const res = await webApi.getRoles();
    if (res.flags === 'success') {
      const { data } = res;
      if (data) {
        const { results } = data;
        this.tableData = results || [];
      }
    } else {
      this.$toast(res.message, 'error');
    }
    this.isLoading = false;
  }

  created() {
    this.getRoles();
  }

  render() {
    const { tableData, tableColumns, isLoading } = this.$data;
    const directives = [{ name: 'loading', value: isLoading }];
    return <div>
      <base-table {...{ directives }} border tableData={tableData} tableColumns={tableColumns}/>
    </div>;
  }
}
