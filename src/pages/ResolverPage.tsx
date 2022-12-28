import { useEffect, useState  } from "react";
import { GetRichTexts } from "../utils/Query";
import { Post } from "../models";
import { RichText } from "../components/richText";


export function ResolverPage() {
    const [isLoaded, setisLoaded] = useState(false);
    const [data, setData] = useState<Post>();
        useEffect(()=>{
            const getData = async ()=>{
                setData(await GetRichTexts());
            };
            getData();

        },[])
        if (data) {
            console.log(data)
            const richTextElement = data.elements.body_copy;
            console.log(richTextElement)

            return(
                <RichText element={richTextElement}/>

            )

        }
        else return(
            <div>
                <h1>NO DATA</h1>
            </div>
        )
    

}