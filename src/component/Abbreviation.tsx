import { Fingerprint, MoreVert } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import React from 'react';

export interface AbbreviationProps {
  mainTitle: string,
  subTitle: string
  children: React.ReactNode,
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#171717',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column', 
  padding: 2,
  gap: 3 
};

export class Abbreviation extends React.Component<AbbreviationProps> {
  state = { isHovered: false, isModalOpen: false, };

  handleOpen = () => {
    this.setState({ isModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid #4D4D4D',
        padding: '15px',
        borderRadius: '5px',
        '&:hover': { border: "1px solid  #F5F5F5" }
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#F5F5F5" }}>
            {this.props.mainTitle}
          </Typography>
          <Typography id="modal-modal-description" sx={{ color: "#F5F5F5" }}>
            {this.props.subTitle}
          </Typography>
        </Box>

        <IconButton size="small" style={{color:'#F5F5F5'}}  onClick={() => { this.setState({ isModalOpen: true }); }}>
          <MoreVert/>
        </IconButton>

        <Modal
          open={this.state.isModalOpen}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "#F5F5F5" }}>
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: "#F5F5F5" }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            {this.props.children}
          </Box>
        </Modal>
      </Box>
    );
  }
}
