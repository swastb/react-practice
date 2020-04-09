import React, { Component } from 'react'

const getStyles = (props, state) => {
  const styles = {
    cursor: state.isHovering ? 'pointer' : 'default',
    backgroundColor:
      state.isPressing || state.isTouching
        ? 'rgba(0,0,0,0.2)'
        : state.isHovering ? 'rgba(255,255,255,0.2)' : 'transparent',
    ...props.style,
  }

  return styles
}

export default class EnhancedButton extends Component {
  state = {
    isHovering: false,
    isPressing: false,
    isFocused: false,
    isTouching: false,
  }

  // Mouse Event Handlers

  handleOnMouseEnter = () => {
    this.setState({
      isHovering: true,
    })
  }

  handleOnMouseLeave = () => {
    this.setState({
      isHovering: false,
    })
  }

  handleOnMouseDown = () => {
    this.setState({
      isPressing: true,
    })
  }

  handleOnMouseUp = () => {
    this.setState({
      isPressing: false,
    })
  }

  // Touch Event Listeners

  handleOnTouchStart = () => {
    this.setState({
      isTouching: true,
    })

    return this.handleOnClick()
  }

  handleOnTouchEnd = () => {
    this.setState({
      isTouching: false,
    })
  }

  handleOnClick = () => {
    return this.props.onClick && this.props.onClick()
  }

  render() {
    const { isPressing, isHovering, isTouching } = this.state
    const styles = getStyles(this.props, this.state)

    const interactiveEvents = {
      onMouseEnter: this.handleOnMouseEnter,
      onMouseLeave: this.handleOnMouseLeave,
      onMouseDown: this.handleOnMouseDown,
      onMouseUp: this.handleOnMouseUp,
      onTouchStart: this.handleOnTouchStart,
      onTouchEnd: this.handleOnTouchEnd,
      onClick: this.handleOnClick,
    }

    return (
      <a {...this.props} style={styles} {...interactiveEvents}>
        {this.props.children}
      </a>
    )
  }
}