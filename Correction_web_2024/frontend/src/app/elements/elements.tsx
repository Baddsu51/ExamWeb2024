import { useState } from "react"
import { Element } from "../element/element";
import { Divider } from "antd";
import { AddElement } from "../addElement/addElement"
export const Elements = () => {
    const [elements,setElements] = useState<string[]>([]);

    const ajouter = (elementaajouter: string) => {
        const sameElement = elements.find((element) => element === elementaajouter);
        {(sameElement == undefined) ? setElements([...elements, elementaajouter]) : null}
    }

    const supprimer = (elementasupprimer: string) => {
        console.log(elementasupprimer);
        const index = elements.findIndex((element)=>element === elementasupprimer);

        if (index !== -1) {
            const newelements = elements.filter(element => element !== elementasupprimer);
            setElements(newelements);
          }
    }

    return (
        <>
            <h3>Liste :</h3>
            <div>
                {elements.length > 0 ? (
                    elements.map((element) => (
                        <Element element={element} alasuppression={supprimer}/>
                    ))  
                ): (
                    <div>
                        Il y a pas d'élements
                    </div>   
                )}

            </div>
            <Divider/>
            <h3>Ajouter une nouvel élément:</h3>
            <AddElement alajout={ajouter} />
        </>
    )
}
