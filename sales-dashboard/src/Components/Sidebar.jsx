import React from 'react'
import overview from '../svgs/overview.svg'
import products from '../svgs/products.svg'
import analytics from '../svgs/analytics.svg'
import schedule from '../svgs/schedule.svg'
import payout from '../svgs/payout.svg'
import statements from '../svgs/statements.svg'
import help from '../svgs/help.svg'
import community from '../svgs/community.svg'
import settings from '../svgs/settings.svg'
import logout from '../svgs/logout.svg'
export const Sidebar = () => {
  return (
    <div>
        <p>LOGO</p>
        <div>
            {/* sidebar group 1 */}
            <div className='sidebar-group1'>
                <div>
                    <img src={overview} alt="overview-svg" />
                    <p id='selected'>Overview</p>
                </div>
                <div>
                    <img src={products} alt="products-svg" />
                    <p>Products</p>
                </div>
                <div>
                    <img src={analytics} alt="analytics-svg" />
                    <p>Analytics</p>
                </div>
                <div>
                    <img src={schedule} alt="schedule-svg" />
                    <p>Schedule</p>
                </div>
                <div>
                    <img src={payout} alt="payout-svg" />
                    <p>Payout</p>
                </div>
                <div>
                    <img src={statements} alt="statement-svg" />
                    <p>Statements</p>
                </div>
            </div>
             <hr className='line' />
              {/* sidebar group 2 */}
             <div className='sidebar-group1'>
               <div>
                  <img src={help} alt="" />
                  <p>Help</p>
               </div>
               <div>
                  <img src={community} alt="" />
                  <p>Community</p>
               </div>
               <div>
                  <img src={settings} alt="" />
                  <p>Settings</p>
               </div>
               <div>
                  <img src={logout} alt="" />
                  <p>Logout</p>
               </div>
             </div>
        </div>
    </div>
  )
}
