### Quantum Computer

![LOGO](https://cdn.discordapp.com/attachments/916393114166525974/916660851237322782/QCOMPUTER.png)

##### Описание

Механизм нужен для обеспечения исследовательской станции (Research station) вычислениями (computation). Может работать с многоамперными Energy Hatch.

##### Главное

Квантовый компьютер связывается с исследовательской станцией с помощью оптоволокна (Optical Fiber Cable). В станции кабель подключается к приемнику данных (Optical Slave Connector), в компьютере - к передатчику данных (Optical Master Connector). 1 передатчик может быть соединен только с 1 приемником. Если нужно подключить к станции несколько квантовых компьютеров, их можно подключить последовательно, устанавливая в них приемники.

Микросхемы, обеспечивающие вычисления, и теплоотводы (Vent), охлаждающие их, помещаются в компьютерные стойки (Computer Rack). В зависимости от количества необходимых стоек, можно менять длину компьютера от 4 до 16 блоков. Разные микросхемы обеспечивают разное количество вычислений в секунду.


При работе компьютера стойки с микросхемами нагреваются. Если выбрана несбалансированная схемы охлаждения, то при нагреве стойки до температуры cвыше 60% от критической, микросхемы в ней сгорят и она начнет остывать.

##### Потребление энергии

Квантовый компьютер потребляет 524288 * (1+n) eU/t,

n - количество стоек c микросхемами (пустые стойки энергию не потребляют)

##### Особенности конструкции

Блоки перед вентиляторами компьютера (Computer Heat Vent) должны быть пустыми.

##### Важно!

Запрещен демонтаж структуры в рабочем состоянии во избежание взрыва!

##### Uncertainty resolving

You just need to balance the lights around the focal points in the uncertainty hatch. There are 9 focal points in total, active ones are either green or red, you don't need to balance inactive ones.


If you take a closer look at the LEDs you will notice that they have 2 shades on their surface. Darker color denotes the affected area by the focal point. Only that area needs to be "balanced on top of the focal point" to satisfy it.


In the example i have highlighted the effect range of 2 focal points.


Buttons on the sides are used to pickup and replace 2 uncertain values.


Buttons on the sides are used to pickup and replace 2 uncertain values.

![OTHER](https://cdn.discordapp.com/attachments/916393114166525974/924258464195289138/Uncertain.png)

