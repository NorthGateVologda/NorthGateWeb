import {instance} from "@/app/axios.config";
import {DataRow} from "@/widgets/table/columns";

export async function getHexagons(): Promise<DataRow[]> {
    const data = await instance.get('/api/get_recommendation_placement_parks/');
    return data.data;
}