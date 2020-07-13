import React from 'react';

class Column extends React.Component {

    state = {
        //key : '',
        height : 0,
        className : "bar"

      }
  
    render() {
        return (
            <div className={this.props.className} id={this.key} key={this.key} style={{height:this.props.height}}>
                {this.props.pos}                
            </div>
        )
    }
  }


export default Column;
