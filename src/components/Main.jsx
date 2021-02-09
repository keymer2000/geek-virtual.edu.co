import React from 'react'
import HeaderNav from './GeekMain/HeaderNav';
import DashboardNav from './GeekMain/DashboardNav'

function Main(props) {
    return (
        
        <div>
            
            <HeaderNav />
            <DashboardNav {...props} />

        </div>
    )
}

export default Main
