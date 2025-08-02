import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { useModal } from '@pancakeswap/uikit'
import { Link, useLocation } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { FormattedMessage } from 'react-intl'
import ConnectWalletButton from 'components/ConnectWalletButton'
import AccountWalletButton from 'components/AccountWalletButton'
import { useTranslation } from 'contexts/Localization'
import { languageList } from 'config/localization/languages'
import { StyledText, SubmitButton } from 'components/GlobalStyle'
import LoginModal from 'views/Login'
import { useTokenAuth } from 'hooks/useTokenAuth'
import { useSocialLinks } from 'views/Home/hooks/useSocial'
import LangSelector from '../LangSelector'
// import NetworkSelector from './NetworkSelector'

const StyledI = styled.i`
  color: var(--textYellow);
`

const StyledMobileImg = styled.img`
  @media only screen and (max-width: 767px) {
    display: none;
  }
`

const Menu = () => {
  const { account } = useWeb3React()
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")

  const [showMenu, setshowMenu] = useState(false)

  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }

  const { t, setLanguage, currentLanguage } = useTranslation()

  const [onLoginModal] = useModal(<LoginModal />)

  const initSocialLinks = useMemo(() => ({
    "gitbook": "",
  }), [])
  const [socialLinks, setSocialLinks] = useState(initSocialLinks)
  const { onSocialLinks: handleSocialLinks } = useSocialLinks()

  useEffect(() => {
    const getSocialLinks = async () => {
      const result = await handleSocialLinks()
      if (result.error === false) {
        setSocialLinks(result.data)
      } else {
        setSocialLinks(initSocialLinks)
      }
    }
    getSocialLinks()
  }, [handleSocialLinks, initSocialLinks])

  return (
    <>
      <div id='navbar' className='navbar-area'>
        <div className='raimo-responsive-nav'>
          <div className='container'>
            <div className='raimo-responsive-menu'>
              <div role='presentation' onClick={() => toggleMenu()} className='hamburger-menu'>
                {showMenu ? (
                  <StyledI className='bx bx-x' />
                ) : (
                  <StyledI className='bx bx-menu' />
                )}
              </div>
              <div className='logo'>
                <a href='/home'>
                  <StyledMobileImg src='/images/logo.png' alt='logo' style={{ maxWidth: '120px' }} />
                </a>
              </div>
              <div className='responsive-others-option'>
                <div className='d-flex align-items-center'>
                  {/* <div className='option-item'>
                    <NetworkSelector />
                  </div> */}
                  <div className='option-item'>
                    {/* {!account ? <ConnectWalletButton /> : <AccountWalletButton account={account} />} */}
                    {/* {tokenValidity === false ?
                      <SubmitButton bgColorCode="var(--blackColor)" borderRadius="90px" width="auto" marginTop="0" onClick={() => onLoginModal()} >
                        <StyledText textTransform='uppercase' colorCode='var(--whiteColor)' >
                          {t("Log In")}
                        </StyledText>
                      </SubmitButton>
                      :
                      <SubmitButton bgColorCode="transparent" borderRadius="90px" width="auto" marginTop="0" onClick={() => onLoginModal()} >
                        <StyledText colorCode='var(--textBlue)'>
                          {t("My Account")}
                        </StyledText>
                      </SubmitButton>
                    } */}
                  </div>
                  <div className='option-item'>
                    <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className={showMenu ? 'show navbar navbar-expand-md navbar-light' : 'navbar navbar-expand-md navbar-light hide-menu'}>
          <div className='container'>
            <a href='/home' className='navbar-brand'>
              <img src='/images/logo.png' alt='logo' style={{ maxWidth: '120px' }} />
            </a>
            <div className='collapse navbar-collapse mean-menu'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link to="/home" className={`nav-link ${splitLocation[1] === "home" ? "active" : ""}`}>
                    <FormattedMessage
                      id='menu-item1'
                      defaultMessage='Home'
                    />
                  </Link>
                </li>
                {process.env.REACT_APP_DEMO_LINK && <li className='nav-item'>
                  <a href={`${process.env.REACT_APP_DEMO_LINK}/dashboard?lang=${currentLanguage.locale}`} className="nav-link" target="_blank" rel='noreferrer'>
                    <FormattedMessage
                      id='label-studio'
                      defaultMessage='Studio'
                    />
                  </a>
                </li>}
                {process.env.REACT_APP_DEMO_LINK && <li className='nav-item'>
                  <a href={`${process.env.REACT_APP_DEMO_LINK}/chat?lang=${currentLanguage.locale}`} className="nav-link" target="_blank" rel='noreferrer'>
                    <FormattedMessage
                      id='menu-item3'
                      defaultMessage='Ai.Chat'
                    />
                  </a>
                </li>}
                {/* {process.env.REACT_APP_TOKEN_SALES_LINK && <li className='nav-item'>
                  <a href={`${process.env.REACT_APP_TOKEN_SALES_LINK}?lang=${currentLanguage.locale}`} className="nav-link" target="_blank" rel='noreferrer'>
                    <div>
                      <FormattedMessage
                        id='menu-item4'
                        defaultMessage='AIO'
                      />
                    </div>
                  </a>
                </li>} */}
                {process.env.REACT_APP_TOKEN_SALES_LINK && <li className='nav-item'>
                  <a href={`${process.env.REACT_APP_TOKEN_SALES_LINK}/claim?lang=${currentLanguage.locale}`} className="nav-link" target="_blank" rel='noreferrer'>
                    <FormattedMessage
                      id='label-claim'
                      defaultMessage='Claim'
                    />
                  </a>
                </li>}
                {socialLinks.gitbook && <li className='nav-item'>
                  <a href={socialLinks.gitbook} className="nav-link" target="_blank" rel='noreferrer'>
                    <FormattedMessage
                      id='menu-item2'
                      defaultMessage='Docs'
                    />
                  </a>
                </li>}
                {/* <li className='nav-item'>
                  <Link to="/verify" className={`nav-link ${splitLocation[1] === "verify" ? "active" : ""}`}>{t("Verify")} </Link>
                </li> */}
              </ul>
              <div className='others-option'>
                <div className='d-flex align-items-center'>
                  {/* <div className='option-item'>
                    <NetworkSelector />
                  </div> */}
                  <div className='option-item'>
                    {/* {!account ? <ConnectWalletButton /> : <AccountWalletButton account={account} />} */}
                    {/* {tokenValidity === false ?
                      <SubmitButton bgColorCode="var(--blackColor)" borderRadius="90px" width="auto" marginTop="0" onClick={() => onLoginModal()} >
                        <StyledText textTransform='uppercase' colorCode='var(--whiteColor)' >
                          {t("Log In")}
                        </StyledText>
                      </SubmitButton>
                      :
                      <Link to="/profile">
                        <SubmitButton bgColorCode="transparent" borderRadius="90px" width="auto" marginTop="0" >
                          <StyledText colorCode='var(--textBlue)'>
                            {t("My Account")}
                          </StyledText>
                        </SubmitButton>
                      </Link>
                    } */}
                  </div>
                  <div className='option-item'>
                    <LangSelector currentLang={currentLanguage.code} langs={languageList} setLang={setLanguage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Menu
