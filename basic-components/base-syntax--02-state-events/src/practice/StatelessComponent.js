import React from 'react'

const StatelessComponent = ({ title, subtitle, onClick }) =>
  <div onClick={onClick}>
    <div>{title}</div>
    <div>{subtitle}</div>
  </div>

// or

const StatelessComponentWithInsideFunction = props => {
  //const { title, subtitle, onClick } = props
  
  return (
    <div onClick={props.onClick}>
      <div>{props.title}</div>
      <div>{props.subtitle}</div>
    </div>
  )
}

export default StatelessComponent