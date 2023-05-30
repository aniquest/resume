import React from 'react';

export interface InputProps {
  title: string;
  text: string,
  onChange: (text: string) => void;
}

export class MyInput extends React.Component<InputProps> {
  state = { isHovered: false };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: this.state.isHovered ? "1px solid  #F5F5F5" : '1px solid #4D4D4D',
        padding: '5px',
        borderRadius: '5px',
        margin: '16px',
        position: 'relative'
      }}>
        <label style={{
          position: 'relative',
          top: '-1rem',
          backgroundColor: '#171717',
          color: 'rgba(255, 255, 255, 0.7)',
          padding: '0 10px',
          userSelect: 'none',
          fontFamily: 'Inter, sans-serif',
          fontWeight: '400',
          fontSize: '0.857143rem',
          lineHeight: '1.4375em',
        }}>
          {this.props.title}
        </label>
        <input
          style={{
            backgroundColor: 'transparent',
            color: "white",
            border: 'transparent',
            userSelect: 'none',
            width: '100%',
            height: '30px',
            outline: 'none',
            boxShadow: 'none',
          }}
          value={this.props.text}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onChange={(e) => { this.props.onChange(e.target.value) }}
        />
      </div>
    );
  }
}
