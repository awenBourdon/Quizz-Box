import { connectToDB } from "@utils/database";
import Question from "@models/question";

export const GET = async (request) => {
    try {
        await connectToDB();
        
        const questions = await Question.find({}).populate('creator');
       
        return new Response(JSON.stringify(questions), {
            status: 200 })
    } catch (error) {
        return new Response("Échec lors de la récupération des données", {
            status: 500 })
    }
}
