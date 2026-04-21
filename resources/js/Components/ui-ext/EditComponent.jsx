import { useState } from "react"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { MessageCircleWarning } from "lucide-react"

export default function EditComponent({open, setOpen}) {
   

  return (
    <>
   
      <AlertDialog open={open} onOpenChange={setOpen} >
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>
                <div className="flex items-center gap-2">
<MessageCircleWarning />
                 Are you sure?
                </div>
                </AlertDialogTitle>
            <AlertDialogDescription>
              Please save or cancel the exisiting form edit to continure,
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}