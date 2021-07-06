import React from 'react';
import axios from 'axios';

class NewBeer extends React.Component {

    state = {
      name: "",
      tagline: "",
      description: "",
      firstBrewed: "",
      brewersTips: "",
      attenuationLevel: 0,
      contributedBy: ""
    };


  addNew = e => {

    e.preventDefault();
    const { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy } = this.state;
    
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(() => {
        // console.log("redirecting....");
        // this is how you redirect
        this.props.history.push('/all-beers');
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    const { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy } = this.state;

    return (
      <div>
        <form onSubmit={this.addNew}>
          <label>Name</label>
          <input value={name} name='name' onChange={this.handleInput} />
          <br/>
          <label>Tagline</label>
          <input value={tagline} name='tagline' onChange={this.handleInput} />
          <br/>
          <label>Description</label>
          <input value={description} name='description' onChange={this.handleInput} />
          <br/>
          <label>First Brewed</label>
          <input value={firstBrewed} name='firstBrewed' onChange={this.handleInput} />
          <br/>
          <label>Brewer Tips</label>
          <input value={brewersTips} name='brewersTips' onChange={this.handleInput} />
          <br/>
          <label>Attenuation Level</label>
          <input type="number" value={attenuationLevel} name='attenuationLevel' onChange={this.handleInput} />
          <br/>
          <label>Contributed By</label>
          <input value={contributedBy} name='contributedBy' onChange={this.handleInput} />
          <br/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
