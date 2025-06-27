import React from "react";
import User from "./User";
import UserClass from "./Userclass";
import UserContext from "../utils/UserContext";

class About extends React.Component{

constructor(props){
    super(props);
    console.log("parent constructor ")
}

componentDidMount(){
    console.log("parent component did mount")
}



render(){
    console.log("parent render")
   return(
        <div className="about-container">
            <h1>About us</h1>
            <div>
            Logged in User: 
            <UserContext.Consumer>
    {({loggedInUser})=><span className="text-lg font-bold">{loggedInUser}</span>}
</UserContext.Consumer>
            </div>


        <User
       name = "Ram Rohith" location="Dallas"
        />
        
        <UserClass
            name= "Sunny" location="Hyderabad"
        />
        </div>
    )
}


}



export default About;