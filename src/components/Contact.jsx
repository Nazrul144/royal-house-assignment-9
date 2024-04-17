import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Regal House | Contact Us</title>
            </Helmet>
            <section className="contact-us">
                <div className="contact-info">
                    <h2 className='font-bold'>Contact Us</h2>
                    <p>Thank you for your interest in Regal House. We value your demand, feedback, and requests, and we're here to assist you in any way we can. Please find our contact information below:</p>

                    <div className="phone-email font-bold ">
                        <h3>Phone:</h3>
                        <p>[+8801758752528]</p>
                        <h3>Email:</h3>
                        <p>[nazrulislam.cse28@gmail.com]</p>
                    </div>

                    <div className="customer-service-hours mb-6">
                        <h3 className='font-bold'>Customer Service Hours:</h3>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM [Time Zone]</p>
                        <p>Saturday & Sunday: Closed</p>
                    </div>



                    <div className="media-press-inquiries mb-6 font-bold">
                        <h3>Media & Press Inquiries:</h3>
                        <p>Members of the media seeking information about Regal House, press releases, or interview opportunities, please contact our media relations team at [Insert Email Address].</p>
                    </div>

                    <div className="connect-with-us mb-6 font-bold text-sky-400">
                        <h3>Connect With Us:</h3>
                        <p>Stay updated on the latest news, promotions, and design inspiration by following us on social media:</p>
                        <p>Facebook: [Insert Facebook Page Link]</p>
                        <p>Instagram: [Insert Instagram Profile Link]</p>
                        <p>Twitter: [Insert Twitter Profile Link]</p>
                    </div>

                

                    <p>Thank you for choosing Regal House. We look forward to serving you!</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;