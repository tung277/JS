import axios from 'axios';
import React, { Component } from 'react'
import AddProduct from './AddProduct';
import { connect } from 'react-redux';
import './App.css'
import Content from './Content';
import Header from './Header';
const productData = () => axios.get('http://localhost:4000/get1')
              .then((res)=>res)
 class App extends Component {
     constructor(props) {
         super(props);
         this.state={
             data:null
         }
     }
    componentWillMount() {
         if(this.state.data === null){
            productData().then((res)=>
            this.setState({
                data:res.data
            })
            )
         }
     }
     PrintData  = () => {
         if(this.state.data !== null){
             return this.state.data.map((value,key)=>{
                return(<Content key={key}
                    anh={value.anh}
                    product_name={value.product_name}
                    product_price={value.product_price}
                />)
             })
         }
     }
     handleClick  = ($1,$2,$3) => {
        
        var dataTemp =[];
        var item = {};
        item.product_name = $1;
        item.product_price = $2;
        item.anh = $3;
        dataTemp=this.state.data;       
        if(item.product_name !== ''){
            dataTemp.push(item);
            this.setState({
                data:dataTemp
            })
        }       
     }
     render() {
         
        
        // Make a request for a user with a given ID
        // const axios = require('axios');
        // async function getUser() {
        //     try {
        //       const response = await axios.get('http://localhost:4000/get1');
        //       console.log(response.data);
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   }
        // getUser()
         return (
             <div>
                <Header/>
                <AddProduct update={($1,$2,$3)=>this.handleClick($1,$2,$3)}/>
                <div className="container">
                    <div className="row">
                        {this.PrintData()}  
                        
                    </div>
                </div>
                <ul>
        
      </ul>
             </div>
         );
     }
 }
 
 export default App;