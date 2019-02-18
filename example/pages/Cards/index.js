import React, { Component } from 'react'
import { Page, PageContent, Link } from '@src/Core'
import { BlockTitle } from '@src/Block'
import { Card, CardHeader, CardContent, CardFooter } from '@src/Card'
import { List, ListItem } from '@src/ListView'

export default class index extends Component {
  render () {
    return (
      <Page title="Cards" className="page-card">
        <PageContent>
          <BlockTitle>Simple Cards</BlockTitle>
          <Card
            content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
          />
          <Card
            header="Card header"
            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
            footer="Card footer"
          />
          <Card
            content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
          />
          <BlockTitle>Outline Cards</BlockTitle>
          <Card
            outline
            content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
          />
          <Card
            outline
            header="Card header"
            content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
            footer="Card footer"
          />
          <Card
            outline
            content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
          />
          <BlockTitle>Styled Cards</BlockTitle>
          <Card className="card-header-img">
            <CardHeader
              style={{ backgroundImage: 'url(http://lorempixel.com/1000/600/nature/3/)' }}
            >Journey To Mountains</CardHeader>
            <CardContent>
              <p className="date">Posted on January 21, 2015</p>
              <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            </CardContent>
            <CardFooter>
              <Link to="">Like</Link>
              <Link to="">Read more</Link>
            </CardFooter>
          </Card>
          <Card className="card-header-img">
            <CardHeader
              style={{ backgroundImage: 'url(http://lorempixel.com/1000/600/people/6/)' }}
            >Lorem Ipsum</CardHeader>
            <CardContent>
              <p className="date">Posted on January 21, 2015</p>
              <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
            </CardContent>
            <CardFooter>
              <Link to="">Like</Link>
              <Link to="">Read more</Link>
            </CardFooter>
          </Card>
          <BlockTitle>Cards With List View</BlockTitle>
          <Card>
            <CardContent padding={false} childRadius>
              <List>
                <ListItem title="Link 1" arrow />
                <ListItem title="Link 2" arrow />
                <ListItem title="Link 3" arrow />
                <ListItem title="Link 4" arrow />
                <ListItem title="Link 5" arrow />
              </List>
            </CardContent>
          </Card>
          <Card header="New Reelases">
            <CardContent padding={false}>
              <List mediaList>
                <ListItem
                  title="Yellow Submarine"
                  subtitle="Beatles"
                >
                  <img slot="media" src="http://lorempixel.com/88/88/fashion/4" width="44" />
                </ListItem>
                <ListItem
                  title="Don't Stop Me Now"
                  subtitle="Queen"
                >
                  <img slot="media" src="http://lorempixel.com/88/88/fashion/5" width="44" />
                </ListItem>
                <ListItem
                  title="Billie Jean"
                  subtitle="Michael Jackson"
                >
                  <img slot="media" src="http://lorempixel.com/88/88/fashion/6" width="44" />
                </ListItem>
              </List>
            </CardContent>
            <CardFooter>
              <span>January 20, 2015</span>
              <span>5 comments</span>
            </CardFooter>
          </Card>
        </PageContent>
      </Page>
    )
  }
}
