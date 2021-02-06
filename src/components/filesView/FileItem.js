import React from 'react'
import '../../styles/FileItem.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };
    const styles={
        color:'red',
        backgroundImage: `url(${fileUrl})`,
        height:'auto%',
        width:'100px',
        backgroundPosition: 'center',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        borderRadius:'2px',
        margin:'2px'
    }
    return (
        <div className='fileItem'>
            <a href={fileUrl} target="_blank" download>
                <div style={styles}></div>
                
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fileItem--right">
                    <p>{fileDate}</p>
                    <p>{getReadableFileSizeString(size)}</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem
