import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import SearchBar from "./components/search/SearchBar.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import ItemsHome from "./components/ItemsHome.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      products: undefined,
      product: undefined
    }
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    componentDidMount() {
      axios.get('/items')
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
    }

 handleSubmit(){
  axios.get('/items')
  .then(res => {
   var products = res.data;
    this.setState({products});
  })
 }

setProduct(id){
  this.setState({
    product: id
  })
}

// postItem(){
//   axios.post('item', {
//   name: name
// })
// }

render(){
  return(
    <div>
  <center>

    <h1>

<a href="https://imgur.com/hxDOW9A"><img src="https://i.imgur.com/hxDOW9A.jpg" title="source: imgur.com" /></a>

      <div>Segunda Pata</div>
    </h1>
      <h2>Vende y Compra Accesorios, para Mascotas.</h2>
      <SearchBar items={this.state.items} handleSubmit={this.handleSubmit} />
      <ItemsHome items={this.state.items} products={this.state.products} setProduct={this.setProduct}/>
      </center>
      </div>
    )
  }
  };



export default Home;
