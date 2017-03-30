import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    console.log('Change the URL');
    // grab text
    console.log(this.storeInput.value);
    // routing
  }
  render (){
    // comment?
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        {/* Comment */}
        <h2>Enter Store</h2>
        <input required type="text" placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Send -></button>
      </form>
    )
  }
}

export default StorePicker;
