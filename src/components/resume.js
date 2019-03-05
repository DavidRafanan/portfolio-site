import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Programmer from './programmer.png';
import Education from './education.js';
import Experience from './experience.js';
import Projects from './projects.js';

class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					
					<Cell className="resume-right-col" col={12}>
						<h2>Education</h2>
						<Education
							startYear={2012}
							endYear={2017}
							schoolName="New York University"
							schoolDescription="Bachelor of Science Computer Engineering (New York, New York)"
							/>
						<hr style={{borderTop: '3px solid #00000'}} />

						<h2>Work Experience</h2>

						<Experience 
							startYear={"June 2018"}
							endYear={"Present"}
							jobName={"EpiMusic"}
							jobDescription={"Co-Founder and CTO"}/>
						<Experience 
							startYear={"September 2017"}
							endYear={"December 2017"}
							jobName={"Viacom"}
							jobDescription={"Web Developer"}
							/>
						<Experience 
							startYear={"June 2016"}
							endYear={"August 2016"}
							jobName={"QBS Systems Limited"}
							jobDescription={"Android Developer"}/>


						<hr style={{borderTop: '3px solid #00000'}} />


						<h2>Awards</h2>

						<Projects 
							startYear={"2018"}
							jobName={"IGVC Self Driving Car Challenge"}
							jobDescription={"3rd place overall"}/>
						<Projects
							startYear={"2016"}
							jobName={"HackNYU"}
							jobDescription={"1st place dental track"}/>
						<Projects
							startYear={"2015"}
							jobName={"JPMorgan Code For Good"}
							jobDescription={"technologist runner up"}/>



					</Cell>
				</Grid>
			</div>

		)
	}
}

export default Resume;