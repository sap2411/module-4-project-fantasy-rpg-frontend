import React, { Component } from "react";


const BattleLog = (props) => {

    const renderLog = () => {
        console.log(props.log)
        return props.log.map(string => <p>{string}</p>)
    }


    return (
        <div className="ui segment">
            {renderLog()}
        </div>
    );

}

export default BattleLog;