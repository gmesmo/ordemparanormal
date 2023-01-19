import React, {useState} from 'react';

import './SideMenu.css'

const SideMenu = () => {
    
    const [elementos, setElementos] = useState([
        {id: 1, nome: "Conhecimento",active: false  },
        {id: 2, nome: "Sangue"      ,active: false  },
        {id: 3, nome: "Morte"       ,active: false  },
        {id: 4, nome: "Energia"     ,active: false  },
        {id: 5, nome: "Medo"        ,active: false  },
    ]);

    return ( 
        <>
            <div className="SideMenu">
                <div className="Side-Content">
                    {elementos.map((elemento =>
                        (<div className={elemento.nome} className="Option">
                            {elemento.nome}
                            <input type="checkbox"/> 
                        </div>
                        )
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default SideMenu;