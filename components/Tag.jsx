/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import "./Tag.css";


  // eslint-disable-next-line no-unused-vars
  const Tag = ({tagName, selectTag, selected }) => {
    const tagStyle = {
      HTML:{backgroundColor: "#fda821"},
      CSS:{backgroundColor: "#15d4c8"},
      JAVASCRIPT:{backgroundColor: "#ffd12c"},
      REACT:{backgroundColor: "#4cdafc"},
      default:{backgroundColor: "#f9f9f9"},
    }
    return <button type="button" className='tag' 
    style={selected ? tagStyle[tagName]:tagStyle.default}
    onClick={()=>selectTag(tagName)}>{tagName}</button>;

  // eslint-disable-next-line react/prop-types
  }

export default Tag