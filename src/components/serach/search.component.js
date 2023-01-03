// import {Component} from 'react'

const SearchBox = (props) => {
    const { onchangeHandler } = props
    return (<input type="search" placeholder="search Monsters" onChange={onchangeHandler} />)
}

// --- class components

// class SearchBox extends Component{
//     render(){
//         return (<input type="search" placeholder="search Monsters" onChange={this.props.onchangeHandler} />)
//     }
// }

export default SearchBox