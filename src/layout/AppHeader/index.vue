<template>
  <div class='header-container'>
    <span class='logo'>
      <el-icon><Eleme /></el-icon>
      积云编程
    </span>
    <!--    左侧菜单伸缩-->
    <div class='icon-button'>
      <el-icon>
        <Fold />
      </el-icon>
    </div>
    <!--    刷新-->
    <el-tooltip
      content='刷新'
      placement='bottom'
    >
      <el-icon class='box-item' @click='refresh'>
        <Refresh />
      </el-icon>
    </el-tooltip>
    <div>
      <!--      全屏-->
      <div class='right-container'>
        <el-tooltip
          :content='screenfullTltle'
          placement='bottom'
        >
          <el-icon class='box-item' @click='changeFullScreen'>
            <FullScreen v-if='isFullscreen' />
            <Aim v-else />
          </el-icon>
        </el-tooltip>
        <!--        下拉-->
        <el-dropdown trigger='click' @command='handleCommand'>
        <span class='el-dropdown-link'>
          <el-avatar :size='30'></el-avatar>
          <span class='username'>admin</span>
          <el-icon><ArrowDown /></el-icon>
        </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command='editPwd'>修改密码</el-dropdown-item>
              <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>

  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
.header-container {
  color: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 64px;

  .logo {
    width: 250px;
    display: flex;
    align-items: center;
    font-weight: 100;
    height: 100%;
    justify-content: center;
    font-size: 20px;

    .el-icon {
      color: #fff;
      margin-right: 5px;
    }
  }

  .el-dropdown {
    cursor: pointer;
  }

  .icon-button, .box-item {
    color: #fff;
    height: 100%;
    width: 42px;
    font-size: 20px;
    transition: all 0.5s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .right-container {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-dropdown {
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 15px;

        .username {
          margin: 0 10px;
        }
      }
    }
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-start;
}
</style>
