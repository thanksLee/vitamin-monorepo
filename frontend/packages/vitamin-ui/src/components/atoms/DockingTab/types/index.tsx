import { ReactNode } from 'react';
import { DockMode } from 'rc-dock';
export type TabLayout = {
  id: string;
  title: string;
  content: React.ReactElement;
  closable: boolean;
};

export type PanelLock = {
  minWidth: number;
  panelExtra: ReactNode;
};

export type Tabs = {
  id: string;
  tabs: TabLayout[];
  panelLock?: PanelLock;
};

export type DockingLayout = {
  dockbox: {
    mode: DockMode;
    children: Tabs[];
  };
};

export const DefaultLayout: DockingLayout = {
  dockbox: {
    mode: 'horizontal',
    children: [
      {
        id: 'main_panel',
        tabs: [
          {
            id: 'home',
            title: 'Home',
            content: <div>Welcome to Home Tab</div>,
            closable: true,
          },
        ],
      },
    ],
  },
};

export const ExtraLayout: DockingLayout = {
  dockbox: {
    mode: 'horizontal',
    children: [
      {
        id: 'main_panel',
        tabs: [
          {
            id: 'home',
            title: 'Home',
            content: <div>Welcome to Home Tab</div>,
            closable: true,
          },
        ],
        panelLock: {
          minWidth: 200,
          panelExtra: null,
        },
      },
    ],
  },
};