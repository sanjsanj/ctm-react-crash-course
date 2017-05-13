import React, { PropTypes } from 'react';

import GuestList from './GuestList';
import BirthdayInfo from './BirthdayInfo';

const BirthdayContentPage = ({ guestList }) => (
  <div>
    <h1>Birthday Party</h1>
    <BirthdayInfo />
    <GuestList
      guestList={guestList}
    />
  </div>
);

BirthdayContentPage.propTypes = {
  guestList: PropTypes.array.isRequired,
};

const App = ({ startingGuestList }) => (
  <BirthdayContentPage
    guestList={startingGuestList}
  />
);

App.propTypes = {
  startingGuestList: PropTypes.array.isRequired,
};

App.defaultProps = {
  startingGuestList: [{
    name: 'First Person',
    brings: 'Champanhe',
  }, {
    name: 'Second Person',
    brings: 'Cake',
  }, {
    name: 'Third Person',
    brings: 'Beer',
  }],
};

export default App;
