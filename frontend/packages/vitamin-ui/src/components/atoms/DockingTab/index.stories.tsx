import { Meta, StoryObj } from '@storybook/react';

import { useRef } from 'react';
import { BaseDockLayout } from './index';
import { DockContext } from 'rc-dock';

const meta: Meta<typeof BaseDockLayout> = {
  title: 'Atoms/DockingTab/BaseDockLayout',
  component: BaseDockLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultTabInfo: { control: 'object' },
    isVisible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseDockLayout>;

// 기본 탭 스토리
const StoryComponent = (args: React.ComponentProps<typeof BaseDockLayout>) => {
  const dockRef = useRef<DockContext>(null);
  const { isVisible, defaultTabInfo } = args;
  return (
    <div style={{ width: '800px', height: '600px', border: '1px solid #ccc' }}>
      <BaseDockLayout {...args} ref={dockRef} isVisible={isVisible} defaultTabInfo={defaultTabInfo} />
    </div>
  );
};

export const BaseDockingTab: Story = {
  render: (args) => <StoryComponent {...args} />,
  args: {
    defaultTabInfo: [
      { id: 'tab1', title: 'First Tab', content: 'Content 1', closable: false },
      { id: 'tab2', title: 'Second Tab', content: 'Content 2', closable: true },
    ],
    isVisible: true,
  },
};
