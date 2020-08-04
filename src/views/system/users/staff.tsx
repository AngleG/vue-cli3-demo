import { CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import { BaseTableData, BaseTableColumn, TableRowOption } from '@/components/common/base-table';
import './staff.scss';
import webApi from '../../../lib/api/api';

@Component
export default class Staff extends Vue {
  isLoading = false;

  keyword = '';

  tableData: BaseTableData[] = [];

  tableColumns: BaseTableColumn[] = [];

  testHandle() {
    console.log('触发一次');
  }

  openDialogHandle(id: number) {
    console.log(id, '---id');
  }

  async getStaffList() {
    this.isLoading = true;
    const res = await webApi.getStaffList();
    if (res.flags === 'success') {
      const { results } = res.data;
      if (results) {
        this.tableData = results || [];
      }
    } else {
      this.$toast(res.message, 'error');
    }
    this.isLoading = false;
  }

  created() {
    this.tableColumns = [
      {
        label: '序号',
        type: 'index',
      },
      {
        label: '姓名',
        prop: 'name',
      },
      {
        label: '职位',
        prop: 'position',
      },
      {
        label: '部门',
        prop: 'department',
      },
      {
        label: '状态',
        prop: 'status',
        formatter: (row: TableRowOption) => (row.status ? '在职' : '离职'),
      },
      {
        label: '入职日期',
        prop: 'joinDate',
      },
      {
        label: '操作',
        showOverflowTooltip: false,
        width: 145,
        // eslint-disable-next-line
        render: (h: CreateElement, params: any) => {
          const { id } = params.row;
          return <div>
              <el-button size="mini" onClick={this.openDialogHandle.bind(this, id)}>转岗</el-button>
              <el-button size="mini" type="danger" onClick={this.openDialogHandle.bind(this, id)}>离职</el-button>
            </div>;
        },
      },
    ];
    this.getStaffList();
  }

  render() {
    const { isLoading, tableData, tableColumns, keyword } = this.$data;
    // const directives = [{ name: 'loading', value: isLoading }];
    const directives = [{ name: 'preventRepeatClick', value: 1000 }];
    return <div class="staff">
      <div class="staff-search">
        <el-input class="w_250" value={keyword} onInput={(val: string) => { this.keyword = val; }} placeholder="请输入姓名、职位、部门" />
        <el-button {...{ directives }} type="primary" onClick={this.testHandle}>搜索</el-button>
      </div>
      <base-table {...[{ name: 'loading', value: isLoading }]} border tableData={tableData} tableColumns={tableColumns}/>
    </div>;
  }
}
