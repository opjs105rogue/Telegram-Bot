// функция на получение курса валют, которая обращается к API через axios и возвращает ответ сервера
const axios = require('axios');
const {API_URL} = process.env;


// !!!!!!Обрщайте внимание, что API возвращет(какой формат данных), в моем случае это объекты, а не массивы
module.exports = async () => {
    const res = await axios.get(API_URL);
    if(!res || res.status !== 200 || !res.data) {
        throw ("Ошибка при запросе курса");
    } else {
        const currencies = Object.values(res.data.Valute); // массив валют
        // Список валют, которые нам нужны
        const requiredCurrencies = ['USD', 'EUR', 'CNY']; // коды валют, которые вам нужны
        // Фильтруем валюты, чтобы оставить только те, которые в requiredCurrencies
        const filteredCurrencies = currencies.filter(currency => requiredCurrencies.includes(currency.CharCode));

        return filteredCurrencies; // Возвращаем отфильтрованные валюты
    }
}