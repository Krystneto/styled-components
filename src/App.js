import React, { Component } from 'react';

import { Title } from './styled-components/Title';
import { Wrapper } from './styled-components/Wrapper';
import { Input } from './styled-components/Input';
import { Button } from './styled-components/Button';
import { Link } from './styled-components/Link';
import { StyledLink } from './styled-components/StyledLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper>
          <Title>
            Hello World, this is my first styled comoponent!
          </Title>
          <Input placeholder="@mxstbr" type="text" />
          <hr />
          <Input placeholder="@geelen" type="text" />
          <hr />
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <br />
          <h4>Unstyled Link -- 
            <Link> google.com</Link>
          </h4>
          <h4>Styled Link -- 
            <StyledLink> google.com</StyledLink>
          </h4>
        </Wrapper>
      </div>
    );
  }
}

export default App;
