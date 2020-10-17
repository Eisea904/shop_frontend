import React from 'react'
import Items from './Item'

const ItemContainer = (props) => {

  let items = props.items.map(item => {
    return <Item key={item.name} item={item}/>
  })

  return (
    <section>
      <h2>Inventory</h2>
        <ul className="row">
          {item}
        </ul>
    </section>
  )
}

export default ItemContainer