import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Programmer from './programmer.png';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
						 src={Programmer}
						 alt="avatar"
						 className="avatar-img"
						/>
						<h4 className="name-text">Hi, I'm David!</h4>
						<div className="banner-text">
							<h1>Software Developer</h1>
							//<hr />
							<p>HTML/CSS | Javascript | Bootstrap | PHP | React | React Native | NodeJS | Express | Linux</p>
							<p>Python | C | C++ | Java | Android Studio | iOS | SQL | MongoDB | R | Arduino</p>
							<div className="social-links">

								//linkedin
								<a href="https://www.linkedin.com/in/david-rafanan" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square"  aria-hidden="true" />
								</a>


								<a href="https://github.com/DavidRafanan" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square"  aria-hidden="true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>
			</div>

		)
	}
}

export default Landing;