async function getJson(){
    const connection = await fetch("https://luisa-lopes.github.io/Front-End/quiz/data.json");
    const convertedConnection = await connection.json();
    return convertedConnection;
}

export const  conectJson = {
    getJson
}
