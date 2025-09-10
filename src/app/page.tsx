"use client"
import { useEffect, useState } from "react";
import { Button, Select, Space, Empty, message } from 'antd';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import CarCard from "./components/CarElement";
import SpotterSidebar from "./components/SpotterSidebar";

type Championship = {
  id: number,
  title: string,
  logo: string,
  cars: [Cars],
};
type ChampionshipsListItem = {
  value: number,
  label: React.ReactElement,
};
type Cars = {
  carNumber: number,
  firstName: string,
  lastName: string,
  teamName: string,
  teamLogo: string,
  carImage: string,
  flagImage: string,
};

export default function Home() {
  const [messageApi, contextHolder] = message.useMessage();
  const error = (msg: string) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };

  const [champData, setChampData] = useState<Championship[]>([]);
  const [champList, setChampList] = useState<ChampionshipsListItem[]>([]);
  const [selectedChamp, setSelectedChamp] = useState<Championship | null>(null);

  const handleChampionshipSelection = (id: number) => {
    const champ = champData.find((item) => item.id === id) || null;
    setSelectedChamp(champ);
  };

  const handleSaveToImage = (): void => {
    const node = document.getElementById('spotter-area');
    if (!node) {
      error("Element is missing on the page");
      return;
    }

    htmlToImage
      .toJpeg(node, { quality: 1.00 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  };

  useEffect(() => {
    const items = champData.map((champ: Championship) => ({
      value: champ.id,
      label: (<span>{champ.title}</span>),
    }));

    setChampList(items);
  }, [champData]);

  useEffect(() => {
    fetch('/api/championships')
      .then((res) => res.json())
      .then(setChampData)
      .catch(console.error);
  }, []);

  return (
    <div className="">
      <main className="">
        <div style={styles.mainArea}>
          <div style={styles.filterArea}>
            <Space>
              <Select
                placeholder="Select championship"
                optionFilterProp="label"
                options={champList}
                onChange={handleChampionshipSelection} />
              <Button type="primary" onClick={handleSaveToImage}>Save image</Button>
            </Space>
          </div>
          {(!selectedChamp ? <Empty /> :
          <div style={styles.spotterArea} id="spotter-area">
            <SpotterSidebar
              title={selectedChamp?.title || ""}
            />
            <div style={styles.spotterCars}>
              {selectedChamp?.cars?.map((car: Cars, idx: number) => {
                return(
                  <CarCard
                    key={idx}
                    carNumber={car?.carNumber}
                    firstName={car?.firstName}
                    lastName={car?.lastName}
                    teamName={car?.teamName}
                    teamLogo={car?.teamLogo}
                    carImage={car?.carImage}
                    flagImage={car?.flagImage}
                    championshipLogo={selectedChamp?.logo}
                  />
                );
              })}

            </div>
          </div>
          )}
        </div>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}

// Define a type for the style object to enable inline styles safely
type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  mainArea: {
    display: 'block',
    height: '100%',
    margin: '0 5rem',
  },
  filterArea: {
    margin: "1rem 0",
  },
  spotterCars: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(20rem, 20rem))',
    gridTemplateRows: 'repeat(auto-fill, minmax(10rem, 10rem))',
    gap: '.5rem',
    alignItems: 'start',
    justifyContent: 'center',
    margin: '2rem 0',
  },
  spotterArea: {
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplate: '1fr / 10rem 90%',
    gap: '1rem',
  },
};
