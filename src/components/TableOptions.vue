<template>
    <div>
        <el-table
            :data="value"
            border
            size="mini"
            style="width: 100%"
            ref="tableOptions">
            <template v-for="(col,idx) in column">
                <el-table-column :label="col.label" :key="col.label + idx">
                    <template slot-scope="scope">
                      <el-checkbox v-if="col.key=='proper'" size="mini" v-model="scope.row[col.key]"
                          @change="(n)=>(scope.row[col.key] = n, onInput(scope.row))"></el-checkbox>
                        <el-input v-else size="mini" :value="scope.row[col.key] || ''"
                                  @input="(n)=>(scope.row[col.key] = n, onInput(scope.row))"></el-input>
                    </template>
                </el-table-column>
            </template>
            <el-table-column min-width="35" align="center" fixed="right" label="操作">

                <template slot-scope="scope">
                    <i class="el-icon-delete" @click="del(scope.$index)"></i>
                </template>
            </el-table-column>
        </el-table>
        <el-button type="text" icon="el-icon-plus" @click="add">添加</el-button>
    </div>
</template>

<script>
export default {
    name: 'TableOptions',
    props: {
        value: [Object, Array, String]
    },
    data() {
        return {
            column: [{label: '标题', key: 'label'}, {label: '分值', key: 'value'}, {label: '正确答案', key: 'proper'}]
        };
    },
    created() {
        if (!Array.isArray(this.value)) {
            this.$emit('input', []);
        }
    },
    mounted () {
        setTimeout(() => {
            this.$refs.tableOptions.doLayout();
        });
    },
    methods: {
        onInput(item) {
            if (item.label && item.value) {
                this.input();
            }
        },
        input() {
            this.$emit('input', this.value);
        },
        add() {
            this.value.push(this.column.reduce((initial, v) => {
                initial[v.key] = '';
                return initial;
            }, {}));
        },
        del(idx) {
            this.value.splice(idx, 1);
            this.input(this.value);
        }
    }
};
</script>

<style scoped>

</style>
