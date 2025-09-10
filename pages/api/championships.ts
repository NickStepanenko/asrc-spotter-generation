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
          "carNumber": 35,
          "firstName": "Yaroslav",
          "lastName": "Shelomanov",
          "teamName": "Atlassian Williams Racing",
          "teamLogo": "/img/asrc_f1_2025/teams/wi.png",
          "carImage": "/img/asrc_f1_2025/cars/35.png",
          "flagImage": "/img/flags/ru.svg"
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
          "carNumber": 53,
          "firstName": "Pablo Lopez",
          "lastName": "Garcia",
          "teamName": "Stake F1 Team Kick Sauber",
          "teamLogo": "/img/asrc_f1_2025/teams/sa.png",
          "carImage": "/img/asrc_f1_2025/cars/53.png",
          "flagImage": "/img/flags/es.svg"
        }
      ],
    },
  ];

  res.status(200).json(championshipsData);
}
