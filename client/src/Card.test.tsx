import { render } from "@testing-library/react";
import userEvent, { TargetElement } from "@testing-library/user-event";
import Card from "./Card";

describe("Card", () => {
  it("should render", () => {
    expect(
      render(<Card title="Test" author="Jo" to="/to" handleClick={jest.fn()} />)
    );
  });
  it("should call onClick when card clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Card title="Test" author="Jo" to="/to" handleClick={onClick} />
    );
    const card = getByText("Test").parentElement;
    expect(onClick).toHaveBeenCalledTimes(0);

    userEvent.click(card as TargetElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
