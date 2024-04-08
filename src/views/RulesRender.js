import { useState, useEffect } from "react";
import Appendix from '../data/Appendix.json';
import { SimpleAccordionExpand } from "../components/Expand";
import { VerticalTabs } from "../components/Tabs";
const appendix = Appendix;
const appendix_names = Object.keys(appendix);
//const appendix_values = Object.values(appendix)[0];

function RulesRender() {
    //const [values, setValues] = useState(appendix_values);

    return (
        <div>
            {appendix_names.map((name, index) => (
                <div style={{ marginBottom: '5px' }}>
                    <SimpleAccordionExpand
                        key={index}
                        name={name}
                        details={<></>
                            // <VerticalTabs
                            //     array={appendix[name]}
                            // />
                        }
                    />
                </div>
            ))}

        </div>
    );
}


export default RulesRender;