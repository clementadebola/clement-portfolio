// styled.d.ts
import "styled-components";
import theme from "./styles/theme"; // Adjust path to match your theme file location

type CustomTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}