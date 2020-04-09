import React,{Component} from 'react'

class StatelessComponentWithClass extends Component{

  render(){
    console.log('Inside StatelessComponentWithClass');
    return (
      <div onClick={this.props.onClick}>
        <div>{this.props.title}</div>
        <div>{this.props.subtitle}</div>
      </div>
    )
  }

}


export default StatelessComponentWithClass