import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block, BlockTitle } from '@src/Block'
import { Row, Col } from '@src/Grid'
import Button from '@src/Button'
import dialog from '@src/Dialog'

export default class index extends Component {
  render () {
    return (
      <Page title="Dialog">
        <PageContent>
          <Block strong>
            <p>There are 1:1 replacements of native Alert, Prompt and Confirm modals. They support callbacks, have very easy api and can be combined with each other. Check these examples:</p>
            <Row as="p">
              <Col as={Button} onClick={() => dialog.alert('Hello, I\'m an Alert!')}>Alert</Col>
              <Col as={Button} onClick={() => dialog.confirm('Does this look great?', { callback: () => dialog.alert('Great!') })}>Confirm</Col>
              <Col as={Button} onClick={() => dialog.prompt('What\'s your name?', { callback: (name) => dialog.alert('Your name is ' + name) })}>Prompt</Col>
            </Row>
            <Row as="p">
              <Col as={Button}
                onClick={() => dialog.login(
                  'Enter your username and password',
                  {
                    callback: (name, password) => dialog.alert(
                      <div>Thank you!<br />Username: {name}<br />Password: {password}</div>
                    )
                  }
                )
                }
              >Login</Col>
              <Col as={Button} onClick={() => dialog.password('Enter your password', { callback: (password) => dialog.alert(<div>Thank you!<br />Password: {password}</div>) })}>Password</Col>
            </Row>
          </Block>
          <BlockTitle>Custom Buttons</BlockTitle>
          <Block strong>
            <Row>
              <Col as={Button} onClick={() => dialog.confirm('这个看起来很棒吧？', {
                buttons: [
                  {
                    text: '不是'
                  },
                  {
                    text: '是的'
                  }
                ],
                callback: () => {
                  dialog.alert('这确实很棒！', {
                    title: '提示',
                    buttons: [
                      {
                        text: '好的'
                      }
                    ]
                  })
                }
              })}>Double Buttons</Col>
              <Col as={Button}
                onClick={() => dialog.create({
                  title: 'Custom Buttons',
                  text: 'Dialog with Custom buttons',
                  buttons: [
                    {
                      text: 'Button 1',
                      callback () {
                        dialog.alert('You click the Button 1')
                      }
                    },
                    {
                      text: 'Button 2',
                      callback () {
                        dialog.alert('You click the Button 2')
                      }
                    },
                    {
                      text: 'Button 3',
                      callback () {
                        dialog.alert('You click the Button 3')
                      }
                    }
                  ]
                })}>Multi Buttons</Col>
            </Row>
          </Block>
          <BlockTitle>Preloader Dialog</BlockTitle>
          <Block strong>
            <Row as="p">
              <Col as={Button} onClick={() => {
                const preloader = dialog.preloader()
                setTimeout(() => {
                  preloader.destroy()
                }, 5000)
              }}>Preloader</Col>
              <Col as={Button} onClick={() => {
                const preloader = dialog.preloader('My Title')
                setTimeout(() => {
                  preloader.destroy()
                }, 5000)
              }}>Custom Title</Col>
            </Row>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
