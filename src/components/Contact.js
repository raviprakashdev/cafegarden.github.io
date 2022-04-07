import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Congratulations! Enjoy your Time ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="cntnr">


          <img className="imm-fluid" src="assets/images/cafecafe.jpg" />
          <img className="immm-fluid" src="assets/images/Cafe Garden_logo.png" height={200} width={500} />
          <h1 className="hh-fluid">Book A Table</h1>

        </div>
        <img className="iimm-fluid"  src="assets/images/tablee.jpg" height={500} width={500} />
        <div className="wrapper">
          <fieldset>
            <form onSubmit={this.handleSubmit}>
              <br /> <br />
              <label>

                <input className="aaa" type="text" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange} />
              </label>
              <br /> <br />
              <label>

                <input className="aaa" type="email" placeholder="Please Enter Your Email" value={this.state.email} onChange={this.handleChange} />
              </label>

              <br /> <br />
              <label>

                <input className="aaa" type="text" placeholder=" Enter Your Mob no." value={this.state.number} onChange={this.handleChange} />
              </label>

              <br /> <br />
              <label>

                <input className="aaa" type="date" placeholder="Date" value={this.state.date} onChange={this.handleChange} />
              </label>

              <br /> <br />
              <label>

                <input className="aaa" type="time" placeholder="Time" value={this.state.time} onChange={this.handleChange} />
              </label>

              <br /> <br />
              <label>

                <select value={this.state.option} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">More than 6</option>
                  <option value="">Get Together</option>
                </select>
              </label>

              <br /> <br />
              <input className="bbb" type="submit" value="Submit" />
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}
export default Contact;