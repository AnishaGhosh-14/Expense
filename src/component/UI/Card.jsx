import React from 'react'
import "./card.css"

export default function Card(props) {
    const class_css = 'card ' + props.className;
  return (
    <>
    <div className={class_css}>{props.children}</div>
    </>
  )
}
