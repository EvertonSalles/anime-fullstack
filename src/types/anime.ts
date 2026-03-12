export default interface Anime{
    mal_id: number;
    images:{
        jpg:{
            image_url:string;
        }
    }
    title:string;
    episodes:string;
    score:number;
    year:number;
    synopsis:string;
}