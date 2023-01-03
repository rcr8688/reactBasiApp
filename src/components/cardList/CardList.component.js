import { Component } from 'react'


const CardList = ({ filteValues }) => (
    <div>
        {filteValues?.map((item, i) =>
            (<h1 key={i}>{item.name}</h1>)
        )}
    </div>
)


// class CardList extends Component {

//     render() {
//         const { filteValues, anything } = this.props
//         return (
//             <div>
//                 {filteValues?.map((item, i) =>
//                     (<h1 key={i}>{item.name}</h1>)
//                 )}
//             </div>
//         )
//     }
// }


export default CardList;
