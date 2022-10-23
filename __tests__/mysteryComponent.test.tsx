import React, { DOMElement } from "react";
import { render, RenderResult } from "@testing-library/react";
import { IconPos, MysteryComponent, Props, Size, Style } from "../src/App";

const handleClick = jest.fn();

const props: Props = {
  children: undefined,
  style: Style.PRIMARY,
  icon: `{user}`,
  iconPos: IconPos.LEFT,
  onClick: handleClick,
  size: Size.SMALL,
  className: "",
  disable: false,
};

test("Should render the component", () => {
  const { getByRole }: RenderResult = render(<MysteryComponent {...props} />);
  expect(getByRole("button")).toBeInTheDocument();
});

test("Should render the component with icon on the right", () => {
  const data: string = "text";
  const { children, iconPos, ...rest } = props;
  const { getByRole }: RenderResult = render(
    <MysteryComponent children={data} iconPos={IconPos.RIGHT} {...rest} />
  );
  expect(getByRole("button")).toBeInTheDocument();
  expect(getByRole("button").textContent).toBe("text {user}");
});

test("Should render the component with icon on the left", () => {
  const data: string = "text";
  const { children, iconPos, ...rest } = props;
  const { getByRole }: RenderResult = render(
    <MysteryComponent children={data} iconPos={IconPos.LEFT} {...rest} />
  );
  expect(getByRole("button")).toBeInTheDocument();
  expect(getByRole("button").textContent).toBe("{user} text");
});
