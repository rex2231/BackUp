import {useState} from 'react'

import {
  PageContainer,
  CardPage,
  HeadingContainer,
  CardContainer,
  CardName,
  HolderHeading,
  HolderName,
  PaymentPage,
  PaymentContainer,
  PaymentHeading,
  PaymentInput,
} from './styledComponents'

const CreditCard = () => {
  const [CardNo, setCardNo] = useState('')
  const [CardHolderName, setCardHolder] = useState('')

  const HandleCardNo = event => setCardNo(event.target.value)
  const HandleCardName = event => setCardHolder(event.target.value)

  return (
    <PageContainer>
      <CardPage>
        <HeadingContainer>CREDIT CARD</HeadingContainer>
        <CardContainer data-testid="creditCard">
          <CardName>{CardNo}</CardName>
          <HolderHeading>CARDHOLDER NAME</HolderHeading>
          <HolderName>{CardHolderName.toUpperCase()}</HolderName>
        </CardContainer>
      </CardPage>
      <PaymentPage>
        <PaymentContainer>
          <PaymentHeading>Payment Method</PaymentHeading>
          <PaymentInput
            type="text"
            placeholder="Card Number"
            onChange={HandleCardNo}
            value={CardNo}
          />
          <PaymentInput
            type="text"
            placeholder="Cardholder Name"
            onChange={HandleCardName}
            value={CardHolderName}
          />
        </PaymentContainer>
      </PaymentPage>
    </PageContainer>
  )
}

export default CreditCard
