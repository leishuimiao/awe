import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block } from '@src/Block'
import Button from '@src/Button'
import toast from '@src/Toast'

export default class index extends Component {
  render () {
    return (
      <Page title="Toast">
        <PageContent>
          <Block strong>
            <p>
              <Button
                block
                onClick={() => toast('Top positioned toast', { position: 'top' })}
              >Toast on Top</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast('I\'m on center')}
              >Toast on Center(default)</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast('Bottom positioned toast', { position: 'bottom' })}
              >Toast on Bottom</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast('I\'m with Icon', { iconProps: { type: 'star', size: 40, color: 'red' } })}
              >Toast with Icon</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast('This toast contains a lot of text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quae, ab. Delectus amet optio facere autem sapiente quisquam beatae culpa dolore.', { position: 'bottom' })}
              >Toast with large message</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast('Toast with additional close button', {
                  closeButton: true,
                  closeButtonText: 'Close',
                  callback () {
                    toast('Toast closed')
                  }
                })}
              >Toast with close button</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast.success('Success text!')}
              >Toast for success</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast.info('Info text!')}
              >Toast for Info</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast.warning('Warning text!')}
              >Toast for warning</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast.error('Error text!')}
              >Toast for error</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => toast.failure('Failure text!')}
              >Toast for failure</Button>
            </p>
            <p>
              <Button
                block
                onClick={() => {
                  const loadingToast = toast.loading('Loading text...')
                  setTimeout(() => {
                    loadingToast.close()
                  }, 5000)
                }}
              >Toast for loading</Button>
            </p>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
