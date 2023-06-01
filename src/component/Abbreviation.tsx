import React from 'react';
import { MyButton } from './Button';
import Modal from './Modal';

export interface AbbreviationProps {
  text: string,
}

export class Abbreviation extends React.Component<AbbreviationProps> {
  state = { isHovered: false, isModalOpen: false, };

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
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: this.state.isHovered ? "1px solid  #F5F5F5" : '1px solid #4D4D4D',
        padding: '15px',
        borderRadius: '5px',
        margin: '16px',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          <label style={{
            position: 'relative',
            backgroundColor: '#171717',
            color: 'rgb(255, 255, 255)',
            padding: '0 10px',
            userSelect: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
            fontSize: 'inherit',
            lineHeight: '1.4375em',
            display: 'block'
          }}>
            {this.props.text}
          </label>

          <label style={{
            position: 'relative',
            backgroundColor: '#171717',
            color: 'rgba(255, 255, 255, 0.7)',
            padding: '0 10px',
            userSelect: 'none',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            fontSize: '0.857143rem',
            lineHeight: '1.4375em',
          }}>
            {this.props.text}
          </label>
        </div>

        <MyButton src="" onClick={() => { this.setState({ isModalOpen: true }); }}></MyButton>

        <Modal isOpen={this.state.isModalOpen} onClose={() => { this.setState({ isModalOpen: false }); }}>
          <h1>Modal Title</h1>
          <p>Modal Content</p>
          <button onClick={() => { this.setState({ isModalOpen: false }); }}>Close Modal</button>
        </Modal>

      </div>
    );
  }
}
