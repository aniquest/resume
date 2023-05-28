import React from 'react';

export interface ButtonProps {
  src: string;
  onClick: () => void;
}

export class MyButton extends React.Component<ButtonProps> {
  state = { isHovered: false };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    return (
      <button
        style={{
          backgroundColor: this.state.isHovered ? "#373737" : 'transparent',
          color: "white",
          border: 'transparent',
          userSelect: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
        }}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.props.onClick}
      >
        <img src={this.props.src} />
      </button>
    );
  }
}
