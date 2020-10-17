import React from 'react'
import ItemContainer from './ItemContainer'
import FilterDropdown from './FilterDropdown'
import FormAddItem from './FormAddItem'

let link = "backend server link"

class InventoryParent extends Component {

  state = {
      items: []
  }

  componentDidMount(){
    fetch(link)
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
        <FilterDropdown/>
        <ItemContainer items={this.state.items}/>
        <FormAddItem/>
      </main>
    )
  }
}

export default InventoryParent 