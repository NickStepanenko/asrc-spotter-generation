import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const championshipsData = [
    {
      id: 21,
      title: 'ASRC Formula 1 2025',
      logo: "/img/asrc_f1_2025/logo.png",
      cars: [
        {
          "carNumber": 2,
          "firstName": "Nick",
          "lastName": "Stepanenko",
          "teamName": "Atlassian Williams Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/wi.png",
          "carImage": "/img/asrc_f1_2025/cars/02.png",
          "flagImage": "/img/flags/nl.svg"
        },
        {
          "carNumber": 3,
          "firstName": "Eric",
          "lastName": "Kumadey",
          "teamName": "McLaren Formula 1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/mc.png",
          "carImage": "/img/asrc_f1_2025/cars/03.png",
          "flagImage": "/img/flags/it.svg"
        },
        {
          "carNumber": 4,
          "firstName": "William",
          "lastName": "Snowden",
          "teamName": "McLaren Formula 1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/mc.png",
          "carImage": "/img/asrc_f1_2025/cars/04.png",
          "flagImage": "/img/flags/uk.svg"
        },
        {
          "carNumber": 5,
          "firstName": "Vladislav",
          "lastName": "Zenkov",
          "teamName": "Mercedes-AMG Petronas F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/me.png",
          "carImage": "/img/asrc_f1_2025/cars/05.png",
          "flagImage": "/img/flags/ru.svg"
        },
        {
          "carNumber": 6,
          "firstName": "Timon",
          "lastName": "Soovik",
          "teamName": "Mercedes-AMG Petronas F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/me.png",
          "carImage": "/img/asrc_f1_2025/cars/06.png",
          "flagImage": "/img/flags/de.svg"
        },
        {
          "carNumber": 7,
          "firstName": "Antonis",
          "lastName": "Paparinopoulos",
          "teamName": "Scuderia Ferrari HP",
          "teamLogo": "/img/asrc_f1_2025/teams/fe.png",
          "carImage": "/img/asrc_f1_2025/cars/07.png",
          "flagImage": "/img/flags/gr.svg"
        },
        {
          "carNumber": 10,
          "firstName": "Élisée",
          "lastName": "Tape",
          "teamName": "Aston Martin Aramco F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/am.png",
          "carImage": "/img/asrc_f1_2025/cars/10.png",
          "flagImage": "/img/flags/ca.svg"
        },
        {
          "carNumber": 11,
          "firstName": "Flavio",
          "lastName": "Zongoli",
          "teamName": "HG Esports BlueBolt Tigers",
          "teamLogo": "/img/asrc_f1_2025/teams/bt.png",
          "carImage": "/img/asrc_f1_2025/cars/11.png",
          "flagImage": "/img/flags/it.svg"
        },
        {
          "carNumber": 13,
          "firstName": "Davide",
          "lastName": "Zanini",
          "teamName": "Optiminal Valle",
          "teamLogo": "/img/asrc_f1_2025/teams/ov.png",
          "carImage": "/img/asrc_f1_2025/cars/13.png",
          "flagImage": "/img/flags/it.svg"
        },
        {
          "carNumber": 14,
          "firstName": "Jackson",
          "lastName": "Kavanagh",
          "teamName": "Visa Cash App Racing Bulls F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/vc.png",
          "carImage": "/img/asrc_f1_2025/cars/14.png",
          "flagImage": "/img/flags/us.svg"
        },
        {
          "carNumber": 15,
          "firstName": "Alvin",
          "lastName": "Tran",
          "teamName": "McLaren Formula 1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/mc.png",
          "carImage": "/img/asrc_f1_2025/cars/15.png",
          "flagImage": "/img/flags/us.svg"
        },
        {
          "carNumber": 17,
          "firstName": "Carlos",
          "lastName": "Frau",
          "teamName": "Stake F1 Team Kick Sauber",
          "teamLogo": "/img/asrc_f1_2025/teams/sa.png",
          "carImage": "/img/asrc_f1_2025/cars/17.png",
          "flagImage": "/img/flags/es.svg"
        },
        {
          "carNumber": 18,
          "firstName": "Lorenzo",
          "lastName": "Cappellini",
          "teamName": "HG Esports BlueBolt Lions",
          "teamLogo": "/img/asrc_f1_2025/teams/bl.png",
          "carImage": "/img/asrc_f1_2025/cars/18.png",
          "flagImage": "/img/flags/it.svg"
        },
        {
          "carNumber": 19,
          "firstName": "Uroš",
          "lastName": "Kastelic",
          "teamName": "Scuderia Ferrari HP",
          "teamLogo": "/img/asrc_f1_2025/teams/fe.png",
          "carImage": "/img/asrc_f1_2025/cars/19.png",
          "flagImage": "/img/flags/si.svg"
        },
        {
          "carNumber": 28,
          "firstName": "Piotr",
          "lastName": "Wojdyło",
          "teamName": "Mantis Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/ma.png",
          "carImage": "/img/asrc_f1_2025/cars/28.png",
          "flagImage": "/img/flags/pl.svg"
        },
        {
          "carNumber": 29,
          "firstName": "Paulo",
          "lastName": "Rodrigues",
          "teamName": "MoneyGram Haas F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/ha.png",
          "carImage": "/img/asrc_f1_2025/cars/29.png",
          "flagImage": "/img/flags/pt.svg"
        },
        {
          "carNumber": 32,
          "firstName": "Arco",
          "lastName": "Hollestelle",
          "teamName": "Visa Cash App Racing Bulls F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/vc.png",
          "carImage": "/img/asrc_f1_2025/cars/32.png",
          "flagImage": "/img/flags/nl.svg"
        },
        {
          "carNumber": 35,
          "firstName": "Yaroslav",
          "lastName": "Shelomanov",
          "teamName": "Atlassian Williams Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/wi.png",
          "carImage": "/img/asrc_f1_2025/cars/35.png",
          "flagImage": "/img/flags/ru.svg"
        },
        {
          "carNumber": 37,
          "firstName": "Tomasz",
          "lastName": "Grobelny",
          "teamName": "Mantis Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/ma.png",
          "carImage": "/img/asrc_f1_2025/cars/37.png",
          "flagImage": "/img/flags/pl.svg"
        },
        {
          "carNumber": 42,
          "firstName": "Maxim",
          "lastName": "Zhuravlev",
          "teamName": "BWT Alpine F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/al.png",
          "carImage": "/img/asrc_f1_2025/cars/42.png",
          "flagImage": "/img/flags/ru.svg"
        },
        {
          "carNumber": 47,
          "firstName": "Sergey",
          "lastName": "Sapozhnikov",
          "teamName": "Atlassian Williams Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/wi.png",
          "carImage": "/img/asrc_f1_2025/cars/47.png",
          "flagImage": "/img/flags/ru.svg"
        },
        {
          "carNumber": 53,
          "firstName": "Pablo Lopez",
          "lastName": "Garcia",
          "teamName": "Stake F1 Team Kick Sauber",
          "teamLogo": "/img/asrc_f1_2025/teams/sa.png",
          "carImage": "/img/asrc_f1_2025/cars/53.png",
          "flagImage": "/img/flags/es.svg"
        },
        {
          "carNumber": 54,
          "firstName": "Robert",
          "lastName": "Ryś",
          "teamName": "IRG Team",
          "teamLogo": "/img/asrc_f1_2025/teams/ir.png",
          "carImage": "/img/asrc_f1_2025/cars/54.png",
          "flagImage": "/img/flags/pl.svg"
        },
        {
          "carNumber": 67,
          "firstName": "Alessio",
          "lastName": "Spinelli",
          "teamName": "HG Esports BlueBolt Lions",
          "teamLogo": "/img/asrc_f1_2025/teams/bl.png",
          "carImage": "/img/asrc_f1_2025/cars/67.png",
          "flagImage": "/img/flags/it.svg"
        },
        {
          "carNumber": 69,
          "firstName": "Dejan",
          "lastName": "Kovacic",
          "teamName": "MoneyGram Haas F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/ha.png",
          "carImage": "/img/asrc_f1_2025/cars/69.png",
          "flagImage": "/img/flags/si.svg"
        },
        {
          "carNumber": 70,
          "firstName": "Juanma",
          "lastName": "Fuentes",
          "teamName": "Aston Martin Aramco F1 Team",
          "teamLogo": "/img/asrc_f1_2025/teams/am.png",
          "carImage": "/img/asrc_f1_2025/cars/70.png",
          "flagImage": "/img/flags/es.svg"
        },
        {
          "carNumber": 79,
          "firstName": "Jero",
          "lastName": "Calleja",
          "teamName": "Oracle Red Bull Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/rb.png",
          "carImage": "/img/asrc_f1_2025/cars/33.png",
          "flagImage": "/img/flags/es.svg"
        },
        {
          "carNumber": 81,
          "firstName": "Andrzej",
          "lastName": "Kananowicz",
          "teamName": "IRG Team",
          "teamLogo": "/img/asrc_f1_2025/teams/ir.png",
          "carImage": "/img/asrc_f1_2025/cars/81.png",
          "flagImage": "/img/flags/pl.svg"
        },
        {
          "carNumber": 96,
          "firstName": "Dàigoro",
          "lastName": "Staurenghi",
          "teamName": "HG Esports BlueBolt Tigers",
          "teamLogo": "/img/asrc_f1_2025/teams/bt.png",
          "carImage": "/img/asrc_f1_2025/cars/96.png",
          "flagImage": "/img/flags/it.svg"
        },
      ],
    },
  ];

  res.status(200).json(championshipsData);
}
