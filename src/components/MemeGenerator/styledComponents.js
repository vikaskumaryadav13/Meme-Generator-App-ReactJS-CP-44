// Style your components here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding-top: 31px;
  padding-right: 25px;
  padding-bottom: 31px;
  padding-left: 25px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1145px;
  }
`

export const Heading = styled.h1`
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  color: #35469c;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    text-align: left;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 310px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 52px;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;

  @media screen and (min-width: 768px) {
    width: 49%;
    margin-top: 5px;
    margin-bottom: 21px;
  }
`
export const TextContent = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
`

export const MemeGeneratorForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 42%;
  }
`

export const CustomLabel = styled.label`
  font-family: 'Open Sans';
  font-weight: 550;
  color: #7e858e;
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  font-family: 'Open Sans';
  height: 42px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 13px;
  padding-right: 15px;
  padding-bottom: 13px;
  padding-left: 15px;
  margin-top: 5px;
  margin-bottom: 22px;
  color: #5a7184;
  background-color: #ffffff;
  outline: none;
`

export const CustomSelect = styled.select`
  font-family: 'Open Sans';
  height: 42px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  color: #1e293b;
  background-color: #ffffff;
  outline: none;
`

export const CustomOption = styled.option`
  font-size: 15px;
  padding-top: 13px;
  padding-right: 15px;
  padding-bottom: 13px;
  padding-left: 15px;
`

export const GenerateButton = styled.button`
  font-family: 'Open Sans';
  font-size: 15px;
  font-weight: 600;
  border-radius: 5.5px;
  border: none;
  min-width: 26px;
  max-width: 152px;
  padding-left: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-right: 25px;
  margin-top: 16px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  background-color: #0b69ff;
`
