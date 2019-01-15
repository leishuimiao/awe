import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block, BlockTitle } from '@src/Block'
import { Row, Col } from '@src/Grid'
import Button, { Segmented } from '@src/Button'

export default class index extends Component {
  state = {
    btnActive1: 2,
    btnActive2: 1,
    btnActive3: 2,
    btnActive4: 1,
    btnActive5: 0,
    btnActive6: 1
  }
  render () {
    const { btnActive1, btnActive2, btnActive3, btnActive4, btnActive5, btnActive6 } = this.state
    return (
      <Page title="Button">
        <PageContent>
          <BlockTitle>常用按钮(Usual Buttons)</BlockTitle>
          <Block>
            <Row>
              <Col>
                <Button block>按钮</Button>
              </Col>
              <Col>
                <Button block>Button</Button>
              </Col>
              <Col>
                <Button block round>圆角按钮</Button>
              </Col>
            </Row>
          </Block>
          <BlockTitle>实心按钮(Fill Buttons)</BlockTitle>
          <Block>
            <Row>
              <Col>
                <Button block fill>按钮</Button>
              </Col>
              <Col>
                <Button block fill>Button</Button>
              </Col>
              <Col>
                <Button block fill round>圆角按钮</Button>
              </Col>
            </Row>
          </Block>
          <BlockTitle>彩色按钮(Color Buttons)</BlockTitle>
          <Block>
            <Row as="p">
              <Col as={Button} color="blue">Blue</Col>
              <Col as={Button} color="pink">Pink</Col>
              <Col as={Button} color="orange">Orange</Col>
            </Row>
            <Row as="p">
              <Col as={Button} color="green">Green</Col>
              <Col as={Button} color="yellow">Yellow</Col>
              <Col as={Button} color="red">Red</Col>
            </Row>
            <Row as="p">
              <Col as={Button} color="gray">Gray</Col>
              <Col as={Button} color="black">Black</Col>
            </Row>
          </Block>
          <BlockTitle>彩色填充按钮(Color Fill Buttons)</BlockTitle>
          <Block>
            <Row as="p">
              <Col as={Button} fill color="blue">Blue</Col>
              <Col as={Button} fill color="pink">Pink</Col>
              <Col as={Button} fill color="orange">Orange</Col>
            </Row>
            <Row as="p">
              <Col as={Button} fill color="green">Green</Col>
              <Col as={Button} fill color="yellow">Yellow</Col>
              <Col as={Button} fill color="red">Red</Col>
            </Row>
            <Row as="p">
              <Col as={Button} fill color="gray">Gray</Col>
              <Col as={Button} fill color="black">Black</Col>
              <Col as={Button} fill color="white">White</Col>
            </Row>
          </Block>
          <BlockTitle>大号按钮(Big Buttons)</BlockTitle>
          <Block>
            <Row>
              <Col>
                <Button block big fill>按钮</Button>
              </Col>
              <Col>
                <Button block big>Button</Button>
              </Col>
            </Row>
            <p><Button block big fill>按钮</Button></p>
            <p><Button block big>Button</Button></p>
          </Block>
          <BlockTitle>小号按钮(Small Buttons)</BlockTitle>
          <Block>
            <Row>
              <Col>
                <Button block small fill>按钮</Button>
              </Col>
              <Col>
                <Button block small>Button</Button>
              </Col>
            </Row>
            <p><Button small fill style={{ marginRight: '10px' }}>按钮</Button><Button small>Button</Button></p>
          </Block>
          <BlockTitle>禁用按钮(Disabled Buttons)</BlockTitle>
          <Block>
            <Row>
              <Col>
                <Button block disabled fill>按钮</Button>
              </Col>
              <Col>
                <Button block disabled>Button</Button>
              </Col>
            </Row>
            <p><Button block disabled fill>按钮</Button></p>
            <p><Button block disabled>Button</Button></p>
          </Block>
          <BlockTitle>分段按钮(Segmented Buttons)</BlockTitle>
          <Block>
            <Segmented as="p">
              <Button active={btnActive1 === 0} onClick={() => this.setState({ btnActive1: 0 })}>按钮</Button>
              <Button active={btnActive1 === 1} onClick={() => this.setState({ btnActive1: 1 })}>Button</Button>
              <Button active={btnActive1 === 2} onClick={() => this.setState({ btnActive1: 2 })}>活动按钮</Button>
            </Segmented>
            <Segmented as="p">
              <Button active={btnActive2 === 0} onClick={() => this.setState({ btnActive2: 0 })}>按钮</Button>
              <Button active={btnActive2 === 1} onClick={() => this.setState({ btnActive2: 1 })}>活动按钮</Button>
            </Segmented>
            <Segmented as="p">
              <Button round active={btnActive3 === 0} onClick={() => this.setState({ btnActive3: 0 })}>按钮</Button>
              <Button round active={btnActive3 === 1} onClick={() => this.setState({ btnActive3: 1 })}>Button</Button>
              <Button round active={btnActive3 === 2} onClick={() => this.setState({ btnActive3: 2 })}>活动按钮</Button>
            </Segmented>
            <Segmented as="p">
              <Button round active={btnActive4 === 0} onClick={() => this.setState({ btnActive4: 0 })}>按钮</Button>
              <Button round active={btnActive4 === 1} onClick={() => this.setState({ btnActive4: 1 })}>活动按钮</Button>
            </Segmented>
          </Block>
          <BlockTitle>细边框按钮(Border Thin Buttons)</BlockTitle>
          <Block>
            <Row as="p">
              <Col as={Button} thin color="blue">Blue</Col>
              <Col as={Button} thin color="pink">Pink</Col>
              <Col as={Button} thin color="orange">Orange</Col>
            </Row>
            <Row as="p">
              <Col as={Button} thin color="green">Green</Col>
              <Col as={Button} thin color="yellow">Yellow</Col>
              <Col as={Button} thin color="red">Red</Col>
            </Row>
            <Row as="p">
              <Col as={Button} thin color="gray">Gray</Col>
              <Col as={Button} thin color="black">Black</Col>
              <Col as={Button} thin round>Blue Round</Col>
            </Row>
            <Row>
              <Col as={Button} thin block>Button</Col>
            </Row>
            <Segmented as="p">
              <Button thin color="red" active={btnActive5 === 0} onClick={() => this.setState({ btnActive5: 0 })}>活动按钮</Button>
              <Button thin color="red" active={btnActive5 === 1} onClick={() => this.setState({ btnActive5: 1 })}>Button</Button>
              <Button thin color="red" active={btnActive5 === 2} onClick={() => this.setState({ btnActive5: 2 })}>按钮</Button>
            </Segmented>
            <Segmented as="p">
              <Button thin round color="blue" active={btnActive6 === 0} onClick={() => this.setState({ btnActive6: 0 })}>按钮</Button>
              <Button thin round color="blue" active={btnActive6 === 1} onClick={() => this.setState({ btnActive6: 1 })}>活动按钮</Button>
            </Segmented>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
