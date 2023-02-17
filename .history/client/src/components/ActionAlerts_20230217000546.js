import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ActionAlerts({ messages, showAlert }) {
  const [open, setOpen] = React.useState(true);

  const messageArray = messages.map (message =><Alert key={message[0]} onClose={() => {}}>{message[1]}</Alert>)
  
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      { messageArray }
    </Stack>
  );
}

export default ActionAlerts;