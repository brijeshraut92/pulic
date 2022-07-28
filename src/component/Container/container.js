import React from 'react'
import "./container.scss";
export default function container(props) {
  return (
    <div className="container">{props.children}</div>
  )
}
