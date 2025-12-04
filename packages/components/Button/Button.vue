
<script setup lang="ts">
import { throttle } from 'lodash-es';
import { computed, ref } from 'vue';
import AnIcon from '../Icon/Icon.vue';
import type { ButtonEmits, ButtonInstance, ButtonProps } from './types';
defineOptions({
  name: "AnButton"
})

const props = withDefaults(defineProps<ButtonProps>(),{
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500,
})

const emits = defineEmits<ButtonEmits>();

const slots = defineSlots();

const _ref = ref<HTMLElement | null>(null);

const handleBtnClick = (e: MouseEvent) =>  emits('click', e);
// 使用computed来动态创建点击处理函数
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0px",
}));


defineExpose<ButtonInstance>({
  ref: _ref
})

</script>

<template>
  <component 
    :ref="_ref"
    :is="tag"
    class="er-button"
    :type="tag === 'button' ? props.nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :autofocus="autofocus"
    @click="
      (e: MouseEvent) =>
        useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)
    "
  >
   <template v-if="loading">
      <slot name="loading">
        <an-icon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <an-icon
      :icon="icon"
      size="1x"
      :style="iconStyle"
      v-if="icon && !loading"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import './style.css';
</style>
