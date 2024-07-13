import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from "react";
export const ContactusPAge = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        document.body.appendChild(script);
        // window.initMap = initMap;
    }, []);

    // function initMap() {
    //     var location = { lat: -25.344, lng: 131.036 }; // Replace with your desired location
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 10,
    //         center: location
    //     });
    //     var marker = new google.maps.Marker({
    //         position: location,
    //         map: map
    //     });
    // }
    return (
        <>
            <div className="contactus" id="contactus">
                <div className="innerContainer">
                    <div className="contactInfo df fdc">
                        <div className="contactusHead">
                            <h1>Contact Us</h1>
                            <p>For any queries, please contact us at</p>
                        </div>
                        <div className="contactdetials df fdc gap1r">
                            <p>premkumar.c@codeflink.in</p>
                            <p>+91 7477778845</p>
                        </div>
                        <div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6414679140294!2d76.94210277381569!3d11.06548428910137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858c3a0512731%3A0x6969b33a71907448!2sJothi%20Media!5e0!3m2!1sen!2sin!4v1720860003926!5m2!1sen!2sin"
                                width="600"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        {/* <div id="map">hai</div> */}
                        <div className="socialMedia">
                            <div className="contentWithicon df p1r">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <p>premkumar.c@codeflink.in</p>
                            </div>
                            <div className="icon">
                                <i className="fab fa-linkedin"></i>

                            </div>
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