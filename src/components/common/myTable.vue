<template>
  <el-table
    ref="myTable"
    :height="tableHeight || undefined"
    v-loading="loading"
    @row-click="rowClick"
    @select="select"
    @select-all="select"
    @current-change="rowChange"
    @selection-change="handleSelectionChange"
    @row-dblclick="dblcick"
    @sort-change="sortChange"
    :data="data"
    size="mini"
    stripe
    style="width: 100%"
    highlight-current-row
    :header-cell-style="headerStyle"
    :cell-style="cellStyle"
    :row-style="rowStyle"
  >
    <el-table-column
      v-if="selection"
      type="selection"
      :selectable="selectable"
      width="55"
    ></el-table-column>
    <el-table-column type="expand" v-if="expand">
      <template #default="{ row, $index }">
        <slot name="expand" :index="$index" :row="row"></slot>
      </template>
    </el-table-column>
    <template v-for="(item, index) in column">
      <el-table-column
        v-if="!item.slot"
        :key="index"
        :prop="item.prop"
        :width="item.width"
        :sortable="item.sortable"
        :label="item.label"
        :align="item.align || 'center'"
        :fixed="item.fixed"
      ></el-table-column>
      <el-table-column
        v-if="item.slot"
        :key="index"
        :label="item.label"
        :prop="item.prop"
        :sortable="item.sortable"
        :width="item.width"
        :fixed="item.fixed"
        :align="item.align || 'center'"
      >
        <template #default="{ row, $index }">
          <slot
            :name="item.slot"
            :index="$index"
            :row="row"
            :value="row[item.prop]"
            :prop="item.prop"
          ></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <el-pagination
    v-if="page"
    @current-change="handleCurrentChange"
    layout="total, prev, pager, next"
    v-model="page.PageIndex"
    :total="page.PageTotal"
    :page-size="page.PageSize"
  ></el-pagination>
</template>
<script lang="ts">
import { ElTable } from "element-plus";
export default {
  name: "myTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    selection: {
      type: Boolean,
    },
    selectable: {
      type: Function,
      default: () => {
        return true;
      },
    },
    column: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
    },
    expand: {
      type: Boolean,
    },
    page: {
      required: true,
      type: [Object, Boolean],
      default: () => {
        return {
          PageIndex: 1,
          PageTotal: 0,
          PageSize: 20,
        };
      },
    },
    rowStyle: {
      type: [Function, Object],
      default: () => {
        return {};
      },
    },
    cellStyle: {
      type: [Function, Object],
      default: () => {
        return {};
      },
    },
    headerStyle: {
      type: [Function, Object],
      default: () => {
        return {
          backgroundColor: "rgb(221, 221, 221)",
          color: "black",
        };
      },
    },
    index: {
      type: Boolean,
      default: false,
    },
    check: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rowClick: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    tableHeight: "";
  },
  mounted() {
    this.setTableHeight();
  },
  methods: {
    observeDom() {
      const config = { attributes: true, childList: true, characterData: true };
      const callback = () => {
        this.setTableHeight();
      };
      const observer = new MutationObserver(callback);
    },
    setTableHeight() {
      this.$nextTick(() => {
        this.tableHeight = window.screen.height * 0.75 + "px";
        this.observeDom();
      });
    },
    handleCurrentChange(val: number) {
      this.$emit("page", val);
    },
    select(selection: object[], row: object) {
      this.$emit("select", selection, row);
    },
    sortChange(row: object) {
      this.$emit("sortChange", row);
    },
    clear() {
      (this.$refs["myTable"] as any).clearSelection();
    },
    toggle() {
      (this.$refs["myTable"] as any).toggleAllSelection();
    },
    rowChange(selection: object[], row: object) {
      this.$emit("rowChange", selection, row);
    },
    handleSelectionChange(selection: object[]) {
      this.$emit("handleSelectionChange", selection);
    },
    dblcick(row: any) {
      this.$emit("dbClickFn", row);
    },
  },
};
</script>
<style scoped>
#table_page .el-table {
  position: relative;
  margin-bottom: 33px;
}

.el-table {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#table_page .el-pagination {
  float: right;
  position: fixed;
  bottom: 0;
  z-index: 1;
  right: 0;
  background: #fff;
  text-align: right;
  border-top: 1px solid #eee;
  width: 100%;
}
</style>
