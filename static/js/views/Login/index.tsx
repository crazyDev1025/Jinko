import { Flex, ModalBody } from '@pancakeswap/uikit'
import useToast from 'hooks/useToast'
import { StyledModalContainer, StyledModalHeader, StyledModalI, StyledText, ModalTitle, SubmitButton } from 'components/GlobalStyle'
import React, { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'
import { Input, TextInput } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useTimeout } from '@mantine/hooks'
import { useTranslation } from 'contexts/Localization'
import { Turnstile as TT, TurnstileInstance } from '@marsidev/react-turnstile'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { useRequestOtp, useLogin } from './hooks/useAuth'

interface LoginModalProps {
  onDismiss?: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({ onDismiss }) => {
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()

  const [inAction, setInAction] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const turnstileWidgetRef = useRef<TurnstileInstance>(null)
  const [turnstile, setTurnstile] = useState("")
  const [turnstileError, setTurnstileError] = useState(false)
  const [showLoginError, setShowLoginError] = useState(false)

  const [cookies, setCookie, removeCookie] = useCookies()

  const { start: resetOtpSent, clear } = useTimeout(() => {setOtpSent(false)}, 60000)
  const { onRequestOtp : handleRequestOtp } = useRequestOtp()
  const { onLogin : handleLogin } = useLogin()

  const schema = Yup.object().shape({
    email: Yup.string().required(t("Email is required")).email(t("Invalid email")),
    password: Yup.string().required(t("Code is required"))  // .test('len', 'Must be exactly 5 characters', val => val.length === 5)
  })

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    validate: yupResolver(schema)
  })

  const requestOtp = useCallback(async () => {
    // check email validation
    if (form.isValid('email') === false) {
      toastError(t("Error"), t("Invalid email"))
      return ;
    }
    try {
      const response = await handleRequestOtp(form.values.email, turnstile)
      console.log(response)
      if (response.error || response.message !== "OK") throw new Error(response.message)
      console.log("OTP Sent")
      setOtpSent(true)
      setTurnstileError(false)
      resetOtpSent()
    } catch (e: any) {
      const { message = "" } = e
      if (message.includes("Invalid captcha response")) {
        toastError(t('Error'), t('Captcha error'))
        setTurnstileError(true)
      } else if (message.includes("User not found")) {
        toastError(t('Error'), t('User not found'))
      } else {
        toastError(t('Error'), t('Please try again.'))
      }
    }
  }, [handleRequestOtp, form, resetOtpSent, toastError, t, turnstile])

  const handleSubmit = async () => {
    setInAction(true)
    try {
      const response = await handleLogin(form.values.email, form.values.password)
      if (response.error) throw new Error(response.message)
      if (response.data.token) {
        const decodedJwt = jwtDecode<JwtPayload>(response.data.token)
        const jwtExpires = new Date(decodedJwt.exp * 1000)
        setCookie('_acc', JSON.stringify({ ...decodedJwt, token: response.data.token }), 
        { 
          sameSite: true, secure: true,
          expires: jwtExpires, path: '/'
        })
        setShowLoginError(false)
        setInAction(false)
        onDismiss()
      }
    } catch (e: any) {
      const { message = "" } = e
      if (message.includes("Unauthorized")) {
        // toastError(t('Error'), t('Login failed. Please verify the validity of your code.'))
        setShowLoginError(true)
      } else if (message.includes("User not found")) {
        toastError(t('Error'), t('User not found'))
      } else {
        toastError(t('Error'), t('Please try again.'))
      }
      setInAction(false)
    }
  }

  return (
    <>
      <StyledModalContainer minWidth="280px">
        <StyledModalHeader>
          <Flex width="100%">
            <ModalTitle>
              <StyledText fSize="15px" fWeight="700" textTransform='uppercase'>{t('Log In Account')}</StyledText>
            </ModalTitle>
            <StyledModalI className='bx bx-x' onClick={onDismiss} />
          </Flex>
        </StyledModalHeader>
        <ModalBody p="20px 24px 24px" background="var(--whiteColor)">
          <Flex alignItems="center" flexDirection="column" style={{ gap: "1rem" }}>
            <Input.Wrapper
              label={
                <Flex alignItems="center" paddingLeft="calc(4.25rem  / 3)" style={{ gap: "5px" }}>
                  <img src='/images/modal/email.svg' alt='email' />
                  <StyledText colorCode='var(--textGrey)'>{t("Email")}</StyledText>
                </Flex>}
              style={{ width: '100%', maxWidth: '427px' }}
            >
              <TextInput id='email-input' placeholder='Enter your email' radius={25.5} {...form.getInputProps('email')} />
            </Input.Wrapper>

            <Input.Wrapper
              label={
                <Flex alignItems="center" paddingLeft="calc(4.25rem  / 3)" style={{ gap: "5px" }}>
                  <img src='/images/modal/password.svg' alt='password' />
                  <StyledText colorCode='var(--textGrey)'>{t("Email Verification")}</StyledText>
                </Flex>}
              style={{ width: '100%', maxWidth: '427px' }}
            >
              <TextInput id='code-input' placeholder='Enter code' radius={25.5}
                rightSection={
                  <div style={{ marginRight: "5.2rem" }}>
                    {otpSent === true ? <SubmitButton
                      bgColorCode="#17C1B0"
                      width="auto"
                      height="30px"
                      minWidth="100px"
                      marginTop="0"
                      minHeight="auto"
                      padding="0"
                      borderRadius="20px"
                    >
                      <StyledText colorCode='var(--whiteColor)' fSize='14px' >{t("Sent")}</StyledText>
                      <img src='/images/modal/sent-icon.svg' alt='sent' />
                    </SubmitButton>
                    :
                    <SubmitButton
                      bgColorCode="var(--blackColor)"
                      width="auto"
                      height="30px"
                      minWidth="100px"
                      marginTop="0"
                      minHeight="auto"
                      padding="0"
                      borderRadius="20px"
                      onClick={requestOtp}
                      disabled={turnstileError === true || otpSent}
                    >
                      <StyledText colorCode='var(--whiteColor)' fSize='14px' >{t("Send Code")}</StyledText>
                    </SubmitButton>
                    }
                  </div>
                }
                {...form.getInputProps('password')}
              />
            </Input.Wrapper>

            <div style={{ minHeight: '21px' }}>
              {showLoginError && <StyledText colorCode='#D20319' fSize='14px' >{t("The OTP code you entered is invalid. Please try again.")}</StyledText>}
            </div>

            <TT id='turnstile-widget' ref={turnstileWidgetRef} siteKey='0x4AAAAAAAD5RQ6vwREA51rD'
              options={{
                language: 'en'
              }}
              onSuccess={(token) => {
                setTurnstile(token)
                setTurnstileError(false)
              }}
              onError={() => setTurnstileError(true)}
            />

            <SubmitButton bgColorCode="var(--blackColor)" borderRadius="90px" width="auto"  marginTop="1rem"
              onClick={form.onSubmit(handleSubmit)} disabled={inAction} >
              <StyledText colorCode='var(--whiteColor)' textTransform='uppercase'>
                {t("Log In")}
              </StyledText>
            </SubmitButton>
          </Flex>
        </ModalBody>
      </StyledModalContainer>
    </>
  )
}

export default LoginModal