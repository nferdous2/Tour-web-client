import React from 'react';
import Services from '../../Pages/Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import './Home.css'
import { faCampground, faGifts, faHome, faMoneyBill, faQuestionCircle, faShuttleVan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuilded } from '@fortawesome/free-brands-svg-icons';
import { Card, CardGroup } from 'react-bootstrap';
const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            {/* camping */}
            <div>
                <div className="text-center col-mb-6 camp" id="camping">
                    <div className="m-5">
                        <h1 className="fs-1"><span className="title">W</span>elcome <span className="title">T</span>o <span className="title">W</span>onderer <span className="title">C</span>amping <span className="title">G</span>round</h1>
                        <p className="m-5 fs-4">
                            We are here to make your tour most comfortable,and want to make you tour more beautiful,and we will try our best to satisfie you with our service.
                        </p>
                    </div>
                    <div className="d-flex justify-content-evenly icons-div">
                        <div className="camp-icons">
                            <h1> <FontAwesomeIcon icon={faShuttleVan} />
                            </h1>
                            <p>30 CAMPER SITES</p>
                        </div>
                        <div className="camp-icons">
                            <h1><FontAwesomeIcon icon={faShuttleVan} /></h1>
                            <p>25 CARAVAN SITES*</p>
                        </div>
                        <div className="camp-icons">
                            <h1><FontAwesomeIcon icon={faCampground} /></h1>
                            <p>50 TENT SITES</p>
                        </div>
                        <div className="camp-icons">
                            <h1>
                                <FontAwesomeIcon icon={faHome} />
                            </h1>
                            <p>10 CABIN HOUSES</p>
                        </div>
                    </div>
                </div>
                <CardGroup xs={1} md={3} >
                    <Card className='p-3 cardsAdd'>
                        <Card.Img style={{ height: '12rem' }} variant="top" src="https://koa.com/content/images/ways-to-stay/tent/03-benefits-tent-camping.jpg"
                        />
                        <Card.Body>
                            <Card.Title>OUR TOP TENT CAMPING TIPS.</Card.Title>
                            <Card.Text>
                                Tent camping is an escape from the busyness of our lives that takes
                                us on adventures in the beautiful outdoors where we can disconnect
                                from technology and reconnect with Mother Nature.However, in order
                                to make your camping trip comfortable, and thus, enjoyable, you need
                                to know what you’re doing and have the right gear. Otherwise, your
                                vision of the perfect camping trip may, in reality, be a nightmare
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='p-3 cardsAdd'>
                        <Card.Img style={{ height: '12rem' }} variant="top" src="https://www.roamingtimes.com/wp-content/uploads/2020/01/2020-Travel-Trailers.jpg"
                        />
                        <Card.Body>
                            <Card.Title>
                                Trailers and RV spots</Card.Title>
                            <Card.Text>
                                ou’ve purchased or rented an RV and have chosen a route, but now
                                what? You’ll need to plan ahead for where you’ll park your RV during
                                your travels. If you’ve never gone RVing before, this can feel a
                                little overwhelming. Sure, you can Google “RV parks in [add
                                location]”, but do you want to know how a full-time RVer finds the
                                BEST spots? How about FREE spots?Well, you’re in the right place.
                                Based on our personal travels, I have put together the ultimate
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='p-3 cardsAdd'>
                        <Card.Img style={{ height: '12rem' }} variant="top" src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_14/3462489/210406-camping-tent-bd-2x1.jpg"
                        />
                        <Card.Body>
                            <Card.Title>Trailers and RV spots</Card.Title>
                            <Card.Text>
                                ou’ve purchased or rented an RV and have chosen a route, but now
                                what? You’ll need to plan ahead for where you’ll park your RV during
                                your travels. If you’ve never gone RVing before, this can feel a
                                little overwhelming. Sure, you can Google “RV parks in [add
                                location]”, but do you want to know how a full-time RVer finds the
                                BEST spots? How about FREE spots?Well, you’re in the right place.
                                Based on our personal travels, I have put together the ultimate
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
            );
            {/* service section */}
            <Services />

            {/* choose us  */}
            <div className='choose-us'>
                <h3>Why Choose Us <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon></h3>
                <div className="row pt-5 text-success">
                    <div className="col-md-3 m-2 choose-body">
                        <h4>We Provide Guide</h4>
                        <FontAwesomeIcon icon={faGuilded}></FontAwesomeIcon>
                    </div>
                    <div className="col-md-3 m-2 choose-body">
                        <h4>Payment After Taking services</h4>
                        <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                    </div>
                    <div className="col-md-3 m-2 choose-body">
                        <h4>Often Offer Discount </h4>
                        <FontAwesomeIcon icon={faGifts} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;