import './Sidebar.css';
import { Person,Report, Announcement, Loyalty, Dehaze } from '@material-ui/icons';

export default function Sidebar() {
    return (
       <>
       <div className="responsive">
            <Dehaze className="" />  
            </div>
        <div className="sidebar">
          <div className="sidebarWrapper">
            
            <div className="sidebarMenu">
               <h3 className="sidebarTitle">HobbaDesigner</h3>
               <ul className="sidebarList">
                  <li className="sidebarListItem active">
                    <Person className="sidebarIcons" />  
                    الصفحة الرئيسية
                  </li>
                 <li className="sidebarListItem">
                   <Report className="sidebarIcons" />  
                   ماركه
                 </li>
                 <li className="sidebarListItem">
                   <Announcement className="sidebarIcons" />
                   الطلبات
                 </li>
                 <li className="sidebarListItem">
                   <Loyalty className="sidebarIcons" />
                   الاصناف
                 </li>
               </ul>
            </div>
          </div> 
        </div>
       </>
    )
}
