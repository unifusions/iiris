import ApplicationLogo from "@/Components/ApplicationLogo"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import BrandLogo from "./BrandLogo"
import { useAppearance } from "@/hooks/use-appearance"
import { BadgeQuestionMark, BuildingIcon, File, FileTextIcon, Folder, FolderOpen, LayoutDashboard, User } from "lucide-react"
import { NavMain } from "./nav-main"
import { usePage } from "@inertiajs/react"
import { NavAdmin } from "./nav-admin"
import { Card, CardContent } from "@/Components/ui/card"

const navMain = [
  {
    title: "Dashboard",
    url:"/dashboard",
    icon: LayoutDashboard,
    isActive : route().current('dashboard') ? true : false
  },
  {
    title : "Case Reports",
    url : route('crf.index'),
    icon : FolderOpen,
    isActive : route().current('crf.*') ? true : false
  },
  {
    title : "Queries",
    url : route('tickets.index'),
    icon : BadgeQuestionMark,
    isActive : route().current('tickets.index') ? true : false
  }
];

const adminNav = [ 
  {
    title : "Facility",
    url : route('facility.index'),
    icon : BuildingIcon,
    isActive : route().current('facility.index') ? true : false
  },
  {
    title : "Users",
    url : route('users.index'),
    icon : User,
    isActive : route().current('users.index') ? true : false
  },
  {
    title : "Reports",
    url : route('reports.index'),
    icon : File,
    isActive : route().current('reports.index') ? true : false
  }
]
export default function AppSidebar({   props }) {
  const { roles } = usePage().props;
  const {appearance} = useAppearance();
  return (

    <Sidebar collapsible="offcanvas" {...props} className="border-r-0!" >
      <SidebarHeader className="border-b border-gray-200 bg-white h-(--header-height)">
         <a href="#" className="flex  p-1 w-30 max-h-30 mx-auto">
            
                <BrandLogo className="w-full h-full" />
             

            </a>
         
      </SidebarHeader>

      <SidebarContent>
         <NavMain items={navMain} />
         
          {(roles?.admin || roles?.sudo) && <NavAdmin items={adminNav} />}
        </SidebarContent>

        <SidebarFooter>
          <div className=" ">
         <Card className="gap-2 py-4 shadow-none bg-white">
            <CardContent>
              <div className="text-xs text-foreground/70">© 2022–{(new Date().getFullYear())}. DataInsights.</div>
              <div className="text-xs text-foreground/40">  Version 2.1.0 <br/> Updated on April 2026</div>

            </CardContent>
         </Card>
        </div>
        
          <div className="  text-xs">
<div>
 
</div>
<div>
 
</div>
          </div>
        
        </SidebarFooter>
    </Sidebar>
  )
}