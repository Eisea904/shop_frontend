import React from 'react'

const ItemRow = (props) => {
console.log(props)

let {plot, magical, itemName, description, holder, category, price, weight, quantity} = props.item
    return(
      <tr>
        <td>{plot}</td>
        <td>{magical}</td>
        <td>{itemName}</td>
        <td>{description}</td>
        <td>{holder}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{weight}</td>
        <td>{quantity}</td>
      </tr>
    )

}

export default ItemRow