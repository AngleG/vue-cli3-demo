import { CreateElement, VNode } from 'vue';
import {
  Vue,
  Component,
  Prop,
  PropSync,
} from 'vue-property-decorator';
import Expand from './expand';

export interface BaseTableData {
  // eslint-disable-next-line
  [propName: string]: any;
}

export interface BaseTableColumn {
  // eslint-disable-next-line
  [propName: string]: any;
  // eslint-disable-next-line
  render?: (h: CreateElement, params: any) => VNode | string;
}

// eslint-disable-next-line
export type TableRowOption = any;

interface ScopeOption {
  $index: number;
  row: TableRowOption;
}

const defaultTableColumnData: BaseTableColumn = {
  type: null,
  prop: null,
  label: null,
  width: null,
  fixed: null,
  align: 'left',
  renderHeader: null,
  sortable: null,
  sortMethod: null,
  sortOrders: ['ascending', 'descending', null],
  formatter: null,
  showOverflowTooltip: true,
};

@Component({
  components: {
    Expand,
  },
})
export default class BaseTable extends Vue {
  @PropSync('tableData', { type: Array, default: () => [] }) syncedTableData!: BaseTableData[];

  @Prop({ type: Array, default: () => [] }) tableColumns!: BaseTableColumn[];

  render() {
    const { tableColumns } = this.$props;
    const { syncedTableData, $attrs, $listeners } = this;
    const attributes = {
      attrs: $attrs,
      on: {
        ...$listeners,
      },
    };

    const createSlotScope = (column: BaseTableColumn) => ({
      scopedSlots: {
        default: (scope: ScopeOption) => (
          <expand
            render-fn={column.render}
            options={{
              index: scope.$index,
              row: scope.row,
            }}/>
        ),
      },
    });

    return <el-table
      data={syncedTableData}
      {...attributes}>
        {tableColumns.map((column: BaseTableColumn, index: number) => {
          const allColumns = {
            ...defaultTableColumnData,
            ...column,
          };
          const { render } = allColumns;
          const columnAttributes = { attrs: allColumns };
          const key = `${allColumns.prop}-${index}`;
          const slotScope = createSlotScope(allColumns);
          return render
            ? <el-table-column key={key} {...columnAttributes} {...slotScope}/>
            : <el-table-column key={key} {...columnAttributes}/>;
        })}
    </el-table>;
  }
}
