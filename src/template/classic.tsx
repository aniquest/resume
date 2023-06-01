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
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
            <Box sx={{
              backgroundColor: '#E5EFF9',
              width: '30%',
              height: '100%',
            }}>
              <Typography id="modal-modal-description" sx={{ color: "#000000" }}>
                test
              </Typography>
            </Box>
            <Box sx={{
              backgroundColor: '#FFFFFF',
              width: '10%',
              height: '100%',
            }}>

            </Box>

          </Box>
        </ResizableBox>

      </Draggable>

    );
  }
}
