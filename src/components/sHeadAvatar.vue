<template>
  <div class="head-btn-item">
    <a-dropdown trigger="click">
      <a-avatar :size="36" class="head-btn" :style="{ cursor: 'pointer' }">
        <img alt="avatar" :src="'/public/static/img/icon.png'" />
      </a-avatar>
      <template #content>
        <a-doption>
          <a-space>
            <icon-tag />
            <span>
              {{ $t('messageBox.switchRoles') }}
            </span>
          </a-space>
        </a-doption>
        <a-doption>
          <a-space @click="$router.push({ name: 'Info' })">
            <icon-user />
            <span>
              {{ $t('messageBox.userCenter') }}
            </span>
          </a-space>
        </a-doption>
        <a-doption>
          <a-space @click="$router.push({ name: 'Setting' })">
            <icon-settings />
            <span>
              {{ $t('messageBox.userSettings') }}
            </span>
          </a-space>
        </a-doption>
        <a-doption>
          <a-space>
            <icon-export />
            <span>
              {{ $t('messageBox.logout') }}
            </span>
          </a-space>
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup></script>
