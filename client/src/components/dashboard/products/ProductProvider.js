import React,{createContext, useState} from 'react'

export const ProductContext = createContext({
    name: {}
})

export const ProductProvider = (props) => {
    const [data, setData]= useState({
        name: props.prod
    })
    return (
        <ProductContext.Provider value={data}>
          {props.children}
        </ProductContext.Provider>
    )
}


export default ProductProvider

// import React, {createContext, Component } from 'react'

// class ProductProvider extends Component {
//     state = {
//         name: "Putain de code"
//     }
//     render() {
//         return (
//         <ProductContext.Provider value={this.state}>
//           {this.props.children}
//         </ProductContext.Provider>
//         )
//     }
// }

// export default ProductProvider

