import React, { Component } from 'react'
import { Page, PageContent } from '@src/Core'
import { List, ListItem, ListGroup } from '@src/ListView'
import { Block, BlockTitle, BlockFooter } from '@src/Block'
import aweSvg from '@example/assets/images/icon-awe.svg'
import mediaListImg1 from '@example/assets/images/medialist-img-1.jpeg'
import mediaListImg2 from '@example/assets/images/medialist-img-2.jpeg'
import mediaListImg3 from '@example/assets/images/medialist-img-3.jpeg'

export default class index extends Component {
  render () {
    return (
      <Page title="List View">
        <PageContent>
          <BlockTitle>简单列表(Simple List)</BlockTitle>
          <List>
            <ListItem title="项目 1 (Item 1)" />
            <ListItem title="项目 2 (Item 2)" />
            <ListItem title="项目 3 (Item 3)" />
          </List>
          <BlockTitle>简单链接列表(Simple Links List)</BlockTitle>
          <List>
            <ListItem title="链接 1 (Link 1)" arrow as="a" />
            <ListItem title="链接 2 (Link 2)" arrow as="a" />
            <ListItem title="链接 3 (Link 3)" arrow as="a" />
          </List>
          <BlockTitle>数据列表 包含图标(Data list, with icons)</BlockTitle>
          <List>
            <ListItem title="张三丰(Ivan Petrov)" after="CEO">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="郭靖(John Doe)" badge="5">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="令狐冲(Jenna Smith)">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
          </List>
          <BlockTitle>链接(Links)</BlockTitle>
          <List>
            <ListItem title="张三丰(Ivan Petrov)" after="教主" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="郭靖(John Doe)" after="丐帮帮主" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="令狐冲(Jenna Smith)" badge="500" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
          </List>
          <BlockTitle>链接(Links), 头部(Header), 尾部(Footer)</BlockTitle>
          <List>
            <ListItem header="姓名(Name)" title="张三丰(Ivan Petrov)" after="Edit" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem header="电话(Phone)" title="+86 186-2892-3344" after="Edit" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem header="邮箱(Email)" title="john@doe" footer="Home" after="Edit" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem header="Email" title="john@framework7" footer="Work" after="Edit" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
          </List>
          <BlockTitle>链接(Links), 分隔项(Divider), 无图标(No icons)</BlockTitle>
          <List>
            <ListItem title="张三丰(Ivan Petrov)" arrow as="a" />
            <ListItem title="郭靖(John Doe)" arrow as="a" />
            <ListItem divider title="此处为分隔项(Divider Here)" />
            <ListItem title="张三丰(Ivan Petrov)" arrow as="a" />
            <ListItem title="令狐冲(Jenna Smith)" arrow as="a" />
          </List>
          <BlockTitle>粘性标题组(Grouped with sticky titles)</BlockTitle>
          <List>
            <ListGroup>
              <ListItem title="A" groupTitle />
              <ListItem title="Aaron " />
              <ListItem title="Abbie" />
              <ListItem title="Adam" />
            </ListGroup>
            <ListGroup>
              <ListItem title="B" groupTitle />
              <ListItem title="Bailey" />
              <ListItem title="Barclay" />
              <ListItem title="Bartolo" />
            </ListGroup>
            <ListGroup>
              <ListItem title="C" groupTitle />
              <ListItem title="Caiden" />
              <ListItem title="Calvin" />
              <ListItem title="Candy" />
            </ListGroup>
          </List>
          <BlockTitle>嵌入(Inset)</BlockTitle>
          <List inset>
            <ListItem title="Ivan Petrov" after="CEO" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="Two icons here" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="Ultra long text goes here, no, it is really really long" arrow as="a">
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <ListItem title="令狐冲(Jenna Smith)" arrow as="a" >
              <img src={aweSvg} width="28" alt="" />
            </ListItem>
            <BlockFooter>
              <p>Here comes some useful information about list above</p>
            </BlockFooter>
          </List>
          <BlockTitle>媒体列表(Media Lists)</BlockTitle>
          <Block>
            <p>媒体列表与数据列表几乎相同，但具有更灵活的布局，可以可视化更复杂的数据，如产品、服务、用户等。(Media Lists are almost the same as Data Lists, but with a more flexible layout for visualization of more complex data, like products, services, user, etc.)</p>
          </Block>
          <BlockTitle>歌单(Songs)</BlockTitle>
          <List mediaList>
            <ListItem
              title="Yellow Submarine"
              after="￥150"
              subtitle="Beatles"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            >
              <img slot="media" src={mediaListImg1} width="80" />
            </ListItem>
            <ListItem
              title="Don't Stop Me Now"
              after="$22"
              subtitle="Queen"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            >
              <img slot="media" src={mediaListImg2} width="80" />
            </ListItem>
            <ListItem
              title="需要人陪"
              after="$96"
              subtitle="王力宏"
              text="打开窗户，让孤单透气，这一间屋子 如此密闭。欢呼声仍飘在空气里，像空无一人一样华丽。我 渐渐失去知觉，就当做是种自我逃避。"
              arrow
              as="a"
            >
              <img slot="media" src={mediaListImg3} width="80" />
            </ListItem>
          </List>
          <BlockTitle>媒体列表无图标(Media Lists Without Icons)</BlockTitle>
          <List mediaList>
            <ListItem
              title="Facebook"
              after="17:14"
              subtitle="New messages from John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            />
            <ListItem
              title="John Doe (via Twitter)"
              after="17:11"
              subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            />
            <ListItem
              title="Facebook"
              after="16:48"
              subtitle="New messages from John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            />
            <ListItem
              title="John Doe (via Twitter)"
              after="15:32"
              subtitle="John Doe (@_johndoe) mentioned you on Twitter!"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
              arrow
              as="a"
            />
          </List>
          <BlockTitle>简单示例(Something more simple)</BlockTitle>
          <List mediaList>
            <ListItem
              title="Yellow Submarine"
              subtitle="Beatles">
              <img slot="media" src={mediaListImg1} width="42" />
            </ListItem>
            <ListItem
              title="需要人陪"
              subtitle="王力宏"
              arrow
              as="a">
              <img slot="media" src={mediaListImg3} width="42" />
            </ListItem>
            <ListItem
              title="Billie Jean"
              subtitle="Michael Jackson">
              <img slot="media" src={mediaListImg2} width="42" />
            </ListItem>
          </List>
          <BlockTitle>嵌入(Inset)</BlockTitle>
          <List mediaList inset>
            <ListItem
              title="Yellow Submarine"
              subtitle="Beatles"
              arrow
              as="a">
              <img slot="media" src={mediaListImg1} width="42" />
            </ListItem>
            <ListItem
              title="十八般武艺"
              subtitle="王力宏"
              arrow
              as="a">
              <img slot="media" src={mediaListImg3} width="42" />
            </ListItem>
            <ListItem
              title="Billie Jean"
              subtitle="Michael Jackson"
              arrow
              as="a">
              <img slot="media" src={mediaListImg2} width="42" />
            </ListItem>
          </List>
        </PageContent>
      </Page>
    )
  }
}
