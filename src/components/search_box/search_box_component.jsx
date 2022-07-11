import { Component } from "react";
import './search-box.css'

class SearchBox extends Component {
  render(){
    const {search} = this.props
    return(
        <div>
            {<input className={`search-box ${this.props.className}`} type="search" placeholder={this.props.placeholder} onChange={search}/> }
        </div>
    )
  }
}

export default SearchBox