declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react';
  const Component: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default Component;
}
