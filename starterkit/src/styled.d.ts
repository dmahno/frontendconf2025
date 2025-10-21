// interweb
import "styled-components";
import {InterwebTheme} from "@pochta/ui/themes/interweb";
import * as React from "react";
import "@testing-library/jest-dom";

declare module "styled-components" {
  export interface DefaultTheme extends InterwebTheme {}
}
declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

interface ImportMetaEnv {
  readonly [key: string]: string | undefined;
}
