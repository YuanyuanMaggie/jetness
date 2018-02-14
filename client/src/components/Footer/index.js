import React from 'react';
import './index.css';

const FooterTop = () => (
    <div className="customer-service-banner clearfix">
        <div className="grid wrapper-large">
            <div className="col small-12 medium-6 chat-head-container">
                <div className="chat-head hide-small">
                    <img src="https://batman-assets.azureedge.net/1518048781345/img/footer_chat@2x.png" alt="Customer Service Image" className="chat-image"></img>
                </div>
                    <span>
                        <img src="https://batman-assets.azureedge.net/1518048781345/img/footer_chat.png" alt="Customer Service Image" className="inline-chat-image hide-large hide-medium mr1"></img>
                        <span className="h5 help-text-chat font-bold">Need help? Let's chat.</span>
                    </span>
                </div>
                <div className="col small-12 medium-6 customer-service-links-container">
                    <span className="area">
                        <i className="icon-phone mr1 hide-small"></i>
                        <a href="tel://1-855-538-4323" alt="+1 (855) 538-4323" className="h5 customer-service-link phone-link">1 (855) 538-4323</a>
                    </span>
                    <span className="hide-large hide-medium divider">|</span>
                    <span className="area">
                        <i className="icon-email mr1 hide-small"></i>
                        <a href="mailto:help@jet.com" alt="help@jet.com" className="h5 customer-service-link email-link">help@jet.com</a>
                    </span>
                    <span className="hide-large hide-medium divider">|</span>
                    <span>
                        <a href="/help-center/faq" alt="FAQ" className="h5 customer-service-link faq-link">FAQ</a>
                    </span>
                </div>
            </div>
        </div>
)

const FooterBottom = () => (
    <div className="footer bg-gray-2 border-top border-gray-3 pt4">
    <div className="wrapper-large">
        <div className="grid">
            <div className="col small-12 hide-medium hide-large">
                <div className="native-banner"></div>
            </div>
            <div className="col small-12 medium-3 hide-small">
                <dl className="company">
                    <dt className="h5 footer-title mb2">Company</dt>
                    <dd className="ml0 mb1"><a href="/about-us" alt="About Us" className="h5">About Us</a></dd>
                    <dd className="ml0 mb1"><a href="/careers" alt="Jet Careers" target="_blank" className="h5">Careers</a></dd>
                    <dd className="ml0 mb1"><a href="https://partner.jet.com/" target="_blank" alt="Sell on Jet" className="h5">Sell on Jet</a></dd>
                    <dd className="ml0 mb1"><a href="/affiliates" alt="Jet Affiliates" className="h5">Jet Affiliates</a></dd>
                    <dd className="ml0 mb1"><a href="/jetcares" alt="JetCares" className="h5">JetCares</a></dd>
                    <dd className="ml0 mb1"><a href="https://tech.jet.com/" alt="Tech Blog" target="_blank" className="h5">Tech Blog</a></dd>
                </dl>
            </div>
            <div className="col small-12 medium-3">
                <dl className="download hide-small">
                    <dt className="h5 footer-title mb2">Download</dt>
                    <dd className="ml0 mb1 ios">
                        <a target="_blank" href="https://itunes.apple.com/us/app/jet-app-online-shopping-deals/id950022424?mt=8&amp;ign-mpt=uo%3D2" data-store="apple" alt="Get the Jet.com app on Apple's App Store" className="h5">
                            <div className="sprite app_store_icons apple"></div>
                        </a>
                    </dd>
                    <dd className="ml0 mb1 android">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jet.jet.app" data-store="google" alt="Get the Jet.com app on Google's Play" className="h5">
                            <div className="sprite app_store_icons google"></div>
                        </a>
                    </dd>
                </dl>
            </div>
            <div className="col small-12 medium-3 p0">
                <dl className="social">
                    <dt className="h5 footer-title mb2">Social</dt>
                    <dd className="ml0 inline">
                        <a href="https://www.facebook.com/jet" alt="Jet on Facebook" target="_blank" className="h5">
                            <div className="inline-block"><span className="sr-only">facebook</span><i className="icon-social-facebook-circle"></i></div>
                        </a>
                    </dd>
                    <dd className="ml2 inline">
                        <a href="https://twitter.com/jet" alt="Jet on Twitter" target="_blank" className="h5">
                            <div className="inline-block"><span className="sr-only">twitter</span><i className="icon-social-twitter-circle"></i></div>
                        </a>
                    </dd>
                    <dd className="ml2 inline">
                        <a href="https://www.linkedin.com/company/jet-com" alt="Jet on LinkedIn" target="_blank" className="h5">
                            <div className="inline-block"><span className="sr-only">linkedin</span><i className="icon-social-linkedin-circle"></i></div>
                        </a>
                    </dd>
                    <dd className="ml2 inline">
                        <a href="https://www.instagram.com/jet/" alt="Jet on Instagram" target="_blank" className="h5">
                            <div className="inline-block"><span className="sr-only">instagram</span><i className="icon-social-instagram-circle"></i></div>
                        </a>
                    </dd>
                </dl>
                <dl>
                    <dt className="hide-large hide-medium h5 footer-title mb2">Refer a Friend</dt>
                    <dd className="hide-large hide-medium ml0 mb3"><a href="/referafriend" alt="Invite your friends" className="h5 referral-sign-up-link">Invite your friends</a></dd>
                    <dt className="h5 footer-title tips mb2">Tips, Tricks, and Life Hacks</dt>
                    <dd className="ml0"><a href="https://blog.jet.com" alt="Jet Blog" target="_blank" className="h5">Jet Blog</a></dd>
                </dl>
            </div>
            <div className="col small-12 medium-3 hide-small">
                <dl className="referrals">
                    <dt className="h5 footer-title mb2">Refer a Friend</dt>
                    <dd className="ml0 mb1">
                        <a href="/referafriend" alt="Invite your friends" className="h5 referral-sign-up-link">
                            <div className="media">
                                <div className="media-body">
                                    <div className="h5">Invite your friends</div>
                                </div>
                            </div>
                        </a>
                    </dd>
                </dl>
                <dl className="newsletter">
                    <dt className="h5 footer-title mb2">Get the Offers</dt>
                    <dd className="ml0 mb1">
                        <a href="#" alt="Sign up for our emails" id="email-sign-up" className="h5">
                            <div className="media">
                                <div className="media-left media-middle pr1">
                                    <div className="sr-only">email icon</div>
                                    <i className="icon-email"></i>
                                </div>
                                <div className="media-body">
                                    <div className="h5">Sign up for our emails</div>
                                </div>
                            </div>
                        </a>
                    </dd>
                </dl>
                <dl className="feedback">
                    <dt className="h5 footer-title mb2">Feedback</dt>
                    <dd className="ml0 mb1 mb2">
                        <a href="mailto:feedback@jet.com" alt="Send us your feedback" className="h5">
                            <div className="media">
                                <div className="media-left media-middle pr1">
                                    <div className="sr-only">at sign icon</div>
                                    <i className="icon-social-email"></i>
                                </div>
                                <div className="media-body">
                                    <div className="h5 feedback">Send us your feedback</div>
                                </div>
                            </div>
                        </a>
                    </dd>
                </dl>
            </div>
            <div className="col small-12 pb1">
                <div className="legal border-gray-3 border-top pt1 pb1">
                    <span className="h6 float-left text-gray-5">Copyright © 2017 Jet.com, Inc.<span data-version="3.434.1518048781345.026f7" className="hide-small">&nbsp;| Version: 3:434:1518048781345:026f7</span></span>
                    <h6 data-version="3.434.1518048781345.026f7" className="text-gray-5 m0 pt1 hide-medium hide-large">Version: 3:434:1518048781345:026f7</h6>
                    <a href="/privacy-notice" alt="Privacy Notice" className="h6 text-gray-5 float-right ml2 hide-small">Privacy Notice</a><a href="/terms-of-use" alt="Terms of Use" className="h6 text-gray-5 float-right hide-small">Terms of Use</a>
                </div>
            </div>
        </div>
    </div>
</div>
)

const Footer = () => (
    <div className="footer">
        <FooterTop />
        <FooterBottom/>
    </div>
)

export default Footer;