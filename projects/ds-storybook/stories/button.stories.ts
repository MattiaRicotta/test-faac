import {Story, Meta} from '@storybook/angular/types-6-0';

import {ButtonComponent} from '../../enhancers-design-system/src/lib/components/atoms/button/button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  /*
   argTypes: {
     labelColor: {
       control: {type: 'text'}
     },
     labelHexColor: {
       control: {type: 'color'}
     },
   },
   */
} as Meta;

const Template: Story<ButtonComponent> = (args: any) => ({
  component: ButtonComponent,
  props: {
    ...args
  }
});

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const withIcon = Template.bind({});
withIcon.args = {
  ...Default.args,
  icon: 'icona'
};
