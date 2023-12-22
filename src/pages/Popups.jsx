import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const ConfirmationPopups = () => {
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [openPopup3, setOpenPopup3] = useState(false);

  const handlePopup1Open = () => {
    setOpenPopup1(true);
  };

  const handlePopup2Open = () => {
    setOpenPopup2(true);
  };

  const handlePopup3Open = () => {
    setOpenPopup3(true);
  };

  const handleClose = (popupNumber) => {
    switch (popupNumber) {
      case 1:
        setOpenPopup1(false);
        break;
      case 2:
        setOpenPopup2(false);
        break;
      case 3:
        setOpenPopup3(false);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handlePopup1Open}>
        Open Popup 1
      </Button>
      <Button variant="contained" color="secondary" onClick={handlePopup2Open}>
        Open Popup 2
      </Button>
      <Button variant="contained" color="warning" onClick={handlePopup3Open}>
        Open Popup 3
      </Button>

      <Dialog open={openPopup1} onClose={() => handleClose(1)}>
        <DialogTitle>Confirmation Box 1</DialogTitle>
        <DialogContent>
          Are you sure you want to proceed with this action?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(1)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(1)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openPopup2} onClose={() => handleClose(2)}>
        <DialogTitle>Confirmation Box 2</DialogTitle>
        <DialogContent>
          Are you absolutely sure you wish to continue?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(2)} color="secondary">
            No
          </Button>
          <Button onClick={() => handleClose(2)} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openPopup3} onClose={() => handleClose(3)}>
        <DialogTitle>Confirmation Box 3</DialogTitle>
        <DialogContent>
          Do you want to proceed with this action?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(3)} color="warning">
            Dismiss
          </Button>
          <Button onClick={() => handleClose(3)} color="warning">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmationPopups;
