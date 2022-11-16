

import React from 'react';

export class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0,
            textP : ''
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({...this.state,count : this.state.count+1})
        }, 1000);

        
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <h2>Name : Ibrahim Anouer</h2>
                <img style={{width:"500px", margin:"30px"}} src='./public/123.jpg' alt='Not Found' />
                <h2>Bio :</h2>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                <br/>
                <h2>Profession : Student</h2>                
            </div>
        )
    }
