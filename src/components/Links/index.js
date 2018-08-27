import React, { Component } from 'react';
import Info from './Info';
import youtube1 from '../img/youtube1.png';
import play from '../img/play.png';
import sql from '../img/sql.png';
import bitcoin from '../img/bitcoin.jpg';

class Links extends Component {
      render() {
            return (
                  <div>
                        <Info heading="Begginer's guide to BlockChain-New!"
                              content="A simple guide to understand Blockchain with Real world Analogy!!"
                              img={bitcoin}
                              link="medium.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />
                        <Info heading="Apps that don't exist but they should!"
                              content="Hey, Instead of talking about best android apps,Let's talk about the future..."
                              img={play}
                              link="youtube.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />

                        <Info heading="SQL  Server  running  on  MAC ! Done. "
                              content="Dogs and Cats living together!!"
                              img={sql}
                              link="medium.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />
                        <Info heading="Top 10 apps that need to exist Part 2"
                              content="Hey, Instead of talking about best android apps,Let's talk about the future..."
                              img={youtube1}
                              link="youtube.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />
                        <Info heading="Apps that don't exist but they should!"
                              content="If someone feels any of these apps feel free to sponser me:))) Here's part..."
                              img={play}
                              link="youtube.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />
                        <Info heading="Begginer's guide to Blockchain-New!"
                              content="A simple guide to understand Blockchain with real world analogy!!"
                              img={bitcoin}
                              link="medium.com"
                              edit={this.props.edit}
                        />
                        <Info heading="Top 10 apps that need to exist Part 2"
                              content="Hey, Instead of talking about best android apps,Let's talk about the future..."
                              img={youtube1}
                              link="youtube.com"
                              onEdit={this.props.onEdit}
                              edit={this.props.edit}
                        />
                  </div>
            );
      }
}

export default Links;