import React from 'react'
import Main from './Main'

function Wrapper(props){
    const style = {
        backgroundColor: 'yellow'
    };
    return(
        <div style={style}>
            {props.children}
        </div>
    );
}

export default Wrapper;