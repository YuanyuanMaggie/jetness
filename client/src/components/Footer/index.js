import React from 'react';
import './index.css';

const FooterTop = () => (
    <div className="customer-service-banner">
        <div className="text-center">
            <img className="chat-image" src="https://batman-assets.azureedge.net/1518048781345/img/footer_chat@2x.png" alt="Customer Service Image"/>
            <span className="h5 pl1">Need help? Let's chat.</span>
        </div>
        <div className="text-center">
            <span>
                <i className="icon-phone mr1 hide-small"></i>
                <a href="tel://1-855-538-4323" alt="+1 (855) 538-4323" className="h5 white">1 (855) 538-4323</a>
                <span className="hide-large hide-medium divider">|</span>
            </span>
            <span>
                <i className="icon-email mr1 hide-small"></i>
                <a href="mailto:help@jet.com" alt="help@jet.com" className="h5 white">help@jet.com</a>
                <span className="hide-large hide-medium divider">|</span>
            </span>
            <span>
                <a href="https://jet.com/help-center/faq" alt="FAQ" className="h5 white">FAQ</a>
            </span>
        </div>
    </div>
)

const FooterBottom = () => (
    <div className="footerBottom">
        <div className="social">
            <div className="h5 font-bold text-center mb2">Social</div>
            <span className="ml0">
                <a href="https://www.facebook.com/jet" alt="Jet on Facebook" target="_blank" className="h5">
                    <i className="icon-social-facebook-circle"></i>
                </a>
            </span>
            <span className="ml2">
                <a href="https://twitter.com/jet" alt="Jet on Twitter" target="_blank" className="h5">
                    <i className="icon-social-twitter-circle"></i>
                </a>
            </span>
            <span className="ml2 inline">
                <a href="https://www.linkedin.com/company/jet-com" alt="Jet on LinkedIn" target="_blank" className="h5">
                    <i className="icon-social-linkedin-circle"></i>
                </a>
            </span>
            <span className="ml2 inline">
                <a href="https://www.instagram.com/jet/" alt="Jet on Instagram" target="_blank" className="h5">
                    <i className="icon-social-instagram-circle"></i>
                </a>
            </span>
        </div>
        <div className="h5 font-bold text-center mb2">Refer a Friend</div>
        <a href="https://jet.com/referafriend" alt="Invite your friends" className="h5 referral-sign-up-link">Invite your friends</a>
        <div className="h5 font-bold text-center mb2">Tips, Tricks, and Life Hacks</div>
        <div className="ml0">
            <a href="https://blog.jet.com" alt="Jet Blog" target="_blank" className="h5">Jet Blog</a>
        </div>
    </div>
)

const Footer = () => (
    <div>
        <FooterTop />
        <FooterBottom/>
    </div>
)

export default Footer;