import { Clipboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import SectionTitle from "./SectionTitle";
import FileList from "../FileList";

export default function EchoAttachments({ coordinator, indexUrl,

    files, crf, entity, entityRouteKey, role
}) {
    return (
        <Card>
           

                <SectionTitle title="Echo Attachments" icon={Clipboard}
                    coordinator={coordinator}
                    createUrl={indexUrl}
                    editUrl={indexUrl}
                >

                </SectionTitle>

           
            <CardContent>
                <FileList files={files}
                    crf={crf}
                    entity={entity}
                    entityRouteKey={entityRouteKey}
                    role={role}
                />
            </CardContent>
        </Card>
    )
}