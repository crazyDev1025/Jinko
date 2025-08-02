import styled, { css } from 'styled-components'
import { Text, Button, ModalContainer, ModalHeader, Flex } from '@pancakeswap/uikit'

export const StyledText = styled(Text)<{ fSize?: string; fWeight?: string; colorCode?: string; whiteSpace?: string; lineClamp?: string; fFamily?: string; handleOverflow?: boolean; textDeco?: string; }>`
  color: ${props => props.colorCode === undefined ? "#000000" : props.colorCode};
  font-style: normal;
  font-weight: ${props => props.fWeight === undefined ? "500" : props.fWeight};
  font-family: ${props => props.fFamily === undefined ? "var(--fontFamily)" : props.fFamily};
  font-size: ${props => props.fSize === undefined ? "1rem" : props.fSize};
  // text-align: center;

  ${({ handleOverflow, lineClamp }) =>
    handleOverflow &&
    css`
      -webkit-line-clamp: ${lineClamp === undefined ? "2" : lineClamp};
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    `
  }

  ${({ whiteSpace }) =>
    whiteSpace &&
      css`
        white-space: ${whiteSpace};
      `
  }

  ${({ textDeco }) =>
    textDeco &&
    css`
       text-decoration: ${textDeco};
      `
  }
`

export const StyledPadding = styled.div<{ paddingTop?: string }>`
  padding-top: ${props => props.paddingTop === undefined ? "5px" : props.paddingTop};
`
export const StyledSpan = styled.span<{ bg?: string; }>`
  background: ${props => props.bg === undefined ? "radial-gradient(50% 50% at 50% 50%, #99D6EA 0%, #624AFC 100%), linear-gradient(90deg, #99D6EA 2.12%, #624AFC 35.79%)" : props.bg};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export const SubmitButton = styled(Button) <{
  bgColorCode?: string;
  colorCode?: string;
  marginTop?: string;
  width?: string;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  boxShadow?: string;
  border?: string;
}>`
  background: ${props => props.bgColorCode === undefined ? "#E5FF00" : props.bgColorCode};
  border-radius: ${props => props.borderRadius === undefined ? "0px" : props.borderRadius};
  // border: 2px solid var(--mainThemeColor);
  color: ${props => props.colorCode === undefined ? "var(--blackColor)" : props.colorCode};
  box-shadow: ${props => props.boxShadow === undefined ? "0px 4px 15px rgba(229, 255, 0, 0.5)" : props.boxShadow};
  margin-top: ${props => props.marginTop === undefined ? "10px" : props.marginTop};
  width: ${props => props.width === undefined ? "250px" : props.width};
  min-width: ${props => props.minWidth === undefined ? "170px" : props.minWidth};
  height: ${props => props.height === undefined ? "48px" : props.height};
  min-height: ${props => props.minHeight === undefined ? "41px" : props.minHeight};
  padding: ${props => props.padding === undefined ? "10px 15px" : props.padding};

  ${({ border }) =>
  border &&
      css`
        border: ${border};
      `
  }
`

// Modal
export const StyledModalContainer = styled(ModalContainer)`
  // border: 2px solid var(--mainThemeColor);
  border-radius: 12px;
  max-width: 70vh;
  margin: 0 5px;
  box-sizing: border-box;

  svg {
    fill: white;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    min-width: 500px;
  }
`
export const StyledModalHeader = styled(ModalHeader)`
  background: var(--themeGradient);
  flex-direction: column;
`
export const StyledModalI = styled.i`
  color: black;
  font-size: 40px;
  cursor: pointer;
`
export const ModalTitle = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  justify-content: center;
`

// overlay
export const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  inset: 0px;
  z-index: 99;
`
export const Overlay = styled.div.attrs({ role: "presentation" })`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  transition: opacity 0.4s ease 0s;
  opacity: 0.75;
  z-index: 10;
  pointer-events: initial;
`
export const OverlayOuterFlex = styled(Flex)`
  height: 100vh;
`

// Table Wrapper
export const StyledTableWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-bottom:1rem;
  margin-top: 3em;
  width: 80vw;
  max-width: 1260px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
  padding: 20px;

  @media only screen and (max-width: 992px) {
    width: 95vw;
  }
`