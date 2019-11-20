import React from "react";
import pv from "../assets/images/pv.jpg"
import "../css/Jobviews.css"


class Jobview extends React.Component {
    render() {

        return <div className="jobView">
            <img src={pv} style={{
                maxHeight: "65vh",
                minWidth: "100%"
            }} />
            <div className="jobtext">
                <h1> Open Positions</h1>
                <p>We're looking for people to join the team who are excited as we are to help build platforms that empower future generations to be successful.</p>
            </div>
            <div style={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center"
            }}>
                <Buttons buttonStyle='filter' Children='Filter By' />
                <Buttons buttonStyle='dept' Children='Department' />
                <Buttons buttonStyle='dept' Children='Location' />
                <Buttons buttonStyle='reset' Children='Reset' />
            </div>
            <div style={{
                marginTop: "8rem"
            }}>
                <JobList jobDept='Engineering' availableJobs='No available jobs' />
                <JobList jobDept='Design and Communication' availableJobs='2 available jobs' />
                <JobList jobDept='Contact Centre' availableJobs='2 available jobs' />
                <JobList jobDept='People Operations' availableJobs='No available jobs' />
                <JobList jobDept='Legal' availableJobs='4 available jobs' />
                <JobList jobDept='Administration' availableJobs='No available' />
                <JobList jobDept='Business Analyst' availableJobs='3 available' />
                <JobList jobDept='Project Management' availableJobs='No available' />
            </div>
            <div style={{textAlign:'center',
            marginTop:'10rem'
         }}>
                <h1>Get notified when there are job opportunities</h1>
                <Buttons buttonStyle='notification' Children='Notify Me' />
            </div>
        </div>
    }
}
class Buttons extends React.Component {
    render() {
        return <div>
            <button className={this.props.buttonStyle}>
                {this.props.Children}


            </button>
        </div>
    }
}

class JobList extends React.Component {
    render() {
        return <div className='JoblistStyle container' >
            <ul>
                <li className='jobDeptList'>
                    {this.props.jobDept}
                </li>
                <li className='availableJobsList'>
                    {this.props.availableJobs}
                </li>
            </ul>
            <hr />
        </div>
    }
}

export default Jobview;


