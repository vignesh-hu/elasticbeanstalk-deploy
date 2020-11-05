import React, { useState } from 'react';
import {ContentWrapper} from '../Layout/ContentWrapper';
import { Row, Col, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
// Filestyle
import 'bootstrap-filestyle';

const Settings = () => {
    const [activeTab,setActiveTab] = useState('profile');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab)
        }
    }

    return (
        <ContentWrapper>
            <div className="container-md">
                <Row>
                    <Col lg="3">
                        <div className="card b">
                            <div className="card-header bg-gray-lighter text-bold">Personal Settings</div>
                            <ListGroup>
                                <ListGroupItem action
                                    className={ activeTab === 'profile' ? 'active':'' }
                                    onClick={() => { toggleTab('profile'); }}>
                                    Profile
                                </ListGroupItem>
                                <ListGroupItem action
                                    className={ activeTab === 'account' ? 'active':'' }
                                    onClick={() => { toggleTab('account'); }}>
                                    Account
                                </ListGroupItem>
                                <ListGroupItem action
                                    className={ activeTab === 'emails' ? 'active':'' }
                                    onClick={() => { toggleTab('emails'); }}>
                                    Emails
                                </ListGroupItem>
                                <ListGroupItem action
                                    className={ activeTab === 'notifications' ? 'active':'' }
                                    onClick={() => { toggleTab('notifications'); }}>
                                    Notifications
                                </ListGroupItem>
                                <ListGroupItem action
                                    className={ activeTab === 'applications' ? 'active':'' }
                                    onClick={() => { toggleTab('applications'); }}>
                                    Applications
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="9">
                        <TabContent activeTab={activeTab} className="p-0 b0">
                            <TabPane tabId="profile">
                                <div className="card b">
                                    <div className="card-header bg-gray-lighter text-bold">Profile</div>
                                    <div className="card-body">
                                        <form action="">
                                            <div className="form-group">
                                                <label>Picture</label>
                                                <input className="form-control filestyle" type="file" data-input="false" data-classbutton="btn btn-secondary" data-classinput="form-control inline" data-text="Upload new picture" data-icon="&lt;span class='fa fa-upload mr-2'&gt;&lt;/span&gt;"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Bio</label>
                                                <textarea className="form-control" rows="3"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <label>URL</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Location</label>
                                                <input className="form-control" type="text"/>
                                            </div>
                                            <button className="btn btn-info" type="button">Update settings</button>
                                            <p>
                                                <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="account">
                                <div className="card b">
                                    <div className="card-header bg-gray-lighter text-bold">Account</div>
                                    <div className="card-body">
                                        <form action="">
                                            <div className="form-group">
                                                <label>Current password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                            <div className="form-group">
                                                <label>New password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Confirm new password</label>
                                                <input className="form-control" type="password"/>
                                            </div>
                                            <button className="btn btn-info" type="button">Update password</button>
                                            <p>
                                                <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                                <div className="card b">
                                    <div className="card-header bg-danger text-bold">Delete account</div>
                                    <div className="card-body bt">
                                        <p>You will be asked for confirmation before delete account.</p>
                                        <button className="btn btn-secondary" type="button">
                                            <span className="text-danger">Delete account</span>
                                        </button>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="emails">
                                <div className="card b">
                                    <div className="card-header bg-gray-lighter text-bold">Emails</div>
                                    <div className="card-body">
                                        <p>Etiam eros nibh, condimentum in auctor et, aliquam quis elit. Donec id libero eros. Ut fringilla, justo id fringilla pretium, nibh nunc suscipit mauris, et suscipit nulla nisl ac dolor. Nam egestas, leo eu gravida tincidunt, sem ipsum pellentesque quam, vel iaculis est quam et eros.</p>
                                        <p>
                                            <strong>Your email addresses</strong>
                                        </p>
                                        <p>
                                            <span className="mr-2">email@someaddress.com</span>
                                            <span className="badge badge-success">primary</span>
                                        </p>
                                        <p>
                                            <span className="mr-2">another.email@someaddress.com</span>
                                            <span className="badge bg-gray">private</span>
                                        </p>
                                    </div>
                                    <div className="card-body bt">
                                        <p>
                                            <strong>Add email address</strong>
                                        </p>
                                        <form action="">
                                            <Row className="mb-2">
                                                <Col xl="6">
                                                    <div className="form-group">
                                                        <div className="input-group">
                                                            <input className="form-control" type="email" placeholder="email@server.com"/>
                                                            <span className="input-group-btn">
                                                                <button className="btn btn-secondary" type="button">Add</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" id="defaultCheck1" type="checkbox" value=""/>
                                                        <label className="form-check-label">Keep my email address private</label>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <button className="btn btn-info" type="button">Update email</button>
                                            <p>
                                                <small className="text-muted">* Integer fermentum accumsan metus, id sagittis ipsum molestie vitae</small>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="notifications">
                                <form action="">
                                    <div className="card b">
                                        <div className="card-header bg-gray-lighter text-bold">Notifications</div>
                                        <div className="card-body bb">
                                            <div className="form-check">
                                                <input className="form-check-input" id="defaultCheck2" type="checkbox" value=""/>
                                                <label className="form-check-label">
                                                    <strong>Disable email notifications</strong>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p>
                                                <strong>Interaction</strong>
                                            </p>
                                            <div className="form-check">
                                                <input className="form-check-input" id="defaultCheck3" type="checkbox" value=""/>
                                                <label className="form-check-label">Alert me when someone start to follow me</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" id="defaultCheck4" type="checkbox" value=""/>
                                                <label className="form-check-label">Alert me when someone star my work</label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" id="defaultCheck5" type="checkbox" value=""/>
                                                <label className="form-check-label">Alert me when post a new comment</label>
                                            </div>
                                            <p className="my-2">
                                                <strong>Marketing</strong>
                                            </p>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" id="defaultCheck6" type="checkbox" value=""/>
                                                <label className="form-check-label">Send me news and interesting updates</label>
                                            </div>
                                            <button className="mb-3 btn btn-info" type="button">Update notifications</button>
                                            <p>
                                                <small className="text-muted">Mauris sodales accumsan erat, ut dapibus erat faucibus vitae.</small>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </TabPane>
                            <TabPane tabId="applications">
                                <div className="card b">
                                    <div className="card-header bg-gray-lighter text-bold">Applications</div>
                                    <div className="card-body">
                                        <p>
                                            <span>You have granted access for</span>
                                            <strong>3 applications</strong>
                                            <span>to your account.</span>
                                        </p>
                                        <ListGroup>
                                            <ListGroupItem className="d-flex align-items-center">
                                                <img className="mr-2 img-fluid thumb48" src="img/dummy.png" alt="App"/>
                                                <div>
                                                    <p className="text-bold mb-0">Application #1</p>
                                                    <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="btn btn-secondary" type="button">
                                                        <strong>Revoke</strong>
                                                    </button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem className="d-flex align-items-center">
                                                <img className="mr-2 img-fluid thumb48" src="img/dummy.png" alt="App"/>
                                                <div>
                                                    <p className="text-bold mb-0">Application #2</p>
                                                    <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="btn btn-secondary" type="button">
                                                        <strong>Revoke</strong>
                                                    </button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem className="d-flex align-items-center">
                                                <img className="mr-2 img-fluid thumb48" src="img/dummy.png" alt="App"/>
                                                <div>
                                                    <p className="text-bold mb-0">Application #3</p>
                                                    <small>Ut turpis urna, tristique sed adipiscing nec, luctus quis leo.</small>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="btn btn-secondary" type="button">
                                                        <strong>Revoke</strong>
                                                    </button>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        </ContentWrapper>
        );
}
export default Settings;