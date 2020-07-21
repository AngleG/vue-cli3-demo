import { CreateElement } from 'vue';
import { Vue, Component } from 'vue-property-decorator';
import { BaseTableData, BaseTableColumn, TableRowOption } from '../../../components/common/base-table';
import './staff.scss';

@Component
export default class Staff extends Vue {
  keyword = '';

  tableData: BaseTableData[] = [
    {
      name: '吴笑笑',
      position: '前端工程师',
      department: '产研部',
      status: '在职',
      joinDate: '2018.03.19',
    },
    {
      name: '步星星',
      position: 'BIM工程师',
      department: 'BIM',
      status: '在职',
      joinDate: '2018.03.19',
    },
  ];

  tableColumns: BaseTableColumn[] = [];

  created() {
    this.addVnode();
  }

  addVnode() {
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
        render: (h: CreateElement, params: any) => (<div>
          <el-button size="mini" onClick={this.transferHandle.bind(this, params.row)}>转岗</el-button>
          <el-button size="mini" type="danger" onClick={this.quitHandle.bind(this, params.row)}>离职</el-button>
        </div>),
      },
    ];
  }

  transferHandle(row: TableRowOption) {
    console.log(row, '---row');
  }

  quitHandle(row: TableRowOption) {
    console.log(row, '---row');
  }

  render() {
    const { tableData, tableColumns, keyword } = this.$data;
    return <div class="staff">
      <div class="staff-search">
        <el-input class="w_250" value={keyword} onInput={(val: string) => { this.keyword = val; }} placeholder="请输入姓名、职位、部门" />
        <el-button type="primary">搜索</el-button>
      </div>
      <base-table border tableData={tableData} tableColumns={tableColumns}/>
    </div>;
  }
}
