import React from 'react';
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Sidebar from '../components/sidebar/Sidebar';
import WidgetLg from '../components/widgetLg/WidgetLg';


export const Home = () => {
    return (
        <div className="container">
          <Sidebar />
          <div className="">
          <FeaturedInfo />
          <WidgetLg />
          </div>
        </div>
    )
}
