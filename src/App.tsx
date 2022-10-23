import React, { FC, FunctionComponent, MouseEventHandler } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../store";
import "./mysteryComponent.css";

export const enum Style {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const enum IconPos {
  LEFT = "left",
  RIGHT = "right",
}

export const enum Size {
  SMALL = "small",
  LARGE = "large",
  ICON = "icon",
}

export type Props = {
  children: any;
  style: Style;
  icon: JSX.Element | string;
  iconPos: IconPos;
  onClick: MouseEventHandler;
  size: Size;
  className: string;
  disable: boolean;
};

export const MysteryComponent: FC<Props> = ({
  children,
  style,
  icon,
  size,
  iconPos,
  className,
  disable,
  ...props
}) => {
  const types: string =
    style &&
    ((style as Style) === Style.PRIMARY
      ? "mystery__primary"
      : "mystery_secondary");
  const iconStyle: string = icon && "mystery--icon";

  const raws: any = icon ? (
    iconPos === IconPos.RIGHT ? (
      <React.Fragment>
        {children} {icon}
      </React.Fragment>
    ) : (
      <>
        {icon} {children}
      </>
    )
  ) : (
    children
  );

  const disabled: string = disable ? "disabled-mystery" : "";

  return (
    <button
      className={[
        "default__mystery",
        types,
        iconStyle,
        `mystery-size--${size}`,
        disabled,
        className,
      ].join(" ")}
      {...props}
      disabled={disable}
    >
      {raws}
    </button>
  );
};

const App: FC = () => {
  const text = useSelector<RootStore, string>((state) => state.text);

  return (
    <MysteryComponent
      children={text}
      style={Style.PRIMARY}
      icon={`{user}`}
      size={Size.SMALL}
      iconPos={IconPos.LEFT}
      className={"btn"}
      disable={false}
      onClick={() => console.log("click")}
    />
  );
};

export default App;

MysteryComponent.propTypes = {
  children: PropTypes.any,
  style: PropTypes.oneOf(['primary', 'secondary']),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]), iconPos: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'large', 'icon']),
  className: PropTypes.string,
  disable: PropTypes.bool
  }
