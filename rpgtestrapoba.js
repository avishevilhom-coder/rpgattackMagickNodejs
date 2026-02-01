import fs from 'fs';
import promptSync from 'prompt-sync';
const prompt = promptSync();

let player = {
    hp: 20,
    damage: 5,
    armor: 3,
    lvl: 1,
    exp: 0
}

if(fs.existsSync('saverpg.txt')){
    try{

        //читаем файл
        const fileChtenie = fs.readFileSync('saverpg.txt', 'utf8');

        //превращаем текст без кавычек чтоб было видно нам строку обратно в текст 
        const loadPlayer = JSON.parse(fileChtenie);

        console.log("Загрузка прошла успешна")
        console.log(loadPlayer.hp , loadPlayer.damage, loadPlayer.armor, loadPlayer.lvl, loadPlayer.exp);
        player = loadPlayer;
    }
    catch(error){
        console.log("Ошибка Загрузки");
    }

}
