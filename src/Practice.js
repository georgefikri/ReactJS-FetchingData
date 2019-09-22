import React from "react";
import  Sub from "./PracticeSub"

class Practice extends React.Component {

    constructor(){
        super();
        this.state = {
            /* the problem I'd here was i set the API property to object & our web API returns array
            that was making a confusion
            Take Care: set the empty data type like the below with the same type the Web API returns  */
            API:[],
            loading: false
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            this.setState({
                API: data,
                loading: false
            })

        })
    }


    render(){
        let all
        if(this.state.loading === true) {
             all = "loading...."
        } else {
             all = this.state.API.map((element)=>{
                //return <Sub key={element.id} name={element.name} username={element.username} email={element.email} />
                
                return <Sub key={element.id} data={element}  />
            })
        }


        return (
            <ul>
                {all}
            </ul>
        )


    }

}

export default Practice