import React, { Component } from "react";
import NavBar from "../components/Navbar";
import Counters from "../components/Counters";
import Web3 from 'web3';
var web3 = new Web3();

class Home extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    metamaskAddress : null,
    connectedStatus : false,
  };

  componentDidMount(){
   this.connectWallet();
   console.log("::::::::::::::",this.state.connectedStatus);
  }

   connectWallet = async () => {
    if (window.ethereum) { //check if Metamask is installed
          try {
              const address = await window.ethereum.enable(); //connect Metamask
              this.setState({
                metamaskAddress: address,
                connectedStatus:true,
              })
              const obj = {
                      connectedStatus: true,
                      status: "",
                      address: address
                  }
                  return obj;
               
          } catch (error) {
            this.setState({
              connectedStatus:false
            })
              return {
                  connectedStatus: false,
                  status: "🦊 Connect to Metamask using the button on the top right."
              }
          }
          
    } else {
      this.setState({
        connectedStatus:false
      })
          return {
              connectedStatus: false,
              status: "🦊 You must install Metamask into your browser: https://metamask.io/download.html"
          }
        } 
  };

  handleIncrement = counter => {
    if(this.state.connectedStatus == true){
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counters[index] };
      counters[index].value++;
      this.setState({ counters });   
    }
    else{
      alert("Connect Metamask..")
    }
  };

  handleDecrement = counter => {
    if(this.state.connectedStatus == true){
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counters[index] };
      counters[index].value--;
      this.setState({ counters });
    }
    else{
      alert("Connect Metamask..")
    }
  };

  handleReset = () => {
    if(this.state.connectedStatus == true){
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    }
    else{
      alert("Connect Metamask..")
    }
  };

  handleDelete = counterId => {
    if(this.state.connectedStatus == true){
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
    }
    else{
      alert("Connect Metamask..")
    }
  };

  handleRestart = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            address={this.state.metamaskAddress}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onRestart={this.handleRestart}
          />
        </main>
      </div>
    );
  }
}

export default Home;
