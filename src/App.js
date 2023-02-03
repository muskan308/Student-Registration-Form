import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("select any");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [fname, setFname] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [nameError, setNameError] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [addressError, setAddressError] = useState("");

  const validate = ()=>{
    if(name === "" || email === ""|| address === ""|| phoneNumber ===""|| fname === ""){
      setEmptyError("All fields are mandatory");
      return false;
    }if(!name.match(/^[A-Za-z0-9]/)){
      setNameError("Name is not alphanumeric.");
      return false;
    }if(!email.includes('@')){
      setEmailError("must contain @");
      return false;
    }if(!fname.match(/^[A-Za-z0-9]/)){
      setFnameError("father's name is not alphanumeric.");
      return false;
    }
    if(!gender.match(/male|female|other/i)){
      setGenderError("Please identify as male, female or other.")
      return false;
    }if(!phoneNumber.match(/^[0-9]/) || phoneNumber.length !== 10){
      setPhoneNumberError("Invalid Phone Number. Length should be 10 and should only contain numbers")
      return false;
    }if(address.length < 20) {
      setAddressError("Please add the proper address.(Length should be exceeding 20 length.")
    }
    
    
    return true;
  }

  const resetErrorDefault = ()=>{
    setNameError("");
    setEmailError("");
    setPhoneNumberError("");
    // setPasswordError("");
    setFnameError("");
    setAddressError("");
    setGenderError("");
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if(isValid === true) {
      alert("Registration Completed!")
      setEmptyError("");
      setName("");
      setPhoneNumber("");
      setFname("");
      setAddress("");
      setGender("select any");
      setEmail("");
      
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h3>Student's Registration Form</h3>
        <input type ="text" placeholder='name' value = {name} onChange = {(e)=>{setName(e.target.value)}}/>
        <p className= "errors">{nameError}</p>
        <input type="text" placeholder="email" value = {email} onChange = {(e)=>{setEmail(e.target.value)}}/>
        <p className= "errors">{emailError}</p>
        <input type="text" placeholder="Father's Name" value = {fname} onChange = {(e)=>{setFname(e.target.value)}}/>
        <p className= "errors">{fnameError}</p>
        <select name = "gender" value = {gender} onChange = {(e)=>{setGender(e.target.value)}}>
          <option value = "select any">Gender</option>
          <option value = "male">Male</option>
          <option value = "female">Female</option>
          <option value = "other">Other</option>
        </select>
        <p className= "errors">{genderError}</p>
        <input type ="text" placeholder='Phone Number' value = {phoneNumber} onChange = {(e)=>{setPhoneNumber(e.target.value )}}/>
        <p className= "errors">{phoneNumberError}</p>
        <input type = "text" placeholder='Address' value ={address} onChange = {(e)=>{setAddress(e.target.value)}}/>
        <p className= "errors">{addressError}</p>
        <p className= "errors" >{emptyError}</p>
        <input type = "submit" className='btn' value = 'Submit'/>

      </form>
      
    </div>
  );
}

export default App;
