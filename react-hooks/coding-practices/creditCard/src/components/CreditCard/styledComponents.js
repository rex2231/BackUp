import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
`
export const CardPage = styled.div`
  text-align: center;
  background-color: #3b4b69;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`

export const HeadingContainer = styled.h1`
  font-weight: bold;
  padding: 10px;
  border-bottom: 3px solid yellow;
  font-size: 22px;
  color: white;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 300px;
  width: 500px;
  border-radius: 25px;
  box-shadow: 0px 5px 10px rgba(52, 78, 122, 0.2);
  margin-top: 160px;
  text-align: start;
  padding: 40px;
`

export const CardName = styled.p`
  color: white;
  font-size: 30px;
  font-weight: normal;
  font-family: roboto;
  padding-top: 30px;
`

export const HolderHeading = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: white;
  padding-top: 30px;
`
export const HolderName = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: white;
`

export const PaymentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

export const PaymentContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const PaymentHeading = styled.h1`
  color: #344e7a;
  font-weight: bold;
  font-family: Roboto;
  font-size: 26px;
`

export const PaymentInput = styled.input`
  padding: 10px;
  margin-top: 20px;
`
