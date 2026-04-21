"use client"
 

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@inertiajs/react"

export function NavMain({
  items,
} ) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}  >  
                <Link href={item.url}  
              className={`transition-colors flex items-center w-full p-3 gap-3  ${
                item.url === route().current()
                ? 'bg-primary text-primary-foreground font-bold'  
                : 'text-gray-500 hover:text-gray-700'
            }`}
            >
                {item.icon && <item.icon />}
                 
                <span>{item.title}</span>
             </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
