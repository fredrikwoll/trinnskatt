import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/calculator";

describe("<Calculator />", () => {
  test("Should return 100", () => {
    const wrapper = shallow(<Calculator />);
    const instance = wrapper.instance();
    expectExport(wrapper.state("salary").equals(0));
  });

  /* it("renders an `.icon-star`", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(".icon-star")).to.have.lengthOf(1);
  });

  it("renders children when passed in", () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it("simulates click events", () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClick).to.have.property("callCount", 1);
  }); */
});
