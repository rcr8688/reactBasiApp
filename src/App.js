// import { Component } from 'react'
import { useState, useEffect } from 'react'
import CardList from './components/cardList/CardList.component'
import './App.css';
import SearchBox from './components/serach/search.component';

const App = () => {
  const [searchFiled, setSearchField] = useState('')
  const [title, setTitle] = useState('')
  const [master, setmaster] = useState([])
  const [filteredValues, setfilteredValues] = useState(master)

  const searchFileds = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase()
    setSearchField(searchValue)
  }
  const searchtitleFileds = (event) => {
    const searchValue = event.target.value.toLocaleLowerCase()
    setTitle(searchValue)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setmaster(users))
  }, []) // here we have empty array bsz of that it will execute only once 

  useEffect(() => {
    const newFilteredArray = master.filter((value) => {
      return value.name.toLocaleLowerCase().includes(searchFiled)
    })
    setfilteredValues(newFilteredArray)
  }, [searchFiled, master])          // searchfiled master values changes only use effect will execute 

  return (
    <div>
     <h1> {title}</h1>
      <SearchBox onchangeHandler={searchFileds}></SearchBox><br></br>
      <SearchBox onchangeHandler={searchtitleFileds}></SearchBox>
      <CardList filteValues={filteredValues} />
    </div>
  )
}

// ---------------------------- class based component --------------------------------


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "ravi",
//       toggle: true,
//       master: [{ name: "chandra" }, { name: "prathap" }, { name: "reddy" }, { name: "yadiki" }],
//       searchValue: ""
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return { master: users }
//       }, () => {
//         console.log(users)
//       }))
//   }

//   searchFileds = (event) => {
//     const searchValue = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchValue }
//     })
//   }

//   changesName = () => { this.state.toggle ? this.setState({ name: "chandra", toggle: !this.state.toggle }) : this.setState({ name: "ravi", toggle: !this.state.toggle }); console.log(this.state.name) }

//   render() {

//     const { master, searchValue } = this.state
//     const { searchFileds, changesName } = this
//     const filteredValues = master.filter((value) => {
//       return value.name.toLocaleLowerCase().includes(searchValue)
//     })

//     return (<div className="App">
//       <p>
//         hi {this.state.name}
//       </p>
//       <button onClick={changesName}>change Name</button> <br></br>
//       <SearchBox onchangeHandler={searchFileds}></SearchBox>
//       <CardList filteValues={filteredValues} />
//     </div>)
//   }
// }

export default App;
