import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';
import { FaFacebook, FaGit, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it works</
                            FooterLink>
                            <FooterLink to="/signin">Testimonials</
                            FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Term of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Term of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">About us</FooterLink>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Term of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            NeuroWeb
                        </SocialLogo>
                        <WebsiteRights>
                            NeuroWeb {new Date().getFullYear()}
                            <> </>All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' arial-label='Telegram'>
                                <FaTelegram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='GitHub'>
                                <FaGit />
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label='YouTube'>
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer