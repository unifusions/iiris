import { Button } from "@/Components/ui/button";
import { CardFooter } from "@/Components/ui/card";
import { CircleX, Save } from "lucide-react";
import FormButton from "../form-button";

export default function SectionFooter({ onCancel, processing }) {
    return (
        <CardFooter className="border-t border-gray-200 gap-2">
             <FormButton processing={processing} />
                
                
               
            <Button type="button" variant="destructive" className="gap-3" 
                onClick={onCancel}> <CircleX />
                Cancel </Button>
        </CardFooter>)
}