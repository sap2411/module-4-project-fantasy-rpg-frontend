import React from "react";


const BattleLog = (props) => {

    const renderLog = () => {
        if (props.log.length > 5) return props.log.slice(0, 5).map(string => <p>{string}</p>)
        return props.log.map(string => <p>{string}</p>)
    }


    return (
        <div className="jumbotron col-8 rounded-lg bg-white py-2 text-muted text-center">
            {renderLog()}
        </div>
    );

}

export default BattleLog;