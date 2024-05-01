import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
`
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
`

export const BlogImage = styled.img`
  width: 100%;
  border-radius: 15px;
`

export const PageHeadings = styled.h1`
  font-family: Roboto;
`

export const PageParagraph = styled.p`
  text-align: start;
`

export const ReadMoreButton = styled.button`
  background-color: #1f81ff;
  padding: 8px;
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`
