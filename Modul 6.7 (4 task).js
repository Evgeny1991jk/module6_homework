function putNum(x, y) {
    //задаем переменную, которую планируем выводить как число в дальнейшем
    let i = x;
    //задаем интервал с которым числа будут отражаться
    let timer = setInterval(function() {
      console.log(i);
      //задаем условие и прописываем функцию для прекращения вывода чисел
      if (i == y) {
        clearInterval(timer);
      }
      i++;
    }, 1000);
  }
  putNum(5, 15);
