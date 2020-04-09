import React, { Component } from 'react'

const getStyles = (props, state) => {
  const styles = {
    root: {
      display: 'inline-block',
      borderRadius: 3,
      overflow: 'hidden',
      backgroundColor:
        state.isHovering || state.isPressing || state.isTouching
          ? '#026fc5'
          : '#2196f3',
    },
    button: {
      outline: 'none',
      border: 'none',
      display: 'inline-flex',
      verticalAlign: 'center',
      justifyContent: 'center',
      backgroundColor:
        state.isPressing || state.isTouching
          ? 'rgba(0,0,0,0.3)'
          : 'transparent',
      color: '#ffffff',
      padding: '8px 16px',
      fontSize: 15,
      cursor: state.isHovering ? 'pointer' : 'default',
    },
  }

  return styles
}

export default class InteractiveComponent extends Component {
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

    return this.props.onClick ? this.props.onClick() : null
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
  }

  handleOnTouchEnd = () => {
    this.setState({
      isTouching: false,
    })
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
    }

    return (
      <div style={styles.root} {...interactiveEvents}>
        <button style={styles.button}>
          {isPressing || isTouching
            ? "You're pressing me!"
            : isHovering ? 'Stop hovering me!' : 'Hover me!'}
        </button>
      </div>
    )
  }
}