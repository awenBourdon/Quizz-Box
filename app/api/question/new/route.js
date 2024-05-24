import { connectToDB } from "@utils/database";
import Question from "@models/question";

export const POST = async (req) => {
    const {userId, question, tag} = await req.json();


    try {
        await connectToDB();
        const newQuestion = new Question({
            creator: userId, 
            question,
            tag
        })

        await newQuestion.save();
        return new Response(JSON.stringify(newQuestion), {status: 201})
    } catch (error) {
        return new Response("Erreur lors de l'envoi de la question", { status :500 })
    }
}