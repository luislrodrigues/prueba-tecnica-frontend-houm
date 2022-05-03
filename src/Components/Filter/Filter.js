import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";

export default function Filter({ handleChangeGender, handleChangeStatus }) {
    return (
        <Box>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Gender</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            onChange={handleChangeGender}
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio/>}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="unknown"
                                control={<Radio />}
                                label="unknown"
                            />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Status</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue=""
                            name="radio-buttons-group"
                            onChange={handleChangeStatus}
                        >
                            <FormControlLabel
                                value="alive"
                                control={<Radio />}
                                label="alive"
                            />
                            <FormControlLabel
                                value="dead"
                                control={<Radio />}
                                label="dead"
                            />
                            <FormControlLabel
                                value="unknown"
                                control={<Radio />}
                                label="unknown"
                            />
                        </RadioGroup>
                    </FormControl>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
