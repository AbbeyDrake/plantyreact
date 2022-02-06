import React from 'react';
import { Card, CardBody, CardHeader} from 'reactstrap';

function NewsletterComponent() {
  return (
  <div>
<div className="container">
                <div className="row">
                    <div className="col-sm-2 col-md-3"></div>
                    <div className="col-sm-8 col-md-6">
                        <Card>
                            <CardHeader className="bg-secondary text-white">Sign Up for our Newsletter <i class="fa fa-envelope"></i></CardHeader>
                            <CardBody>
                                <dl className="row textCenter">
                                    <dd className="col-12">Can't get enough from Planty? Sign up for our newsletter to receive more information about local events, plant tips, and more!</dd>  
                                </dl>
                                <dl>
                                    <form>
                                        <div className="form-row justify-content-center">
                                            <div class="form-group col-sm-4">
                                                {/* <label class="sr-only" for="loginEmail">Email address</label>
                                                <input type="email" class="form-control " id="loginEmail" placeholder="Email"> */}
                                            </div>
                                            
                                        </div>
                                        <div className="form-row justify-content-center">
                                            <button type="submit" class="btn btn-dark btn-sm ml-1">Submit</button>
                                        </div>
                                    </form>
                                </dl> 
                            </CardBody>
                        </Card>
                    </div>
                </div>
                
            </div>
            
  </div>
  );
}

export default NewsletterComponent;
