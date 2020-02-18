import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component{

  constructor(props) {
    super(props);

    this.state = {fullname:'',email:'',telephone:'',message:''}
    
    this.contactformstyle={
      height:'500px',
      width:'800px',
      color:"grey"
    }

    this.labelstyle={
      color:"white"
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  handleSubmit(event) {
    //console.log(this.state);

    var contactdata = {
      fullname:this.state.fullname,
      email:this.state.email,
      telephone:this.state.telephone,
      message:this.state.message
    }

    console.log(contactdata);

    axios
      .post('http://localhost:3001/createcontact',contactdata)
      .then(() => console.log('Contact Created'))
      .catch(err => {
        console.error(err);
      });

    event.preventDefault();
  }

  render(){
    return(
      <div>
      <div>Contact Form Page</div>
      
        <div id="maindiv" 
        style={{height:this.contactformstyle.height,width:this.contactformstyle.width,backgroundColor:this.contactformstyle.color}}>

          <form id="cform" onSubmit={this.handleSubmit}>
            <div>
              <label style={{color:this.labelstyle.color}}>Full Name</label> <input type="text" id="fullname" name="fullname" onChange={this.handleInputChange}/>
            </div>  
            <div>
              <label style={{color:this.labelstyle.color}}>Email</label> <input type="text" id="email" name="email" onChange={this.handleInputChange}/>  
            </div>  
            <div>
              <label style={{color:this.labelstyle.color}}>Telephone</label> <input type="text" id="telephone" name="telephone" onChange={this.handleInputChange}/>
            </div>  
            <div>
            <label style={{color:this.labelstyle.color}}>Message</label> <input type="textarea" rows="100" cols="50" id="message" name="message" onChange={this.handleInputChange}/>
            </div>  
            <div>
              <input type="submit" value="Submit"/>
            </div>
          </form>
        </div>     
      </div>
    )
  }
}

export default ContactForm;
