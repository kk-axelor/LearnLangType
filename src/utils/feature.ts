import axios from "axios";
import { generate } from "random-words";
export const translateWords = async(lang:LangType):Promise<WordType[]> => {
    try {
        const words = generate(8).map((word)=>({
            "Text":word
        }
        ))

     const {data} =    await axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',words,{
            params: {
                'to[0]': lang,
                'api-version': '3.0',
                profanityAction: 'NoAction',
                textType: 'plain'
              },
              headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '79e0011313mshbea44733a844d54p126f5bjsnd42d70ef09eb',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
              },
              
        })

        const res:WordType[] = data.map((item: { translations: Translation[]; },i:number)=>({
            word:item.translations[0].text,
            meaning:words[i].Text,
            options:['hello']
        }))
        return res;
    } catch (error) {
        console.log(error)
        throw new Error("somthing went wrong");
    }
}