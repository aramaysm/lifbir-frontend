export   const cardsServices = (
    images:Array<object>
): any => {
    return [
        {
            title:"Comprar una casa",
            content:"LIFBIR les ayuda a encontrar de mandera facil la casa que busca. " +
            "Podra comunicarse directamente con los dueños",
            textButton:"Encuentra Casas",           
            image:images[0], 
            link:"houses/sells",    
        },
        {
            title:"Permutar de casa",
            content:"LIFBIR les ayuda a encontrar de mandera facil la casa que busca. " +
            "Podra comunicarse directamente con los dueños",
            textButton:"Encuentra permuta",           
            image:images[1],    
            link:"houses/sells",       
        },
        {
            title:"Rentar una casa",
            content:"LIFBIR les ayuda a encontrar de mandera facil la casa que busca. " +
            "Podra comunicarse directamente con los dueños",
            textButton:"Encuentra alquiler",           
            image:images[2], 
            link:"houses/rents",          
        },
        
    ];
    
}
export const cardsRoles = (
    images:Array<object>
):any => {
    return [
        {
            title:"Anfitrión",
            content:"Si eres dueño y deseas anunciar tu vivienda, conviertete en anfitrión,"
            +"se tu propio jefe, administra y anuncia tu vivienda a través de la plataforma LIFBIR, sin necesidad de un agente. Publica tu vivienda por el tiempo que desees"
            +", ya sea que la estes vendiendo, permutando o rentando",
            image:images[0],
        },
        {
            title:"Agente inmobiliario",
            content:"Si eres una persona con conocimientos avanzados sobre bienes raíces y deseas crear tu propio negocio, conviértete en agente de LIFBIR."
            +" Anúnciate y déjate conoccer por los propietarios que deseen contratar tus servicios."
            +" Todos los que busquen economizar y que les manejes su negocio estarán buscando su experiencia.",
            image:images[1],
        },
    ]
}

export const infoWhoAreBanner = {
      title:"Quienes somos",
       description: "LIFBIR es un portal automatizado para la busqueda de viviendas que cumplan " +
       "con las necesidades de los consumidores y profesionales de bienes raices. " +
       "LIFBIR esta para ayudar a compradores, vendedores, inquilinos, y propietarios " +
       "a encontrar sus metas",
       textButton:"", 
    };

    export const infoAgentContactBanner = {
        title:"Contacte a un agente",
        description: "LIFBIR es un portal automatizado para la busqueda de viviendas que cumplan " +
        "con las necesidades de los consumidores y profesionales de bienes raices. " +
        "LIFBIR esta para ayudar a compradores, vendedores, inquilinos, y propietarios " +
        "a encontrar sus metas",
        textButton:"Contactar agente", 
    };

    export const infoComercialContactBanner = {
       title:"Comercial de Lifbir",
       description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae\n" +
       "earum est voluptas. A ad architecto consequuntur doloremque doloribus ea, ex\n" +
       "exercitationem illum ipsam, natus officia porro quibusdam rerum sit!\n" +
       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque\n" +
       "consequuntur ex explicabo hic nesciunt, nulla quasi quia quisquam, quos ratione\n" +
       "repellendus, ullam voluptates? Debitis expedita fugiat odio vero voluptate!",
       textButton:"Contáctenos",
    };
 
