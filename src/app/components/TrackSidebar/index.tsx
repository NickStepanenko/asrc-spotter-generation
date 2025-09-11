import React from 'react';
import { Button, Input } from 'antd';
import { DoubleRightOutlined } from '@ant-design/icons';

type SidebarProps = {
  title: string;
};

const TrackSidebar: React.FC<SidebarProps> = (params) => {
  const {
    title,
  } = params;

  return(
    <div style={styles.trackSidebar}>
      <div style={styles.comingRace}>
        <span>Coming race</span>
        <DoubleRightOutlined
          style={styles.comingRaceIcon}
        />
      </div>
      <span style={styles.raceName}>Round 12 - Japanese Grand Prix</span>
      <div style={styles.trackImageBox}>
        <img
          src={"/img/tracks/logos/suzuka_gp_f1.png"}
          style={styles.trackLogo}
        />
        <img
          src={"/img/tracks/maps/suzuka_gp_f1.avif"}
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
            <span>53 laps or 2 hours</span>
          </div>
          <div style={styles.descPair}>
            <span style={styles.descHeader}>Tyres:</span>
            <span>C1-C2-C3</span>
          </div>
        </div>
        <div style={styles.descBox}>
          <div style={styles.descPair}>
            <span style={styles.descHeader}>Server Name:</span>
            <span>ASRC Formula 1 2025</span>
          </div>
          <div style={styles.descPair}>
            <span style={styles.descHeader}>Password:</span>
            <span>asrc</span>
          </div>
        </div>
      </div>
      <div style={styles.qrCodeArea}>
        <span>Join our Discord community!</span>
        <img
          src="/img/qr.png"
          style={styles.qrCode}
        />
      </div>
    </div>
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
    position: 'relative',
    width: '100%',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  trackLogo: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '5rem',
    height: '5rem',
    objectFit: 'contain',
    zIndex: 10,
  },
  trackImage: {
    maxWidth: '100%',
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
