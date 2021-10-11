<template>
  <el-container>
    <el-header height="60px">
      <div class="header">
        
        <div class="demo-type">
          <el-avatar :size="50" src="./c.jpg" @error="errorHandler">
            <img src="./b.gif" />
          </el-avatar>
         </div>

        <div class="nav-center">
          <ul>
            <li v-for="(list, index) in headerList" :key="list.id">
              <router-link :to='{name:list.name}'>
            
                {{ list.title }}
             </router-link>
            </li>
          </ul>
        </div>

        <div class="nav-right">
           <el-button size='mini'  type="primary" plain>登陆</el-button>
          &nbsp;|&nbsp;
           <el-button size='mini'  type="primary" plain>注册</el-button>
        </div>
      </div>
    </el-header>

    <el-main>
    <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "LuffyHeader",
  data() {
    return {
      headerList: [
        { id: "1", name: "Home", title: "首页" },
        { id: "2", name: "Course", title: "免费课程" },
        { id: "3", name: "LightCourse", title: "轻课" },
        { id: "4", name: "Micro", title: "学位课程" },
      ],
      isShow: false,
    };
  },
  methods:{
 errorHandler() {
        return true
      }
  }
  
};
</script>

<style scoped>
.el-container {

}
.nav-center{
  height: 100%;
  
}
.nav-center ul li a.is-active {
   color: #4a4a4a;
    border-bottom: 2px solid #ffc210;
}

.demo-type {
 line-height: 100%;
}
.ava {
  position: absolute;
  z-index: 2;
}
.nav-left {
  z-index: 1;
}
.header {
display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;


}
.el-header {
  margin-top: 0px;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
