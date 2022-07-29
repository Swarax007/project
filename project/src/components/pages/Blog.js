import React from "react";
import './style_blog.css';


const Blog = () => {
  return (
    <>

    <section class="abt">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="wrapper">
                                    <h2>Blogs</h2>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>

    <section className="bg-04">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="heading">
                    <i className="flaticon-insurance"></i>
                    <span>Givingness is Godliness</span>
                    <h2>Service to others is the rent you pay for your room here on earth</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-sm-6">
                <div className="wrapper">
                    <article>
                        <div className="image-blog">
                            <div className="image-items"></div>
                            <div className="date">
                                12<span>March</span>
                            </div>
                        </div>
                        <div className="content">
                            <span>Your Story</span>
                            <h3>NGO's serving people amid COVID</h3>
                            <p> 
Recently in November 2021, Health Minister Mansukh Mandaviya lauded the work of NGOs and civil society organisations during the Covid crisis.</p>
                            <a href=" https://yourstory.com/socialstory/2022/01/meet-5-ngos-exemplary-work-covid-pandemic-goonj/amp ">Read More</a>
                        </div>
                    </article>
                </div>
            </div>

            <div className="col-md-6 col-sm-6">
                <div className="wrapper">
                    <article>
                        <div className="image-blog">
                            <div className="image-items aa"></div>
                            <div className="date">
                                1<span>October</span>
                            </div>
                        </div>
                        <div className="content">
                            <span>Times of India</span>
                            <h3>NGO's - The backbone for millions of families </h3>
                            <p> Since then, NGOs have been working relentlessly on the ground and providing critical services to vulnerable groups of people. They have been supporting the government and identifying the coronavirus hotspots.</p>
                            <a href="https://timesofindia.indiatimes.com/blogs/voices/the-role-of-ngos-ensuring-commitment-to-social-responsibility-amidst-the-covid-19-pandemic/">Read More</a>
                        </div>
                    </article>
                </div>
            </div>

            <div className="col-md-6 col-sm-6">
                <div className="wrapper">
                    <article>
                        <div className="image-blog">
                            <div className="image-items bb"></div>
                            <div className="date">
                                11<span>June</span>
                            </div>
                        </div>
                        <div className="content">
                            <span>Give India</span>
                            <h3>Impactful work by NGO's</h3>
                            <p>The Indian government also appealed to nearly 92,000 NGOs for assistance in identifying the Coronavirus hotspots and providing critical services to vulnerable groups of people including the elderly and children, persons with disabilities, transgender persons, the homeless, daily wage workers, migrant workers and urban poor families. </p>
                            <a href="https://www.giveindia.org/blog/ngos-and-their-critical-role-in-the-covid-19-crisis/">Read More</a>
                        </div>
                    </article>
                </div>
            </div>

            <div className="col-md-6 col-sm-16">
                <div className="wrapper">
                    <article>
                        <div className="image-blog">
                            <div className="image-items cc"></div>
                            <div className="date">
                                12<span>March</span>
                            </div>
                        </div>
                        <div className="content">
                            <span>Business Standard</span>
                            <h3>Donation drive spurs In COVID-19</h3>
                            <p> The average amount of individual donations to philanthropy in India went up by 43% during the pandemic, says a report released on September 24 by the Charities Aid Foundation (CAF), a global non-profit, based on online surveys of 2,000 Indians across cities. More than 60% of respondents said the government and businesses should have contributed more to charitable causes during the pandemic.</p>
                            <a href="https://www.business-standard.com/article/current-affairs/in-2020-the-year-of-covid-19-indians-donated-43-more-survey-121092400295_1.html">Read More</a>
                        </div>
                    </article>
                </div>
            </div>

           
        </div>
    </div>
    </section>
    </>
    
  );
}

export default Blog;