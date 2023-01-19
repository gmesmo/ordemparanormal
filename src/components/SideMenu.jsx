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
                            

                            {}


                            <input type="checkbox" id={elemento.nome} name={elemento.nome} value={elemento.nome}></input>
                            <label id={LabelId(elemento.nome)} for={elemento.nome}>{elemento.nome.toUpperCase()}</label>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </>
     );
}

function LabelId(nome) {
    var label_id = "label_"+nome;

    return label_id;
}
 
export default SideMenu;



