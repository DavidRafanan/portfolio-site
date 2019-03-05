import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} 
              to="/">Home</Link>} scroll>
                  <Navigation>
                        <Link to="/about">About</Link>
                        <Link to="/resume">CV</Link>
                  </Navigation>
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                        <Link to="/about">About</Link>
                        <Link to="/resume">CV</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
        </div>
    );
  }
}

export default App;
