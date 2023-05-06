import React from 'react'


const PrintListItemOnDisplay = () => {

    const list = [{'id': 1, name: 'Gourav'},
                  {'id': 2, name: 'sam'},{'id': 3, name: 'avi'},{'id': 4, name: 'ravi'},{'id': 5, name: 'mogambo'},{'id': 6, name: 'jack'},{'id': 7, name: 'oggy'},{'id': 8, name: 'olly'},]

    const items = list.map((item,id) => (<li key={id} >{item.id + " " + item.name}</li>))

  return (
    <ul>{items}</ul>
  )
}

export default PrintListItemOnDisplay