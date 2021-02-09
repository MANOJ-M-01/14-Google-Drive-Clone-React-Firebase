import React, { useState, useEffect } from 'react'
import '../../styles/FilesView.css'

import FileItem from './FileItem'
import FileCard from './FileCard'

import { db } from '../../firebase'
import { Divider } from '@material-ui/core'

const FilesView = () => {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files)

    return (
        <div className="fileView">
            <div className="filess">
            <div className="fileView__row">
                {
                    files.slice(0, 7).map(({ id, item }) => (
                        <FileCard name={item.caption} />
                    ))

                }
            </div>
            </div>
            <div className="fileView__titles">
                <div className="fileView__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles--right">
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                    
                ))
            }
            
            
        </div>
    )
}

export default FilesView
