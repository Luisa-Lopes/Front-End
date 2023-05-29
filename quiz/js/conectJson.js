async function getJson(){
    const connection = await fetch("https://github.com/Luisa-Lopes/Front-End/blob/master/quiz/data.json");
    const convertedConnection = await connection.json();
    return convertedConnection;
}

export const  conectJson = {
    getJson
}
