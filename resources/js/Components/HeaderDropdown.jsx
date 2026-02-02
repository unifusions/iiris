import { Link, usePage } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import { ArrowDownIcon, ArrowRightStartOnRectangleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function HeaderDropdown() {
     const {auth} = usePage().props;
        const {user} = auth;
    return (

        <Dropdown>

            <Dropdown.Trigger>
                <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                <div className="h-7 w-7 rounded-full bg-primary text-white m-2 flex items-center justify-center">
                    {user?.name[0]}
                </div>
                <div className="flex items-center ">
  <div className="">{user?.name} </div> 
   <ChevronDownIcon width={10} />
                </div>
            
                </button>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <div className="p-3">
                    <div className="">
                       <div className='fw-bold my-2'>{user?.name}</div>
                      <div className="text-sm"> {user?.UserRole?.name} </div> 
                    </div>
                    <hr className="my-3" />
                       <Link href={route('logout')} className='nav-link d-flex align-items-center' method="post" as="button" type="submit">

                            <ArrowRightStartOnRectangleIcon height={20} className="me-1" /> Sign Out
                        </Link>
                </div>
                

             

            </Dropdown.Content>

            {/* <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
    Options
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
    </svg>
  </button>

  <div anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Account settings</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Support</a>
      <a href="#" class="block px-4 py-2 text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">License</a>
      <form action="#" method="POST">
        <button type="submit" class="block w-full px-4 py-2 text-left text-sm text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Sign out</button>
      </form>
    </div>
  </div> */}
        </Dropdown>

    )
}