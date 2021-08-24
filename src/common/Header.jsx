import React,{ Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Blogdetails from '../components/Blogdetails';

class Header extends Component {
    render() {
        return(
            <div>
                <Router>
                    {/* <!-- Preloader Start --> */}
                    <div id="preloader-active">
                        <div class="preloader d-flex align-items-center justify-content-center">
                            <div class="preloader-inner position-relative">
                                <div class="preloader-circle"></div>
                                <div class="preloader-img pere-text">
                                    <img src="assets/img/logo/loder.jpg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <header>
                        {/* <!-- Header Start --> */}
                        <div class="header-area">
                                <div class="main-header  header-sticky">
                                    <div class="container-fluid">
                                        <div class="row align-items-center">
                                            {/* <!-- Logo --> */}
                                            <div class="col-xl-2 col-lg-2 col-md-1">
                                                <div class="logo">
                                                    <Link to="/"><img src="assets/img/logo/logo.png" alt=""></img></Link>
                                                </div>
                                            </div>
                                            <div class="col-xl-10 col-lg-10 col-md-10">
                                                <div class="menu-main d-flex align-items-center justify-content-end">
                                                    {/* <!-- Main-menu --> */}
                                                    <div class="main-menu f-right d-none d-lg-block">
                                                        <nav> 
                                                            <ul id="navigation">
                                                                <li><Link to="/">Home</Link></li>
                                                                <li><Link to="/about">About</Link></li>
                                                                <li><Link to="/services">Services</Link></li>
                                                                <li><Link to="/portfolio">Portfolio</Link></li>
                                                                <li><a href="#">Page</a>
                                                                    <ul class="submenu">
                                                                        <li><Link to="/blog">Blog</Link></li>
                                                                        <li><Link to="/blogdetails">Blog Details</Link></li>
                                                                        <li><a href="elements.html">Element</a></li>
                                                                        <li><a href="portfolio_details.html">Portfolio Details</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li><Link to="/contact">Contact</Link></li>
                                                            </ul>
                                                        </nav>
                                                    </div>
                                                    <div class="header-right-btn f-right d-none d-xl-block ml-20">
                                                        <a href="#" class="btn header-btn">Get Free Consultent</a>
                                                    </div>
                                                </div>
                                            </div>   
                                            {/* <!-- Mobile Menu --> */}
                                            <div class="col-12">
                                                <div class="mobile_menu d-block d-lg-none"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        {/* <!-- Header End --> */}
                    </header>

                    <Switch>
                        {/* Home Page route */}
                        <Route exact path="/" component={Home} />
                        {/* About Page route */}
                        <Route exact path="/about" component={About} />
                        {/* Service Page route */}
                        <Route exact path="/services" component={Services} />
                        {/* Portfolio Page route */}
                        <Route exact path="/portfolio" component={Portfolio} />
                        {/* Contact Page route */}
                        <Route exact path="/contact" component={Contact} />
                        {/* Blog Page route */}
                        <Route exact path="/blog" component={Blog} />
                        {/* Blog Details Page route */}
                        <Route exact path="/blogdetails" component={Blogdetails} />
                        

                        
                    </Switch>

                </Router>

                    
            </div>
        )
    }
}

export default Header