import React, {Component} from 'react';
// import axios from 'axios';
import './GridBox.css';

class GridBox extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    // console.log("beerList", this.props.beersToDisplay)
    // return <div>.</div>

    return this.props.beersToDisplay.map((e,i) =>
      {
        return (
          <div className="beer-token" key={e.id}>
            {/* {console.log(e["image_url"])} */}
            <img className="beer-large" src={e.image_url} alt=""/>
            <p>{e.name}</p>
            {/* <FaveButton/>
            {
              <div onClick={()=> }>+</div>
            } */}
            <div className="add-to-favorites" onClick={() => this.props.addToFavesListFn(e.id)}>+</div>
          </div>
        )
      }
    ); //map
  }
}

export default GridBox;