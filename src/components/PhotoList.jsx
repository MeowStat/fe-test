import { ImageField } from "@refinedev/antd";
import { useMany } from "@refinedev/core";
import { Image, Spin } from 'antd';
import { useEffect, useState } from "react";


export const PhotoList = ({albumId}) => {
    const [photos , setPhotos] = useState([])

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
                const data = await response.json();
                setPhotos(data.slice(0, 10));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }

        };

        fetchPhotos();
    }, [albumId]);

    return (
        <div>
        {
            (isLoading) ? (
                <Spin size="large" tip="Loading photos..." />
            ) : (
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                    {
                        photos.map((photo) => (
                            <div key={photo?.id} style={{ margin: "10px", display: "inline-block"}}>
                                <Image
                                    src={photo?.thumbnailUrl}
                                    alt={photo?.title}
                                    title={photo?.title}
                                    key={photo?.id}
                                    preview={{src: photo?.url}}
                                />
                            </div>
                        ))                       
                    }
                    </Image.PreviewGroup>
                )
        }
        </div> 
    )
}