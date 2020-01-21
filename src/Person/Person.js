import React from 'react'

var person = (props)=>{
    return (
        <div>
            <p>I'm a { props.name } and I am { props.age } yrs old.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;