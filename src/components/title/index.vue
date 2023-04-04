<template>
  <el-card class="title-wrap">
    <div class="title-left">
      <el-menu class="title-menu" mode="horizontal" :ellipsis="false" router>
        <template v-if="props.group === 'admin'">
          <el-menu-item index="/admin/user">User Manage</el-menu-item>
          <el-menu-item index="/admin/task">Task Manage</el-menu-item>
        </template>
        <template v-if="props.group === 'normal'">
          <el-menu-item index="/normal/task">Task Manage</el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="title-right">
      <div class="title-right-name">
        <span>Welcome </span>
        <span>{{ group }}</span>
        <span>{{ userName }}</span>
      </div>
      <div class="title-right-logout">
        <el-popconfirm
          width="200"
          confirm-button-text="Yes"
          cancel-button-text="No"
          icon-color="red"
          title="Confirm logout?"
          @confirm="confirmLogout"
        >
          <template #reference>
            <el-button type="text">Logout</el-button>
          </template>
        </el-popconfirm>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
  import { getGroup, getUserName } from '@/utils/cookie';
  import { messageSuccess } from '@/utils/message';
  import { useRouter } from 'vue-router';
  import { logout } from '@/api/login';
  const router = useRouter();
  const userName = getUserName() ?? '';
  const group = getGroup() ?? '';
  const props = defineProps<{
    group?: string;
  }>();
  const confirmLogout = async () => {
    await logout();
    messageSuccess('Logout Completed');
    router.push('/login');
  };
</script>
<style lang="scss" scoped>
  .title-wrap {
    font-size: 20px;
    .title-left {
      display: flex;
      align-items: center;
      :deep(.el-menu--horizontal) {
        height: 35px;
      }
    }
    .title-right {
      display: flex;
      align-items: center;
      .title-right-name {
        margin: 0 20px;
        font-size: 14px;
        span {
          padding: 5px;
        }
        &-group {
          padding-top: 10px 0;
          font-size: 14px;
          color: #999;
        }
      }
      .title-right-logout {
        margin-right: 20px;
      }
    }
    :deep(.el-card__body) {
      padding: 5px 24px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
