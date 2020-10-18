import React from 'react'
import ItemRow from './ItemRow'

const ItemContainer = (props) => {

  let renderItems = props.items.map((itemObj) => {
      return <ItemRow key={itemObj.itemName} item={itemObj}/>
    })
  


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Plot?</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Magical?</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Item Name</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Holder</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Price</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Weight</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Quantity</h3>
          </th>
        </tr>
        {renderItems}
      </tbody>
    </table>
  )
}

export default ItemContainer