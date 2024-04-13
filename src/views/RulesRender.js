import Appendix from '../data/Appendix.json';
import {  AccordionExpandDefault } from "../components/Expand";
import { VerticalTabs } from "../components/Tabs";

const appendix = Appendix;
const appendix_names = Object.keys(appendix);

function RulesRender() {

    return (
        <div>
            {appendix_names.map((name, index) => (
                <div style={{ marginBottom: '5px' }}>
                    <AccordionExpandDefault
                        key={index}
                        name={name}
                        details={
                            <VerticalTabs
                                array={appendix[name]}
                            />
                        }
                    />
                </div>
            ))}

        </div>
    );
}


export default RulesRender;