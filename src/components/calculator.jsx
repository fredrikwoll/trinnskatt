import React, { Component } from "react";

class Calculator extends Component {
  state = {
    salary: 0,
    tax: 0,
    lang: "no"
  };
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ salary: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const tax = Math.round(this.calculateTax(this.state.salary));
    this.setState({ tax: tax });
  }
  handleLangSwitch(lang) {
    this.setState({ lang: lang });
    console.log(lang);
  }

  calculateTax(salary) {
    let tax = 0;

    if (salary > 174500) {
      tax +=
        salary > 245640
          ? ((245640 - 174500) * 1.9) / 100
          : ((salary - 174500) * 1.9) / 100;
    }

    if (salary > 245640) {
      tax +=
        salary > 617500
          ? ((617500 - 245640) * 4.2) / 100
          : ((salary - 245640) * 4.2) / 100;
    }
    if (salary > 617500) {
      tax +=
        salary > 964800
          ? ((964800 - 617500) * 13.2) / 100
          : ((salary - 617500) * 13.2) / 100;
    }
    if (salary > 964800) {
      tax += ((salary - 964800) * 16.2) / 100;
    }
    return tax;
  }

  render() {
    const { tax, lang } = this.state;

    return (
      <div className="form">
        <div className="lang">
          <button
            className="button-lang"
            onClick={() => this.handleLangSwitch("no")}
          >
            NO
          </button>{" "}
          |{" "}
          <button
            className="button-lang"
            onClick={() => this.handleLangSwitch("en")}
          >
            EN
          </button>
        </div>
        <h1>{lang === "no" ? `Trinn skatt` : `Bracket Tax`}</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="salary" className="hoved">
            {lang === "no" ? `Årslønn` : `Gross salary`}
          </label>
          <input
            type="number"
            name="salary"
            className="input"
            onChange={this.handleChange}
          />
          <button className="button is-small">
            {lang === "no" ? `Beregn trinnskatt` : `Calculate bracket tax`}
          </button>
        </form>
        <p>
          {lang === "no" ? `Din trinnskatt: kr` : `Your bracket tax: NOK`} {tax}
          ,-
        </p>
      </div>
    );
  }
}

export default Calculator;
