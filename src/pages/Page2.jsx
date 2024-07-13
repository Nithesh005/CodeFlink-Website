import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import bannerImage from '../assets/bannerImage.png'
import service1 from '../assets/service1.png'
import step1 from '../assets/step1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import MagneticEffect from '../componets/MagneticEffect';
// import MagneticEffect from '../componets/MagneticEffect';

const Page2 = () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    return (
        <div className="Service" id='services'>
            <div className='container df gap1r fdc' >
                <div className="col1">
                    <h1>Our Awesome Services</h1>
                    <div className='lorem'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua.
                    </div>
                    <img src={service1} alt="" width={500} />
                </div>
                <div className="col2">
                    <ul className='df fdc'>
                        <li className='df lists' data-aos="fade-left">
                            <div className="imageSession df jcc aic" style={{ width: '30%' , margin:'1rem'}}>
                                <img src={step1} alt=""/>
                            </div>
                            <div className="eqvaluteImg df fdc gap1r">
                                <b>Custom Software Development</b>
                                <div className="one">Tailor-made solutions to meet your unique business needs, leveraging the latest technologies for optimal performance.</div>

                            </div>
                        </li>
                        <li className='df lists' data-aos="fade-left">
                            <div className="imageSession df jcc aic" style={{ width: '30%' , margin:'1rem'}}>
                                <img src={s2} alt="" />
                            </div>
                            <div className="eqvaluteImg df fdc gap1r">
                                <b>Cloud Integration</b>
                                <div className="one">Seamlessly integrate and scale your operations with our robust cloud solutions, ensuring flexibility and reliability.</div>
                            </div>
                        </li>
                        <li className='df lists' data-aos="fade-left">
                            <div className="imageSession df jcc aic" style={{ width: '30%' , margin:'1rem'}}>
                                <img src={s3} alt="" />
                            </div>
                            <div className="eqvaluteImg df fdc gap1r">
                                <b>Mobile Application Development</b>
                                <div className="one">Protect your digital assets with our comprehensive security measures, safeguarding your startup from threats and vulnerabilities.</div>
                            </div>
                        </li>
                        {/* <li>
                            <div className="one">Protect your digital assets with our comprehensive security measures, safeguarding your startup from threats and vulnerabilities.</div>
                        </li> */}
                    </ul>
                </div>

                {/* 
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={service1}
                                        alt="service image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Service 1
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur sapiente repudiandae, iure corrupti fugiat quia delectus. Iure quidem modi aliquid provident, earum quod quasi libero dolores numquam aliquam harum.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid> */}

            </div>
            {/* <div className="bannerImage">
                <div className="bannerText" data-aos="fade-right">
                    Full Solution
                    for your Business
                    Development
                </div>
                <img src={bannerImage} alt="" height={500} width={500} data-aos="fade-in" data-aos-easing="ease-in-back" />
            </div> */}
        </div>
    );
};

export default Page2;
