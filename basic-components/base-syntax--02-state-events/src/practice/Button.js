import React, { Component } from 'react'
import EnhancedComponent from './EnhancedComponent'

const getStyles = (props, state) => {
  const styles = {
    root: {
      display: 'inline-block',
      borderRadius: 3,
      overflow: 'hidden',
      backgroundColor: '#026fc5',
    },
    button: {
      display: 'inline-flex',
      userSelect: 'none',
    },
    buttonContent: {
      padding: 6,
    },
    buttonIcon: {
      color: '#ffffff',
      fontSize: 15,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 15,
    },
  }

  return styles
}

export default class Button extends Component {
  handleOnClick() {
    alert('You Clicked Me!')
  }

  render() {
    const styles = getStyles()

    return (
      <div style={styles.root}>
        <div style={styles.button}>
          <EnhancedComponent
            onClick={() => {
              this.handleOnClick()
            }}
          >
            <div style={styles.buttonContent}>
              <span style={styles.buttonIcon}>&copy;</span>
              <span style={styles.buttonText}>Button</span>
            </div>
          </EnhancedComponent>
        </div>
      </div>
    )
  }
}