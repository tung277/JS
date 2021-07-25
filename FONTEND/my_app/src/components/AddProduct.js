import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
const addProductAction  = (product_name,product_price,anh) => 
   (axios.post('/add',{product_name,product_price,anh}).then((resp)=>(resp.data)))

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state={
      product_name:"",
      product_price:"",
      anh:""
    }
  }
  IsChange  = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]:value
    })
  }
  tranData  = ($1,$2,$3) => {
    
    addProductAction($1,$2,$3).then((resp)=>(resp));
    this.props.getEditData($1,$2,$3);
    this.props.update($1,$2,$3);
  }
    render() {
        return (
            <div className="container">
  <div className="row">
    <form action="" method="">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm </label>
        <input type="text" onChange={(e)=>this.IsChange(e)} name="product_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
        <input type="text" onChange={(e)=>this.IsChange(e)} name="product_price" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Đường link sản phẩm</label>
        <input type="text" onChange={(e)=>this.IsChange(e)} name="anh" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="button" onClick={()=>this.tranData(this.state.product_name,this.state.product_price,this.state.anh)} className="btn btn-primary">Thêm</button>
    </form>
  </div>
</div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEditData: ($1,$2,$3) => {
        dispatch({type:"get1",$1,$2,$3})
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct)