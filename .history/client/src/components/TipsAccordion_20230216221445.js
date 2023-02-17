import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Chip from '@mui/material/Chip';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function TipsAccordion({ tips }) {
  let panelState = null;
  
  if (tips.length > 0) {
    panelState = `panel${tips[0].id}`;
  } 

  const addTipButton = (
    <></>

  );

  const [expanded, setExpanded] = React.useState(panelState);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const tipsArray = tips.map(tip => {
    return (
      <Accordion key={ `tip-${tip.id}` } expanded={expanded === `panel${tip.id}`} onChange={handleChange(`panel${tip.id}`)}>
        <AccordionSummary aria-controls={`panel${tip.id}d-content`} id={`panel${tip.id}d-header`}>
          <Typography>CIP #{ tip.id } { tip.title }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          { tip.content }
          </Typography>
          <br></br>
          <Stack direction="row" spacing={1}>
            <Chip label={tip.on_or_of_campus ? "On Campus" : "Off Campus"} color="secondary" />
            <Chip label={tip.category} color="success" />
          </Stack>
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <div>
      { tips.length > 0 ? tipsArray : <h3>None yet! Add a tip!</h3> }
    </div>
  );
}

export default TipsAccordion;