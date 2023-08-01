import React from 'react';

import FacebookIcon  from '@mui/icons-material/Facebook';
import InstagramIcon  from '@mui/icons-material/Instagram';
import TwitterIcon  from '@mui/icons-material/Twitter';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import YouTubeIcon  from '@mui/icons-material/YouTube';
import { ColorEnum } from '@components/types';


/*
export const getSocialMediaIcon = (icon_name: string) => {
    return (
        <>
             {icon_name.includes("face") 
             ?
                <FacebookIcon />
              :
                icon_name.includes("insta") 
              ?
                <InstagramIcon />
              :  
            }

        </>
       
     

       
    )
    
}

*/

export const socialMediaObject = (color: ColorEnum) => 
{return (
  {
  facebook: (<FacebookIcon color={color} />),
  instagram: (<InstagramIcon color={color}/>),
  twitter: (<TwitterIcon color={color}/>),
  linkedin: (<LinkedInIcon color={color} />),
  youtube: (<YouTubeIcon color={color} />),

})};