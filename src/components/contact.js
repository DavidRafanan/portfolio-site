import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Person from './boy.png';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={7}>
						<h2 className="contact-name">David Rafanan</h2>
						<img
							src={Person}
							alt="avatar"
							style={{height: '250px'}} 
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I'm David, and I have a passion for technology. 
						Being a developer, I truly believe that technology is a creative medium in which everyone can curate their own products based on their own vision and perspective.
						Now as the CoFounder of EpiMusic, it's my mission to help musicians and music lovers find their own space. 
						Welcome to my journey.</p>
					</Cell>
					<Cell col={5}>
						<h2 className="contact-name">Contact Me</h2>
						<hr />

						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    	<i className="fa fa-phone-square" aria-hidden="true"/>
							    	(929) 239-1333
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    	<i className="fa fa-envelope" aria-hidden="true"/>
							    	dr1753@nyu.edu
							    </ListItemContent>
							  </ListItem>

							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;