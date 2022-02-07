import React from 'react';
import { Card, CardBody, CardHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';

function NewsletterComponent() {

// handleLogin(){
//     alert(`You have submitted the email address ${this.email.value}`);
// };
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
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="email"></Label>
                                        <Input type="email" id="email" name="email" placeholder="email"/>
                                     </FormGroup>
                            
                                     <Button type="submit" value="submit" className = "btn btn-dark btn-sm ml-1">Submit</Button>
                                 </Form>
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
