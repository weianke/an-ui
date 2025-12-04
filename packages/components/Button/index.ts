
import { withInstall } from '@an-ui/utils';
import ButtonComponent from './Button.vue';
import ButtonGroup from './ButtonGroup.vue';

export const AnButton = withInstall(ButtonComponent)
export const AnButtonGroup = withInstall(ButtonGroup)
export * from "./types";
