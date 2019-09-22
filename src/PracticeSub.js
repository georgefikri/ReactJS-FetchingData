import  React  from "react";


class Sub extends React.Component {


    render(){
        
        return (
             /* <li>
                 <p>name: {this.props.name}</p>
                 <p>username: {this.props.username}</p>
                 <p>email: {this.props.email}</p>
                 <hr />
            </li> */
                
            <li>
                <p>{this.props.data.name}</p>
                <p> {this.props.data.username}</p>
                <p>{this.props.data.email}</p>
            <hr />
       </li>
        )
    }
}

export default Sub;