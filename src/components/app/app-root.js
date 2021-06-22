import React from 'react';
import Header, {Logo} from '@jetbrains/ring-ui/components/header/header';
import Footer from '@jetbrains/ring-ui/components/footer/footer';
import hubLogo from '@jetbrains/logos/hub/hub.svg';
import LoaderScreen from '@jetbrains/ring-ui/components/loader-screen/loader-screen';
import './app.css';

// const URL =
//   'https://raw.githubusercontent.com/eksite/ExtraTest/master/data.json';

const AppRoot = () => (
  <div>
    <Header>
      <a href="/">
        <Logo glyph={hubLogo} size={48}/>
      </a>
    </Header>
    <div className="app-content">{'SMTH interesting 1321312'}</div>
    <div>
      <LoaderScreen message={'den den den'} style={{color: 'red'}}/>
    </div>
    <Footer left={[['den'], ['denden']]}/>
  </div>
);

export default AppRoot;
