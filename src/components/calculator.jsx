import React, { Component } from "react";
/*
Trinnskatten for personlige skattytere beregnes i den enkeltes persons lønnsinntekt og 
tilsvarende inntekter som erstatter lønnsinntekt, f.eks. sykepenger, arbeidsavklaringspenger, 
uføretrygd og pensjon. Trinnskatten består av fire trinn. For de første 174 500 kroner av 
personinntekten din skal du ikke betale trinnskatt.

Inntekten mellom 0 - 174 500 kroner	Ingen trinnskatt

Trinn 1	    Inntekten mellom    174 500 – 245 650 kroner	1,9 % trinnskatt
Trinn 2	    Inntekten mellom    245 650 – 617 500 kroner	4,2 %  trinnskatt
Trinn 3	    Inntekten mellom    617 500 – 964 800 kroner	13,2 % trinnskatt *
Trinn 4	    Inntekten over      964 800 kroner	            16,2 % trinnskatt
* bosatte i Finnmark og Nord-Troms 11,2 %
*/

class Calculator extends Component {
  state = {
    salary: 0,
    tax: 0
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
    const { tax } = this.state;

    return (
      <div className="form">
        <h1>Trinn skatt</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="salary" className="hoved">
            Årslønn
          </label>
          <input
            type="number"
            name="salary"
            className="input"
            onChange={this.handleChange}
          />
          <button className="button is-small">Beregn trinnskatt</button>
        </form>
        <p>Din trinnskatt: kr {tax},-</p>
      </div>
    );
  }
}

export default Calculator;
