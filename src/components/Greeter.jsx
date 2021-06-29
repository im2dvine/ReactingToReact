import React from 'react'


/******"normal" way*******/
let Greeter = props => {
    return (
        <div>
            <h1>{props.phrase}, {props.name}!</h1>
        </div>
    )
}



/******destructured way*******/
// let Greeter = ({ phrase, name }) => {
//     return (
//         <div>
//             <h1>{phrase}, {name}!</h1>
//         </div>
//     )
// }

export default Greeter;