import React from 'react'
import Charts from '../../components/charts/Charts.js'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo.js'
import './home.css'


import {userData} from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm.js'
import WidgetLg from '../../components/widgetLg/WidgetLg.js'
const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Charts data={userData} title="User Analytics" grid dataKey='Active User' />
        <div className='homeWidgets'> 
        <WidgetSm />
        <WidgetLg />
        
        </div>
    </div>
  )
}

export default Home