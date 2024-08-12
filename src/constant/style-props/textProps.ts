import StyleProps from "./styleProps";

interface TextProps
  extends StyleProps,
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string;
}

export default TextProps;
