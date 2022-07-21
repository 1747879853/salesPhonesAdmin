<template>
  <div class="st-table">
    <el-table :data="tableData" border style="width: 100%">

      <el-table-column prop="level" label="等级" width="120">
        <template slot-scope="scope">
          <input v-show="scope.row.iseditor" v-model="scope.row.level" type="text">
          <span v-show="!scope.row.iseditor">{{ scope.row.level }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="touchTheOuterScreen" label="触摸外屏">
        <template slot-scope="scope">
          <input v-show="scope.row.iseditor" v-model="scope.row.touchTheOuterScreen" type="text">
          <span v-show="!scope.row.iseditor">{{ scope.row.touchTheOuterScreen }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="borderBackPanel" label="边框背板">
        <template slot-scope="scope">
          <input v-show="scope.row.iseditor" v-model="scope.row.borderBackPanel" type="text">
          <span v-show="!scope.row.iseditor">{{ scope.row.borderBackPanel }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="innerScreenShow" label="内屏显示">
        <template slot-scope="scope">
          <input v-show="scope.row.iseditor" v-model="scope.row.innerScreenShow" type="text">
          <span v-show="!scope.row.iseditor">{{ scope.row.innerScreenShow }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="warning" @click="edit(scope.row, scope)">编辑</el-button>
          <el-button type="danger" @click="save(scope.row)">保存</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          level: '高保充新',
          touchTheOuterScreen: '灯光照射完美无瑕疵，在保330天以上',
          borderBackPanel: '灯光照射完美无瑕疵',
          innerScreenShow: '无背光/无老化',
          iseditor: false
        },
        {
          level: '靓机',
          touchTheOuterScreen: '少量细微划痕或完美',
          borderBackPanel: '壳轻微使用痕迹无磕碰或掉漆',
          innerScreenShow: '无背光/无老化',
          iseditor: false
        }, {
          level: '小花',
          touchTheOuterScreen: '屏幕有轻微划痕或完美',
          borderBackPanel: '两处以内轻微小磕碰或小掉漆',
          innerScreenShow: '无背光/无老化',
          iseditor: false
        }, {
          level: '大花',
          touchTheOuterScreen: '硬划痕长度小于20mm,超过算外爆',
          borderBackPanel: '壳花，机身无弯曲/缺失',
          innerScreenShow: '无背光/无老化',
          iseditor: false
        }, {
          level: '外爆',
          touchTheOuterScreen: '小碎裂/缺角/硬划痕/后压屏',
          borderBackPanel: '壳靓，机身无弯曲/缺失',
          innerScreenShow: '无背光/无老化',
          iseditor: false
        }, {
          level: '内爆',
          touchTheOuterScreen: '外屏全碎裂/可测试功能是否正常',
          borderBackPanel: '壳靓，机身无弯曲',
          innerScreenShow: '假屏/压伤/漏液/掉线',
          iseditor: false
        }

      ]
    }
  },
  methods: {
    edit(row, index) {
      row.iseditor = true
    },
    save(row, index) {
      row.iseditor = false
    }
  }
}
</script>
<style lang="scss" scoped>
.st-table {
  padding: 10px;
}
</style>
