import { Button, Chip, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Tooltip, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import '@fortawesome/fontawesome-free/css/all.min.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
// import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { V_Form, V_lname, V_mail, V_message, V_name, V_phoneNumber } from "../Utils/Validation";
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
    const handleEmailClick = () => {
        window.location.href = 'mailto:premkumar.c@codeflink.in';
    };
    const handlePhoneClick = () => {
        window.location.href = 'tel:+917477778845';
    };
    const formInput = {
        fname: '',
        lname: '',
        e_mail: '',
        phone_number: '',
        message: ''
    }
    const [formdata, setFormdta] = useState(formInput);
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdta({ ...formdata, [name]: value });
        name == 'fname' && setErrors({ ...errors, ...V_name(value) });
        name == 'lname' && setErrors({ ...errors, ...V_lname(value) });
        name == 'e_mail' && setErrors({ ...errors, ...V_mail(value) });
        name == 'phone_number' && setErrors({ ...errors, ...V_phoneNumber(value) });
        name == 'message' && setErrors({ ...errors, ...V_message(value) });
        // setbtnDisable(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({ ...errors, ...V_Form(formdata) });
        // console.log({ ...errors, ...V_Form(formdata) });
        const bool = Object.values({ ...errors, ...V_Form(formdata) }).every(e => e === null);
        if (bool) {
            // setLoading(true)
            ApiRequest();
        }
    }
    const ApiRequest = async () => {
        try {
            console.log("call api");
            // const res = await axios.post(`${SERVER_DOMAIN}mail/mailService`, formdata);
            // console.log(res.data);
            // if (res.data) {
            //     setFormdta(formInput);
            // }

        } catch (error) {
            console.error("Error sending mail:", error);
        }
        // setLoading(false);
    };

    return (
        <>
            <div className="contactus" id="contactus" data-aos="fade-up">
                <div className="innerContainer">
                    <div className="contactInfo df fdc">
                        <div className="contactusHead">
                            <h1>Contact Us</h1>
                            <p>For any queries, please contact us at</p>
                        </div>
                        <div className="contactdetials df fdc gap1r">
                            <Chip
                                icon={<PhoneIcon />}
                                label="+91 7477778845"
                                onClick={handlePhoneClick}
                                variant="outlined"
                            />
                            <Chip
                                icon={<EmailIcon />}
                                label="premkumar.c@codeflink.in"
                                onClick={handleEmailClick}
                                variant="outlined"
                            />

                        </div>
                        <div>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0179102457023!2d78.03679147379535!3d9.932466090169518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cebe2c8b277d%3A0xdc3d6c228cef6369!2sThendral%20Nagar%20Main%20Rd%2C%20Tamil%20Nadu%20625019!5e0!3m2!1sen!2sin!4v1720868634357!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0179102457023!2d78.03679147379535!3d9.932466090169518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cebe2c8b277d%3A0xdc3d6c228cef6369!2sThendral%20Nagar%20Main%20Rd%2C%20Tamil%20Nadu%20625019!5e0!3m2!1sen!2sin!4v1720868634357!5m2!1sen!2sin"
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
                            <Tooltip title="Mail" placement="top">
                                <Typography className="icon" component='a' href="mailto:premkumar.c@codeflink.in">
                                    <i className="fas fa-envelope"></i>
                                </Typography>
                                {/* <a href="mailto:premkumar.c@codeflink.in"></a> */}
                            </Tooltip>
                            <Tooltip title="Linkedin" placement="top">
                                <Typography className="icon" component='a' target="_blank" href="https://www.linkedin.com/company/code-flink">
                                    <i className="fab fa-linkedin"></i>
                                </Typography>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="form">
                        <div className="inputs df fdc" style={{ width: '200%' }}>
                            <div className="row1 df fdc gap1r" >
                                <TextField id="standard-basic" label="First Name" variant="standard" sx={{ width: '100%' }} onChange={handleChange} name='fname' helperText={errors.name} error={!!errors.name} />
                                <TextField id="standard-basic" label="Last Name" variant="standard" sx={{ width: '100%' }} onChange={handleChange} name='lname' helperText={errors.lname} error={!!errors.lname}  />
                            </div>
                            <div className="row2 df fdc gap1r">
                                <TextField id="standard-basic" type="email" label="Email" variant="standard" sx={{ width: '100%' }} onChange={handleChange} name='e_mail' helperText={errors.mail} error={!!errors.mail}/>
                                <TextField id="standard-basic" label="Phone Number" variant="standard" sx={{ width: '100%' }} onChange={handleChange} name='phone_number' helperText={errors.phoneNumber} error={!!errors.phoneNumber}/>
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
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                id="filled-textarea"
                                label="Message"
                                placeholder="Write your message"
                                multiline
                                variant="standard"
                                onChange={handleChange} name='message' helperText={errors.message} error={!!errors.message}
                            />
                            <div className="submitbtn df jce">
                                <Button variant="outlined"
                                    // endIcon={<SendIcon />}
                                    sx={{ width: 'fit-content' }}
                                    onClick={handleSubmit}
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