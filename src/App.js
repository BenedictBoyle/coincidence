import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

const Pages = {
  home: 'home',
  bitcoin: 'bitcoin',
  about: 'about',
  book: 'book'
};

class App extends Component {
  constructor(props) {
    super(props);
    const page_path = window.location.pathname.split('/')[1]

    if (page_path in Pages) {
      this.state = {
        page: Pages[page_path]
      };
    }
    else {
      this.state = {
        page: 'home'
      };
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(typeof(Pages));
    window.addEventListener('popstate', this.setStateFromUrl);
  }

  setStateFromUrl = e => {
    e.preventDefault();
    let page_path = window.location.pathname.split('/')[1]
    this.setState({page: page_path});
  }

  handleClick = e => {
    this.setState({page: e.target.id});
    window.history.pushState(this.state, '', '/' + e.target.id);
  }

  render () {

    let viewPage = this.state.page;

    const renderPage = () => {
      if (viewPage === 'home') {
        return <Home key="home"></Home>;
      }
      else if (viewPage === 'bitcoin') {
        return <Bitcoin key="bitcoin"></Bitcoin>;
      }
      else if (viewPage === 'about') {
        return <About key="about"></About>;
      }
      else if (viewPage === 'book') {
        return <Book key="book"></Book>;
      }
    }

    const styleLogo = () => {
      if (viewPage === 'home') {
        return "App-logo";
      }
      else {
        return "App-logo-bg";
      }

    }

    return (
      <div className="App" >
        <div className="content-wrapper">
          <img src={logo} className={styleLogo()} alt="logo" />
          {renderPage()}
        </div>
        <Menu page={this.state.page} clickHandler={this.handleClick} />
      </div>
    )
  };
}

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <MenuButton name='home' page={this.props.page} clickHandler={this.props.clickHandler}></MenuButton>
          <MenuButton name='bitcoin' page={this.props.page} clickHandler={this.props.clickHandler}></MenuButton>
          <MenuButton name='about' page={this.props.page} clickHandler={this.props.clickHandler}></MenuButton>
          <MenuButton name='book' page={this.props.page} clickHandler={this.props.clickHandler}></MenuButton>
        </ul>
      </nav>
    )
  }
}

Menu.PropsTypes = {
  page: PropTypes.oneOf(Object.values(Pages))
}

function MenuButton(props) {
  let className = '';
  if (props.page === props.name) {
    className += 'selected';
  }
  return <li id={props.name} className={className} onClick={props.clickHandler}>{props.name}</li>;
}

class Home extends React.Component {
  render() {
    return (
      <p>
        Guidance on taking self-custody of bitcoin and other bitcoin services.
      </p>
    )
   }
}

class Bitcoin extends React.Component {
  render () {
    return (
      <div id="bitcoin" class="info">
        <p>
          Bitcoin is a genuine leap forward in the way people can store and transmit value. 
        </p>
        <p>
          Before the launch of the Bitcoin network, all digital and electronic accounting worked in units based on credit - approximately speaking, new units of currency were created through loans taken out against non-monetary assets. 
        </p>
        <p>
          Bitcoin differs through fixing the issuance and supply of the unit of currency algorithmically. It can serve as a pure denominator in all trades of real assets, floating freely between across any exchange of goods. This avoids the coupling between the supply of fiat money and trades of real-world goods and services that can lead to vicious cycles of credit unwinding and collapse that have historically plagued the current regime.
        </p>
        <p>
          This is not to mention the inability of anyone, including Governments, to counterfeit or debase Bitcoin, or to control or prevent the exchange of Bitcoin between anyone within the network.
        </p>
        <p>
          Since the advent of Bitcoin, other cryptocurrencies have made claims that they can do all this and more - faster finality, smart contracts, yield farming and other buzzwords. 
        </p>
        <p>
          The possibility that these other projects can introduce some genuine innovations can't be ruled out. However, in almost all cases we're aware of, the supposed innovations in fact comprise technical trade-offs undermining the key purpose that Bitcoin was invented for - uncensorable, undebasable and ungovernable money.
        </p>
        <p>
          Bitcoin, now with the lightning network providing an overlay of near-instant transactions, represents a still underappreciated leap forward in human economic relations. 
        </p>
      </div>
    )   
  }
}

class About extends React.Component {
  render () {
    return (
      <div id="about" class="info">
        <p>
          At Coincidence we believe in helping people take self-custody of bitcoin.
        </p>
        <p>
          What does this mean? You are probably familiar with centralised services such as Bitfinex, Kraken, Binance etc. that allow you to buy and sell bitcoin for other currencies.
        </p>
        <p>
          There's nothing wrong with using these services to buy and sell bitcoin - many of them are great services. But, because they are centralised, they all suffer from the evils bitcoin is here to fix.
        </p>
        <p>
          You have to identify yourself for 'compliance' reasons. And if a Government takes issue with you - they can lean on the platform to close your account and confiscate your funds.
        </p>
        <p>
          It also seems rare that an exchange can resist the temptation to get involved in some good old rehypothecation. They can multiply their profits by selling you bitcoin they don't own. It's just numbers in their database until you try and withdraw onto the Bitcoin network. This works great - until it doesn't and people want their money. 
        </p>
        <p>
          For bitcoin to work, and the benefits to be realised, it's important to use bitcoin on the Bitcoin network - this is the innovation, the thing that prevents anyone fraudulently creating funds out of nowhere, that allows you to transact freely however powerful your enemies.
        </p>
        <p>
          All you need to do this, all bitcoin and the Bitcoin network requires of you, is to protect a secret piece of information (a 'private key') that allows you to spend and receive money. This is what we mean by self-custody.
        </p>
      </div>
    )
  }
}

class Book extends React.Component {
  render() {
    return (
      <div id="book" class="info">
        <p>
          We can help talk you through the safest and best places to buy and sell bitcoin, solutions for self-custody from simple to advanced, and any other technical queries you might have about participating in the Bitcoin and Lightning networks.
        </p>
      </div>
    )
  }
}
export default App;
