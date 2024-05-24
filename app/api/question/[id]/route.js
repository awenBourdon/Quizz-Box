import { connectToDB } from "@utils/database";
import Question from "@models/question";

// GET (read)
export const GET = async (request, {params}) => {
    try {
        await connectToDB();
        
        const question = await Question.findById(params.id).populate('creator');
        if (!question) return new Response ("Aucun post n'a été trouvé", {status: 404});
       
        return new Response(JSON.stringify(question), {
        status: 200 })
    } catch (error) {
        return new Response("Échec lors de la récupération des données", {
            status: 500 })
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const { question, tag } = await request.json();

    try {
        await connectToDB();
        const existingQuestion = await Question.findById(params.id);
        if (!question) return new Response ("Aucun post n'a été trouvé", {status: 400});
        existingQuestion.question = question;
        existingQuestion.tage = tag;

        await existingQuestion.save();
        return new Response(JSON.stringify(existingQuestion), {
        status: 200 })

    } catch(error) {
        return new Response("Échec lors de la récupération des données", {
        status: 500 })
    }
}


// DELETE (delete)
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        await Question.findByIdAndDelete(params.id);
        return new Response("Supprimé avec succès", {
            status: 200 })
    } catch(error) {
        return new Response("Échec lors de la suppression", {
        status: 500 })
    }
};