import React from 'react';

class NowScreening extends React.Component{
    render(){
        return(
            <div id="now-screening">
                <strong className="showing">Now Showing</strong>
                <div className="film">
                    <p>Bombshell</p>
                    <p>Darbar</p>
                    <p>Hero</p>
                    <p>Chhapaak</p>
                </div>
            </div>
        );
    }
}
export default NowScreening;