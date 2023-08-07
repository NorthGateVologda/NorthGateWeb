import {instance} from "@/app/axios.config";

export async function getRating() {
    const {data} = await instance.get('/api/get_recommendation_placement_parks/');
    return data.filter((item: {recommendation: number, rating: number}) => item.recommendation === 1 && item.rating !== 0);
}