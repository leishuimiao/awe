import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block, BlockTitle } from '@src/Block'
import { Row, Col } from '@src/Grid'
import Icon from '@src/Icon'
import styled from 'styled-components'

const StyledCode = styled.code`
    padding: 5px;
    font-size: 12px;
    background: #f3f3f3;
`
const StyledIconCol = styled(Col)`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;

  > p {
    font-size: 12px;
    color: #666;
  }
`

export default class index extends Component {
  render () {
    return (
      <Page title="Icons">
        <PageContent>
          <BlockTitle>SVG图标(SVG Icons)</BlockTitle>
          <Block strong>
            <p>您可以自由定义图标的类型、大小以及颜色。(You can free to define Icon type, size and color.)<br />For example:</p>
            <p><StyledCode>{'<Icon type="star-o" />'}</StyledCode><Icon type="star-o" /></p>
            <p><StyledCode>{'<Icon type="star" size={20} color="red" />'}</StyledCode><Icon type="star" size={30} color="red" /></p>
          </Block>
          <BlockTitle>所有图标(All Icons)</BlockTitle>
          <Block strong>
            <Row>
              <StyledIconCol>
                <div><Icon type="error" /></div>
                <p>error</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="error-circle" /></div>
                <p>error-circle</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="error-circle-o" /></div>
                <p>error-circle-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="info" /></div>
                <p>info</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="info-circle" /></div>
                <p>info-circle</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="info-circle-o" /></div>
                <p>info-circle-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="exclamation" /></div>
                <p>exclamation</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="exclamation-circle" /></div>
                <p>exclamation-circle</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="exclamation-circle-o" /></div>
                <p>exclamation-circle-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="question" /></div>
                <p>question</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="question-circle" /></div>
                <p>question-circle</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="question-circle-o" /></div>
                <p>question-circle-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="success" /></div>
                <p>success</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="success-circle" /></div>
                <p>success-circle</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="success-circle-o" /></div>
                <p>success-circle-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="loading" /></div>
                <p>loading</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="warning" /></div>
                <p>warning</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="warning-o" /></div>
                <p>warning-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol>
                <div><Icon type="emotion-joy" /></div>
                <p>emotion-joy</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="star" /></div>
                <p>star</p>
              </StyledIconCol>
              <StyledIconCol>
                <div><Icon type="star-o" /></div>
                <p>star-o</p>
              </StyledIconCol>
            </Row>
            <Row>
              <StyledIconCol width={33.33}>
                <div><Icon type="emotion-sad" /></div>
                <p>emotion-sad</p>
              </StyledIconCol>
            </Row>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
