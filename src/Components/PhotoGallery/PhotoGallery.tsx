import GalleryApi from '@/Apis/GalleryApi';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const PhotoGallery = () => {
    const [api] = GalleryApi()
    // console.log(api);
    return (
        <div>
            <h3 className='text-center my-10 text-3xl font-semibold'>Photo <span className='text-primary'>Allbum</span></h3>
            <div>
            <Marquee className="">
                {api?.map((photo,i) => (
                    <div key={i} className={` z-50 mx-5  `}>
                        <Image
                            src={photo?.src}
                            alt=""
                            width={500} height={500}
                            className="w-48 h-52 md:w-60 md:h-72 object-cover  rounded-md img-rotat "
                        />
                    </div>
                ))}
                
            </Marquee>
            </div>
        </div>
    );
};

export default PhotoGallery;