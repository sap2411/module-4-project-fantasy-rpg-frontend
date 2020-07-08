import React from 'react';

// const App = props => (
//   <LoginForm />
// );


class LoginForm extends React.Component{
render(){
  return(
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <OtherMethods />
    </div>
  )
}
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Email" placeholder="Enter your email" type="text" />
   <FormButton title="Log in"/>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

const OtherMethods = props => (
<div id="LinkToLinkedin">
  <label>Meet our creators:</label>
  <div id="iconGroup">
    <Linkedin />
    
    
  </div>
</div>
);

const Linkedin = props => (
<a href="#"> 
<img id="linkedinIcon" alt=" " src="https://image.flaticon.com/icons/svg/1409/1409945.svg" ></img>
</a>
);



export default LoginForm;