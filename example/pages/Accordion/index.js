import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block } from '@src/Block'
import { Accordion, AccordionItem, AccordionToggle, AccordionContent } from '@src/Accordion'
import toast from '@src/Toast'

export default class index extends Component {
  state = {
    activeIndex: 0
  }
  render () {
    return (
      <Page title="Accordion">
        <PageContent>
          <Block>
            <Accordion activeIndex={this.state.activeIndex}>
              <AccordionItem onToggle={isOpened => toast(`item 1 is ${isOpened ? 'opened' : 'closed'}`)}>
                <AccordionToggle>+-item 1 (callback)</AccordionToggle>
                <AccordionContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionToggle>+-item 2</AccordionToggle>
                <AccordionContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionToggle>+-item 3</AccordionToggle>
                <AccordionContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Block>
        </PageContent>
      </Page>
    )
  }
}
