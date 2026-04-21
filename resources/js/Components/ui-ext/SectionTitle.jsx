import { CirclePlus, Pencil } from "lucide-react";
import { LinkButton } from "./LinkButton";
import { CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function SectionTitle({ title, icon: Icon, enableActions, coordinator,   data, onEdit }) {
    return (
             <CardHeader className="border-b border-gray-200">

             
        <CardTitle>
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-2 font-bold'>
               {Icon && <Icon className="h-5 w-5 text-primary/70" />}      {title}
            </div>

 
            {!enableActions &&
                <>
                    {coordinator &&
                        <>
                      
                            {data === null ?
                                <Button variant="" onClick={onEdit} size="sm" > <CirclePlus />  Add {title} </Button> :
                                <Button variant="secondary"   size="sm" onClick={onEdit} > <Pencil />  Edit {title} </Button>
                            }
                        </>
                    }
                </>
            }

        </div></CardTitle>
          </CardHeader>
    )
}