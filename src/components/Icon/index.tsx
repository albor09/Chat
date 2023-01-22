import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectThemes } from "../../app/themeSlice";

interface IconProps {
  icon: IconDefinition;
  size?: "1x" | "2x" | "3x";
  onClick?: React.MouseEventHandler;
  color?: string;
  useThemeColor: boolean;
}

const Icon: FC<IconProps> = ({
  icon,
  size = "1x",
  onClick,
  color = "white",
  useThemeColor = false,
}) => {
  const themes = useAppSelector(selectThemes);

  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      color={useThemeColor ? themes.themes[themes.selected].secondaryFont : color}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></FontAwesomeIcon>
  );
};

export default Icon;
