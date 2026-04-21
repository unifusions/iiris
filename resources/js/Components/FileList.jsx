import { Link } from "@inertiajs/react";
import FileDeleteConfirmDialog from "./FileDeleteConfirmDialog";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "./ui/item";
import { Download, Eye, InboxIcon, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { LinkButton } from "./ui-ext/LinkButton";
import HyperLink from "./ui-ext/HyperLink";



const getFileExtension = (fileName = "") =>
    fileName.split(".").pop()?.toLowerCase();
const previewableExtensions = ["jpg", "jpeg", "png", "webp", "512", ""];


const canPreview = (fileName) =>
    previewableExtensions.includes(getFileExtension(fileName));

const FileRow = ({ item,
    crf,
    entity,        // 👈 generic (intraoperative / preoperative / etc.)
    entityRouteKey, // 👈 dynamic route param name
    role,

}) => {
    const { file } = item;
    const fileName = file.file_name;
    const routeParams = {
        crf,
        [entityRouteKey]: entity, // 🔥 dynamic key
        fileupload: file,
    };

    return (
        <>  
            <Item variant="outline" size="xs">
                <ItemMedia variant="icon">
                    {/* <InboxIcon /> */}
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>{file.file_name}</ItemTitle>
                    <ItemDescription> {file.created_at}  </ItemDescription>
                </ItemContent>
                <ItemActions>
                    {canPreview(fileName) && (
                        <HyperLink


                            variant="outline" href={route(`crf.${entityRouteKey}.fileupload.show`, routeParams)}
                            target="_blank">
                            <Eye /> Preview
                        </HyperLink>)}

                           <HyperLink
                        href={route(`${entityRouteKey}filedownload`, routeParams)}
                        className="btn btn-outline-success btn-sm me-2"><Download /> Download</HyperLink>
                </ItemActions>
            </Item>
            {/* <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

                <div className="me-3">

                    <p className="mb-0"></p>
                </div>


                <div    >
                    

                  

                    {role.admin &&
                        <FileDeleteConfirmDialog
                            url={`crf.${entityRouteKey}.fileupload.destroy`}
                            options={routeParams}
                        />
                    }

                </div>
            </div> */}
        </>

    )
}

export default function FileList({ crf, entity, entityRouteKey, role, files }) {
    if (!files)
        return 'No files to display'

    if (files && files.length < 1)
        return 'No files to display'

    return (

        <div className="grid grid-cols-2 gap-2 space-y-2">
            {files.map((file) => <FileRow key={file.file.id} item={file}
                crf={crf}
                entity={entity}        // 👈 generic (intraoperative / preoperative / etc.)
                entityRouteKey={entityRouteKey} // 👈 dynamic route param name
                role={role}

            />

            )}

        </div>
    )
}