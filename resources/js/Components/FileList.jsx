import { Link } from "@inertiajs/react";
import FileDeleteConfirmDialog from "./FileDeleteConfirmDialog";


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
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">

            <div className="me-3">

                <p className="mb-0">{file.file_name}</p>
            </div>


            <div    >
                {canPreview(fileName) && (
                    <a
                        className="btn btn-outline-info btn-sm me-2"
                        href={route(`crf.${entityRouteKey}.fileupload.show`, routeParams)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View
                    </a>
                )}

                <a
                    href={route(`${entityRouteKey}filedownload`, routeParams)}
                    className="btn btn-outline-success btn-sm me-2">Download</a>

                {role.admin &&
                    <FileDeleteConfirmDialog
                        url={`crf.${entityRouteKey}.fileupload.destroy`}
                        options={routeParams}
                    />
                }
               
            </div>
        </div>
    )
}

export default function FileList({ crf, entity, entityRouteKey, role, files }) {
    if (!files)
        return 'No files to display'

    if (files && files.length < 1)
        return 'No files to display'

    return (

        <div className="list-group">
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