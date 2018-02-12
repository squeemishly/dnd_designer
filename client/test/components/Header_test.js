import { renderComponent, expect } from "../test_helper";
import Header from "../../src/components/Header/Header";

describe("<Header />", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it("has a nav element", () => {
    expect(component.find("nav")).to.exist;
  });

  it("should render a link to google authentication if not authenticated", () => {
    expect(component.find("li").length).equal(1);
  });

  it("should render four links if user is authenticated", () => {
    const props = { auth: { username: "user" } };
    const component2 = renderComponent(Header, null, props);
    expect(component2.find("li").length).equal(4);
  });
});
