import {ReactElement, ReactNode} from "react";
import {
  render as rtlRender,
  RenderOptions,
  screen as rtlScreen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {PortalThemeProvider} from "@pochta/ui/themes/portal";

export * from "@testing-library/react";

const AllProviders = ({children}: {children?: ReactNode}) => (
  <PortalThemeProvider withFonts={false}>{children}</PortalThemeProvider>
);

export {userEvent};
export const screen = rtlScreen;
export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => rtlRender(ui, {wrapper: AllProviders, ...options});
