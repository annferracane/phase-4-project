import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ActionAlerts({ messages }) {
  const messageArray = messages.map (message =><div key={error}>{ error[1] }</div>)
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    </Stack>
  );
}

export default ActionAlerts;