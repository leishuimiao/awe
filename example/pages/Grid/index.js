import React, { Component } from 'react'
import { Page, PageContent } from '../../../src/Core'
import { Block, BlockTitle } from '../../../src/Block'
import { Row, Col } from '../../../src/Grid'

export default class index extends Component {
  render () {
    return (
      <Page title="Grid" className="page-grid">
        <PageContent>
          <Block>
            <p>栅格(Grid)允许自由定义列(Col)的宽度，但每行(Row)的子列总和需要等于100。(The Grid allows to freely define the width of the column (Col), but the sum of the subcolumns for each Row needs to be equal to 100.)</p>
          </Block>
          <BlockTitle>默认间隙(Columns with gap)</BlockTitle>
          <Block>
            <Row>
              <Col>50%</Col>
              <Col>50%</Col>
            </Row>
            <Row>
              <Col>25%</Col>
              <Col>25%</Col>
              <Col>25%</Col>
              <Col>25%</Col>
            </Row>
            <Row>
              <Col>33%</Col>
              <Col>33%</Col>
              <Col>33%</Col>
            </Row>
            <Row>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
              <Col width={50}>50%</Col>
            </Row>
            <Row>
              <Col width={33.33}>33%</Col>
              <Col width={66.66}>66%</Col>
            </Row>
            <Row>
              <Col width={30}>30%</Col>
              <Col width={70}>70%</Col>
            </Row>
          </Block>
          <BlockTitle>无间隙(Columns with no gap)</BlockTitle>
          <Block>
            <Row noGap>
              <Col>50%</Col>
              <Col>50%</Col>
            </Row>
            <Row noGap>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
            </Row>
            <Row noGap>
              <Col>33%</Col>
              <Col>33%</Col>
              <Col>33%</Col>
            </Row>
            <Row noGap>
              <Col width={33.33}>33%</Col>
              <Col width={66.66}>66%</Col>
            </Row>
            <Row noGap>
              <Col width={30}>30%</Col>
              <Col width={70}>70%</Col>
            </Row>
          </Block>
          <BlockTitle>自定义间隙(Columns with custom gap)</BlockTitle>
          <Block>
            <Row gap={5}>
              <Col>50%</Col>
              <Col>50%</Col>
            </Row>
            <Row gap={5}>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
              <Col width={25}>25%</Col>
            </Row>
            <Row gap={5}>
              <Col>33%</Col>
              <Col>33%</Col>
              <Col>33%</Col>
            </Row>
            <Row gap={5}>
              <Col width={33.33}>33%</Col>
              <Col width={66.66}>66%</Col>
            </Row>
            <Row gap={5}>
              <Col width={30}>30%</Col>
              <Col width={70}>70%</Col>
            </Row>
          </Block>
          <BlockTitle>嵌套(Nested)</BlockTitle>
          <Block>
            <Row>
              <Col>50%
                <Row>
                  <Col>50%</Col>
                  <Col>50%</Col>
                </Row>
              </Col>
              <Col>50%
                <Row>
                  <Col width={40}>40%</Col>
                  <Col width={60}>60%</Col>
                </Row>
              </Col>
            </Row>
          </Block>
          <BlockTitle>响应式栅格(Responsive Grid)</BlockTitle>
          <Block>
            <p>栅格单元格定义在手机/平板不同的尺寸。(Grid cells have different size on Phone/Tablet.)</p>
            <Row>
              <Col width={100} tabletWidth={50}>width: 100% tabletWidth: 50%</Col>
              <Col width={100} tabletWidth={50}>width: 100% tabletWidth: 50%</Col>
            </Row>
            <Row>
              <Col width={50} tabletWidth={25}>width: 50% tabletWidth: 25%</Col>
              <Col width={50} tabletWidth={25}>width: 50% tabletWidth: 25%</Col>
              <Col width={50} tabletWidth={25}>width: 50% tabletWidth: 25%</Col>
              <Col width={50} tabletWidth={25}>width: 50% tabletWidth: 25%</Col>
            </Row>
            <Row>
              <Col width={100} tabletWidth={40}>width: 100% tabletWidth: 40%</Col>
              <Col width={50} tabletWidth={60}>width: 50% tabletWidth: 60%</Col>
              <Col width={50} tabletWidth={66.66}>width: 50% tabletWidth: 66%</Col>
              <Col width={100} tabletWidth={33.33}>width: 100% tabletWidth: 33%</Col>
            </Row>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
