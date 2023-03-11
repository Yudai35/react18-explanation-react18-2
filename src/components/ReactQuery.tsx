import { useQuery } from "@tanstack/react-query"
import axios from "axios"

type Album = {
    userId: number,
    id: number,
    title: string,
}

const fetchAlbum = async () => {
    const result = await axios.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    return result.data;
}

export const ReactQuery = () => {
    const { isLoading, error, data } = useQuery<Album[]>(['albums'], fetchAlbum);

    if(error) return <p>エラーです！</p>;
    if(isLoading) return <p>ローディング中です！</p>

    return (
        <div>
            <p>React Query</p>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </div>
    )
}