import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import '@fortawesome/fontawesome-free/css/all.min.css';
export const ContactusPAge = () => {
    return (
        <>
            <div className="contactus" id="contactus">
                <div className="innerContainer df">
                    <div className="contactInfo df fdc">
                        <div className="contactusHead">
                            <h1>Contact Us</h1>
                            <p>For any queries, please contact us at</p>
                        </div>
                        <div className="contactdetials df fdc gap1r">
                            <p>info@mywebsite.com</p>
                            <p>+91 9876543210</p>
                        </div>
                        <div className="socialMedia">
                            {/* <div className="icon">
                                <i className="fab fa-instagram"></i>
                            </div> */}
                            <div className="icon">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="icon">
                                <i className="fab fa-linkedin"></i>
                            </div>
                            {/* <div className="icon">
                                <i className="fab fa-facebook"></i>
                            </div> */}
                        </div>
                    </div>
                    <div className="form">
                        <div className="inputs df" style={{ width: '100%' }}>
                            <div className="row1" >
                                <TextField id="standard-basic" label="First Name" variant="standard" sx={{ width: '100%' }} />
                                <TextField id="standard-basic" label="Last Name" variant="standard" sx={{ width: '100%' }} />
                            </div>
                            <div className="row2">
                                <TextField id="standard-basic" type="email" label="Email" variant="standard" sx={{ width: '100%' }} />
                                <TextField id="standard-basic" label="Phone Number" variant="standard" sx={{ width: '100%' }} />
                            </div>
                        </div>
                        <div className="messageDiv df fdc gap1r">
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Select Subject</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel value="female" control={<Radio />} label="General Enquiry" />
                                    <FormControlLabel value="male" control={<Radio />} label="Feedback" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    {/* <FormControlLabel
                                        value="disabled"
                                        disabled
                                        control={<Radio />}
                                        label="other"
                                    /> */}
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                id="filled-textarea"
                                label="Message"
                                placeholder="Write your message"
                                multiline
                                variant="standard"
                            />
                            <div className="submitbtn df jce">
                                <Button variant="outlined"
                                    // endIcon={<SendIcon />}
                                    sx={{ width: 'fit-content' }}
                                >
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}