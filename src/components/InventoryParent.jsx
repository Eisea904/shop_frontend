import React from 'react'
import ItemContainer from './ItemContainer'
// import FilterDropdown from './FilterDropdown'
// import FormAddItem from './FormAddItem'

// let itemsLink = "http://localhost:3000/items"
// let partiesLink = "http://localhost:3000/parties"
// let inventoriesLink = "http://localhost:3000/inventories"

class InventoryParent extends React.Component {

  state = {
      items: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/items") 
    .then(res => res.json())
    .then(arrayOfItems => {
      this.setState({
        items: arrayOfItems
      })
    })
  }

  render() {
    return (
      <main>
        {/* <FilterDropdown/> */}
        <ItemContainer items={this.state.items}/>
        {/* <FormAddItem/> */}
      </main>
    )
  }
}

export default InventoryParent 