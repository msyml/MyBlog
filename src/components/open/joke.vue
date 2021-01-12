<template>
  <myTable
    :data="data"
    ref="myTable"
    :loading="loading"
    :headerStyle="{ background: '#fff' }"
    :column="column"
    :page="page"
    @page="handleCurrnetChange"
  ></myTable>
</template>

<script lang="ts">
import { getJoke } from "../../api/api";
import myTable from "../common/myTable.vue";
import { Page } from "../common/interface";
export default {
  name: "joke",
  props: {
    msg: String,
  },
  components: {
    myTable,
  },
  data() {
    return {
      data: [],
      loading: false,
      page: {
        PageIndex: 0,
        PageTotal: 0,
        PageSize: 20,
      },
      column: [
        {
          label: "名称",
          prop: "name",
          align: "center",
        },
        {
          label: "内容",
          prop: "text",
          align: "center",
        },
        {
          label: "热评",
          prop: "top_comments_content",
          align: "center",
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const para = {
        type: "all",
        count: 10,
      };
      getJoke(para)
        .then((res) => {
            console.log(res)
          this.data = res;
        })
        .catch((err) => {});
    },
    handleCurrnetChange(val: number) {
      this.page.PageIndex = val;
      this.getList();
    },
  },
};
</script>
