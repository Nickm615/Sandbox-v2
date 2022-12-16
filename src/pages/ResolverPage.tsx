import { useEffect, useState  } from "react";
import { GetRichTexts } from "../utils/Query";
import { Post, RichText } from "../models";


export function ResolverPage() {
    const [isLoaded, setisLoaded] = useState(false);
    const [data, setData] = useState<Post>();
        useEffect(()=>{
            const getData = async ()=>{
                setData(await GetRichTexts());
            };
            getData();
        },[])
    // const richTextElement = data.items[0].elements.
    return(
        <div>
            <h2>resolver</h2>
        </div>
    )
}