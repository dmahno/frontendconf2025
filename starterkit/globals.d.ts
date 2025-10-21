/// <reference types="vitest" />
import "@testing-library/jest-dom";
import type {render as _render} from "./config/vitest/test-utils";
declare global {
  const render: typeof _render;
}
export {};
