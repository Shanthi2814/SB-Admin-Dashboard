import React from 'react'

function Chart() {
  return (
    <div className='row'>
        <div className='col-xl-8 col-lg-7'>
        <div className='card shadow mb-4'>
            <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
            <div className='dropdown no-arrow'>
            
            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </div>

            </div>
            <div className='card-body'> 
        <div className='chart-area'>
        <canvas id="myAreaChart"></canvas>
        </div>

        </div>

        </div>
        
        </div>
        <div className='col-xl-4 col-lg-5'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>

                </div>
                   <div className='card-body'>
                    <div className='chart-pie pt-4 pb-2'>
                    <canvas id="myPieChart"></canvas>

                    </div>
                    <div className='mt-4 text-center small'>
                    <span class="mr-2">
                                            <i class="fas fa-circle text-primary"></i> Direct
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-success"></i> Social
                                        </span>
                                        <span class="mr-2">
                                            <i class="fas fa-circle text-info"></i> Referral
                                        </span>
                    </div>
                    </div> 
            </div>

        </div>
        
    </div>
    
  )
}

export default Chart