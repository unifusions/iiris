
import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { usePage } from '@inertiajs/react';
 
import AdminDashboard from './Dashboards/AdminDashboard';
import CoordinatorDashboard from './Dashboards/CoordDashboard';

 



export default function Dashboard() {

    const { roles, data, facility, adminData, adminCards } = usePage().props;
    return (
        <Authenticated
            pageTitle="Dashboard"

        >

           
  <div className="grid grid-cols-1 gap-4   *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
     
      {/* <AdminDashboard dashboardData={adminData} adminCards={adminCards} /> */}
     
                {roles?.coordinator || roles?.investigator ?
                    <CoordinatorDashboard dashboardData={data} facility={facility} /> :
                    <AdminDashboard dashboardData={adminData} adminCards={adminCards} />}

    </div>
 
             
         



        </Authenticated>
    );
}

