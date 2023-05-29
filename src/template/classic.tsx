import React from 'react';

export interface ClassicProps {
  src: string;
}

export class Classic extends React.Component<ClassicProps> {
  state = { isHovered: false };

  render() {
    return (
      <div>
          test
      </div>
    );
  }
}
