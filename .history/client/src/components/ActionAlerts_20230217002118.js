import * as React from 'react';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';



function ActionAlerts({ messages }) {
  const [open, setOpen] = React.useState(true);

  const messageArray = messages.map (message =><Alert key={message[0]} action={ <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }} > <CloseIcon fontSize="inherit" /> </IconButton> } sx={{ mb: 2 }}>{message[1]}</Alert></Collapse>)
  
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
    <Collapse in={open}>
      { messageArray }
    </Collapse>
    </Stack>
  );
}

export default ActionAlerts;