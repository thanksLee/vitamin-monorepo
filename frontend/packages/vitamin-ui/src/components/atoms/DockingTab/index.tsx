/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from 'react';
import DockLayout, { DockContext } from 'rc-dock';

import 'rc-dock/dist/rc-dock.css';
import { DefaultLayout, DockingLayout, TabLayout } from './types';

export const BaseDockLayout = forwardRef((props: any, ref: React.Ref<DockContext>) => {
  const { defaultTabInfo, isVisible, ...rest } = props;

  const getDefaultDockingTabLayout = (tabInfos: TabLayout[]): DockingLayout => {
    const dockbox = DefaultLayout;
    const tmpLayout: DockingLayout = {
      dockbox: {
        ...dockbox.dockbox,
        children: dockbox.dockbox.children.map((child, index) => {
          if (index === 0) {
            return {
              ...child,
              tabs: tabInfos.map((tabInfo) => ({
                ...tabInfo,
                id: tabInfo.id, // 새 id
                title: tabInfo.title, // 새 title
                content: <div>{`Content for ${tabInfo.content}`}</div>, // 새 content
              })),
            };
          }
          return child;
        }),
      },
    };

    return tmpLayout;
  };

  return (
    <>
      {isVisible && (
        <DockLayout
          ref={ref} // 전달받은 ref를 DockLayout에 연결
          defaultLayout={getDefaultDockingTabLayout(defaultTabInfo)}
          style={{ width: '100%', height: '100%' }}
          {...rest}
        />
      )}
    </>
  );
});
