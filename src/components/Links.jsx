import React from 'react'

function Links() {

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="links">{items.map(item => (<a href={`#${item}`} key={item}></a>))}</div>
  )
}

export default Links;