import { useEffect, useState  } from "react";
import { GetRichTexts } from "../utils/Query";
import { RichText } from "../models";


export function ResolverPage() {
    const [isLoaded, setisLoaded] = useState(false);
    const [data, setData] = useState<RichText[]>();
        useEffect(()=>{
            const getData = async ()=>{
                setData(await GetRichTexts());
            };
            getData();
            console.log(data)
        },[])
    // const richTextElement = data
    return(
        <div>
            <h2></h2>
        </div>
    )
}