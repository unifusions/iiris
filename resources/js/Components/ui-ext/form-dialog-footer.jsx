import { CircleX, Save } from "lucide-react";
 
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

export default function FormDialogFooter() {
    return (
        <DialogFooter className="border-t border-gray-200 mt-3 pt-3">
            <DialogClose asChild>
                <Button variant="destructive">
                    <CircleX /> Cancel</Button>
            </DialogClose>
            <Button type="submit" >
                <Save />
                Save changes</Button>
        </DialogFooter>
    )
}