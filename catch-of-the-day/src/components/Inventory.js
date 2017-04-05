import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render (){
    // comment?
    return (
      <div>
        <h2>Inventario</h2>
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Samples</button>
      </div>
    )
  }
}

export default Inventory;
