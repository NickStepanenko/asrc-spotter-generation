import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, Input, Empty } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

type TrackInfo = {
  name: string;
  round: number;
  laps: number;
  mins: number;
  tyres: [string];
  trackMap: string;
  trackLogo: string;
  raceDateTime: string;
};

type SidebarProps = {
  trackInfo: TrackInfo | null;
  serverName: string;
  serverPass: string;
  serverJoinQr: string;
};

const TrackSidebar: React.FC<SidebarProps> = (params) => {
  const {
    trackInfo,
    serverName,
    serverPass,
    serverJoinQr,
  } = params;

  useEffect(() => {
    const raceDateTime = dayjs(trackInfo?.raceDateTime);
    console.log(trackInfo?.raceDateTime);
  }, []);

  return(
    <>
      {!trackInfo ? <Empty /> :
      <div style={styles.trackSidebar}>
        <div style={styles.comingRace}>
          <span>Coming race</span>
          <DoubleRightOutlined
            style={styles.comingRaceIcon}
          />
        </div>
        <span style={styles.raceName}>Round {trackInfo.round} - {trackInfo.name}</span>
        <div style={styles.trackImageBox}>
          <img
            src={trackInfo.trackLogo}
            style={styles.trackLogo}
          />
          <img
            src={trackInfo.trackMap}
            style={styles.trackImage}
          />
        </div>
        <div style={styles.raceDescription}>
          <div style={styles.descBox}>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Date:</span>
              <span>14 Sep 2025</span>
            </div>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Event Start:</span>
              <span>21:00 CEST</span>
            </div>
          </div>
          <div style={styles.descBox}>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Race Length:</span>
              <span>{trackInfo.laps} laps or {trackInfo.mins} mins</span>
            </div>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Tyres:</span>
              <span>C1-C2-C3</span>
            </div>
          </div>
          <div style={styles.descBox}>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Server Name:</span>
              <span>{serverName}</span>
            </div>
            <div style={styles.descPair}>
              <span style={styles.descHeader}>Password:</span>
              <span>{serverPass}</span>
            </div>
          </div>
        </div>
        <div style={styles.qrCodeArea}>
          <span>Join our Discord community!</span>
          <img
            src={serverJoinQr}
            style={styles.qrCode}
          />
        </div>
      </div>
      }
    </>
  );
};

// Define a type for the style object to enable inline styles safely
type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  trackSidebar: {
    fontFamily: "'Orbitron', sans-serif",
    backgroundColor: '#fff',
    display: 'grid',
    gridTemplate: '1rem 4rem 25rem 10rem 13rem / 1fr',
    alignItems: 'center',
    padding: '1.5rem',
  },
  comingRace: {
    fontWeight: '700',
    textTransform: "uppercase",
    display: 'flex',
    gap: '.25rem',
    fontSize: '14pt',
  },
  comingRaceIcon: {
    color: 'red',
  },
  raceName: {
    fontWeight: '800',
    fontSize: '18pt',
  },
  trackImageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gap: '2rem',
  },
  trackLogo: {
    width: '8rem',
  },
  trackImage: {
    maxWidth: '80%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  raceDescription: {
    display: 'grid',
    gridTemplate: '10rem / 28% 34% 38%',
    rowGap: '1rem',
  },
  descBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  descPair: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',
  },
  descHeader: {
    fontWeight: '700',
  },
  qrCodeArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    fontWeight: '700',
  },
  qrCode: {
    width: '10rem',
    height: '10rem',
  },
};

export default TrackSidebar;
