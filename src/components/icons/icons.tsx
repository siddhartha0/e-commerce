import * as icon from "react-feather";

type iconPropTypes = {
  name: icon.Icon;
  size?: number;
  color?: string;
  onClick?: () => void;
  cursor?: string;
  className?: string;
};

export const Icon = ({
  name,
  size = 24,
  onClick,
  cursor = "pointer",
  color = "#4F46E5",
  className,
}: iconPropTypes) => {
  const Names = name;
  return (
    <Names
      size={size}
      color={color}
      cursor={cursor}
      onClick={onClick}
      className={className}
    />
  );
};
