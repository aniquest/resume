import { Box, Typography } from '@mui/material';
import React from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

export interface ClassicProps {
  src: string;
}

export class Classic extends React.Component<ClassicProps> {
  state = { isHovered: false };

  render() {
    return (
      <Draggable>
        <ResizableBox width={210} height={297} minConstraints={[100, 100]} maxConstraints={[300, 300]}>
          <Box sx={{
            width: '210mm',
            height: '297mm',
            backgroundColor: 'white'
          }}>
            <Typography id="modal-modal-description" sx={{ color: "#F5F5F5" }}>
              test
            </Typography>
          </Box>
        </ResizableBox>

      </Draggable>

    );
  }
}
