import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import Icon from '@src/Icon'
import { List, ListInput } from '@src/ListView'
import { BlockTitle } from '@src/Block'

export default class index extends Component {
  state = {
    invalidObj: {}
  }
  handleValidateChange (type, isInvalid) {
    const { invalidObj } = this.state
    invalidObj[type] = isInvalid
    this.setState({ invalidObj })
  }
  render () {
    const { invalidObj } = this.state
    return (
      <Page title="Inputs">
        <PageContent>
          <BlockTitle>Full Layout / Inline Labels</BlockTitle>
          <List inlineLabels>
            <ListInput
              label="Name"
              placeholder="Your name"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Password"
              placeholder="Your password"
              type="password"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="E-mail"
              placeholder="Your e-mail"
              type="email"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="URL"
              placeholder="URL"
              type="url"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Phone"
              placeholder="Your phone number"
              type="tel"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Gender"
              type="select"
            >
              <Icon type="emotion-joy" />
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </ListInput>
            <ListInput
              label="Birthday"
              type="date"
              placeholder="Please choose..."
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Date time"
              type="datetime-local"
              placeholder="Please choose..."
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Textarea"
              type="textarea"
              placeholder="Textarea content"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Textarea Resizable"
              type="textarea"
              resizable
              placeholder="Textarea content"
            >
              <Icon type="emotion-joy" />
            </ListInput>
          </List>
          <BlockTitle>Full Layout / Stacked Labels</BlockTitle>
          <List>
            <ListInput
              label="Name"
              placeholder="Your name"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Password"
              placeholder="Your password"
              type="password"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="E-mail"
              placeholder="Your e-mail"
              type="email"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="URL"
              placeholder="URL"
              type="url"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Phone"
              placeholder="Your phone number"
              type="tel"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Gender"
              type="select"
            >
              <Icon type="emotion-joy" />
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </ListInput>
            <ListInput
              label="Birthday"
              type="date"
              placeholder="Please choose..."
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Date time"
              type="datetime-local"
              placeholder="Please choose..."
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Textarea"
              type="textarea"
              placeholder="Textarea content"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              label="Textarea Resizable"
              type="textarea"
              resizable
              placeholder="Textarea content"
            >
              <Icon type="emotion-joy" />
            </ListInput>
          </List>
          <BlockTitle>Validation + Additional Info</BlockTitle>
          <List>
            <ListInput
              label="Name"
              type="text"
              placeholder="Your name"
              info="Default validation"
              required
              validate
              onValidateChange={isInvalid => this.handleValidateChange('name', isInvalid)}
            >
              <Icon type={invalidObj.name ? 'emotion-sad' : 'emotion-joy'} color={invalidObj.name ? 'red' : ''} />
            </ListInput>
            <ListInput
              label="Fruit"
              type="text"
              placeholder="Type 'apple' or 'banana'"
              info={<span>Pattern validation (<b>apple|banana</b>)</span>}
              required
              validate
              pattern="apple|banana"
              onValidateChange={isInvalid => this.handleValidateChange('fruit', isInvalid)}
            >
              <Icon type={invalidObj.fruit ? 'emotion-sad' : 'emotion-joy'} color={invalidObj.fruit ? 'red' : ''} />
            </ListInput>
            <ListInput
              label="E-mail"
              type="email"
              placeholder="Your e-mail"
              info="Default e-mail validation"
              required
              validate
              onValidateChange={isInvalid => this.handleValidateChange('email', isInvalid)}
            >
              <Icon type={invalidObj.email ? 'emotion-sad' : 'emotion-joy'} color={invalidObj.email ? 'red' : ''} />
            </ListInput>
            <ListInput
              label="URL"
              type="url"
              placeholder="Your URL"
              info="Default URL validation"
              required
              validate
              onValidateChange={isInvalid => this.handleValidateChange('url', isInvalid)}
            >
              <Icon type={invalidObj.url ? 'emotion-sad' : 'emotion-joy'} color={invalidObj.url ? 'red' : ''} />
            </ListInput>
            <ListInput
              label="Number"
              type="text"
              placeholder="Enter number"
              info="With custom error message"
              errMsg="Only numbers please!"
              required
              validate
              pattern="[0-9]*"
              onValidateChange={isInvalid => this.handleValidateChange('number', isInvalid)}
            >
              <Icon type={invalidObj.number ? 'emotion-sad' : 'emotion-joy'} color={invalidObj.number ? 'red' : ''} />
            </ListInput>
          </List>
          <BlockTitle>Icon + Input</BlockTitle>
          <List>
            <ListInput
              type="text"
              placeholder="Your name"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              type="password"
              placeholder="Your password"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              type="email"
              placeholder="Your e-mail"
            >
              <Icon type="emotion-joy" />
            </ListInput>
            <ListInput
              type="url"
              placeholder="URL"
            >
              <Icon type="emotion-joy" />
            </ListInput>
          </List>
          <BlockTitle>Label + Input</BlockTitle>
          <List>
            <ListInput
              label="Name"
              type="text"
              placeholder="Your name"
            />
            <ListInput
              label="Password"
              type="password"
              placeholder="Your password"
            />
            <ListInput
              label="E-mail"
              type="email"
              placeholder="Your e-mail"
            />
            <ListInput
              label="URL"
              type="url"
              placeholder="URL"
            />
          </List>
          <BlockTitle>Only Inputs Inset</BlockTitle>
          <List inset>
            <ListInput
              type="text"
              placeholder="Your name"
              clearButton
            />
            <ListInput
              type="password"
              placeholder="Your password"
              clearButton
            />
            <ListInput
              type="email"
              placeholder="Your e-mail"
              clearButton
            />
            <ListInput
              type="url"
              placeholder="URL"
              clearButton
            />
          </List>
        </PageContent>
      </Page>
    )
  }
}
