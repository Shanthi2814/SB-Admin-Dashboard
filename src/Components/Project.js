import React from 'react'
import '../Styles/Project.css'
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { post} from '../img/index1';

function Project() {
  return (
    <div className='row'>
        <div className='col-lg-6 mb-4'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                </div>
                <div className='card-body'>
                <div className='server-migration'>
                <h4 className="small font-weight-bold">Server Migration <span
                                            className="float-right">20%</span></h4>
                    
                        <ProgressBar striped variant="danger" now={'20'} /><br/>
                <div>
                <h4 class="small font-weight-bold">Sales Tracking <span
                                            class="float-right">40%</span></h4>
                                            <ProgressBar striped variant="warning" now={'40'} /><br/>
                </div>
                                            
                                        <div>
                                        <h4 class="small font-weight-bold">Customer Database <span
                                            class="float-right">60%</span></h4>
                                            <ProgressBar striped variant="primary" now={'60'} /><br/>
                                        </div>
                                        <div>
                                        <h4 class="small font-weight-bold">Payout Details <span
                                            class="float-right">80%</span></h4>
                                            <ProgressBar striped variant="info" now={'80'} /><br/>
                                        </div>
                                        <div>
                                        <h4 class="small font-weight-bold">Account Setup <span
                                            class="float-right">Complete!</span></h4>
                                            <ProgressBar striped variant="success" now={'100'} /><br/>
                                        </div>
                                            
                </div>

            </div>

            </div>
            
        </div>


        <div className='col-lg-6 mb-4'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                </div>
                <div className='card-body'>
                    <div className='text-center'>
                    <img
            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
            src={post}
            alt="..."/>
                    </div>
                    <p>Add some quality, svg illustrations to your project courtesy of 
                        unDraw, a
                                        constantly updated collection of beautiful svg images that you can use
                                        completely free and without attribution!</p>
                                    
                                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project