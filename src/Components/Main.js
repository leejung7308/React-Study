import React from "react";
import PropTypes from "prop-types"

function Main({name, color}){
    return(
    <div>
        <main>
            <h1 style={{color}}>안녕하세요, {name}입니다.</h1>
        </main>
    </div>
    );
}

Main.propTypes = {
    name: PropTypes.string
}

Main.defaultProps = {
    name: '이정',
    color: 'blue'
}
export default Main;