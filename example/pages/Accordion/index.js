import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { Block, BlockTitle } from '@src/Block'
import { Accordion, AccordionItem, AccordionToggle, AccordionContent } from '@src/Accordion'
import { List, ListItem } from '@src/ListView'
import toast from '@src/Toast'
import aweSvg from '@example/assets/images/icon-awe.svg'

export default class index extends Component {
  state = {
    activeIndex: 0
  }
  render () {
    return (
      <Page title="Accordion">
        <PageContent>
          <BlockTitle>List View Accordion</BlockTitle>
          <List accordionList>
            <ListItem accordionItem title="Lorem Ipsum">
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Nested List">
              <AccordionContent>
                <List>
                  <ListItem title="Item 1"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 2"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 3"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 4"><img src={aweSvg} width="28" alt="" /></ListItem>
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Integer semper">
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
          </List>
          <BlockTitle>List View Inset Accordion</BlockTitle>
          <List accordionList inset>
            <ListItem accordionItem title="Lorem Ipsum">
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Nested List">
              <AccordionContent>
                <List>
                  <ListItem title="Item 1"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 2"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 3"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 4"><img src={aweSvg} width="28" alt="" /></ListItem>
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Integer semper">
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
          </List>
          <BlockTitle>List View Icon Accordion</BlockTitle>
          <List accordionList>
            <ListItem accordionItem title="Lorem Ipsum" media={<img src={aweSvg} width="28" alt="" />}>
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Nested List" media={<img src={aweSvg} width="28" alt="" />}>
              <AccordionContent>
                <List>
                  <ListItem title="Item 1"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 2"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 3"><img src={aweSvg} width="28" alt="" /></ListItem>
                  <ListItem title="Item 4"><img src={aweSvg} width="28" alt="" /></ListItem>
                </List>
              </AccordionContent>
            </ListItem>
            <ListItem accordionItem title="Integer semper" media={<img src={aweSvg} width="28" alt="" />}>
              <AccordionContent>
                <Block>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
                </Block>
              </AccordionContent>
            </ListItem>
          </List>
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
