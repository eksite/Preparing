import React from 'react';
import Header, {Logo} from '@jetbrains/ring-ui/components/header/header';
// import Footer from '@jetbrains/ring-ui/components/footer/footer';
import hubLogo from '@jetbrains/logos/hub/hub.svg';

import TableExmp from '../table/Table';
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
    <TableExmp columns={[{id: 'country',
      title: 'Country'}, {id: 'age', title: 'age'}]}
    />
  </div>
);

export default AppRoot;
