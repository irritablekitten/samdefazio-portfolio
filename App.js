import React, { Component } from 'react';
import {Header, Container, Card, Image, Icon} from 'semantic-ui-react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container textAlign="center" classname="portfolio-header">
          <Header>&nbsp;</Header>
          <Header as="h1"><strong>Sam Defazio</strong></Header>
          <Header as="h2">Python, Node, and React Developer</Header> 
          <Header as="h1"><a href="https://github.com/irritablekitten"  target="_blank" rel="noopener noreferrer">Github</a> | <a href="https://www.linkedin.com/in/sam-defazio/"  target="_blank" rel="noopener noreferrer">LinkedIn</a></Header>
          <Header>&nbsp;</Header>
        </Container>
        

       <Container textAlign="center">
        <Card.Group>
          <Card>
            <Image src={require('./dsw.jpg')} />
            <Card.Content>
              <Card.Header>Dark Sky Weather</Card.Header>
              <Card.Meta>React front-end, Python + AWS back-end</Card.Meta>
              <Card.Description>Hurricane and tropical storm tracking</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://darkskyweather.com' target="blank">
                <Icon name='globe' />
                darkskyweather.com
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={require('./d2d.jpg')} />
            <Card.Content>
              <Card.Header>DOTA 2 Draft</Card.Header>
              <Card.Meta>React front-end, Python + AWS back-end</Card.Meta>
              <Card.Description>Counter picking tool using OpenDOTA's hero match-up data.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://dota2draft.com' target="blank">
                <Icon name='globe' />
                dota2draft.com
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src={require('./wtfhappenednow.jpg')} />
            <Card.Content>
              <Card.Header>WTF Happened Now?</Card.Header>
              <Card.Meta>React front-end, Node back-end</Card.Meta>
              <Card.Description>Word cloud generator based on article titles from 40 news sources.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a href='https://wtfhappenednow.com' target="blank">
                <Icon name='globe' />
                wtfhappenednow.com
              </a>
            </Card.Content>
          </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;
