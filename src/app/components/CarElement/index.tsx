import React from 'react';

type CarCardProps = {
  carNumber: number;
  firstName: string;
  lastName: string;
  teamName: string;
  teamLogo: string;
  carImage: string;
  championshipLogo: string;
  flagImage: string;
};

const CarCard: React.FC<CarCardProps> = (params) => {
  const {
    carNumber,
    firstName,
    lastName,
    teamName,
    teamLogo,
    carImage,
    championshipLogo,
    flagImage,
  } = params;

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={styles.numberBox}>
          <span style={styles.number}>{carNumber}</span>
        </div>
        
        <div style={styles.driverInfo}>
          <div style={styles.topImages}>
            <img
              src="/img/asrc_b.png"
              alt="ASRC"
              style={styles.logoImg}
            />
            <img
              src="/img/advanced_simulation_b.png"
              alt="Advanced Simulation"
              style={styles.logoImg}
            />
            <img
              src="/img/irw_colored_inline.png"
              alt="iVRA Racing Wheels"
              style={styles.logoImg}
            />
          </div>
          <div style={styles.nameRow}>
            <img
              src={flagImage}
              style={styles.flag}
            />
            <span style={styles.driverNameShort}>{abbreviateLastName(lastName)}</span>
          </div>
          <div style={styles.driverName}>
            <span>{firstName} {lastName}</span>
          </div>
        </div>

        <div style={styles.championshipLogoBox}>
          <img
            src={championshipLogo}
            style={styles.logoImage}
          />
        </div>
        
        <div style={styles.teamLogoImageBox}>
          <img
            src={teamLogo}
            style={styles.teamLogoImage}
          />
        </div>
      </div>

      <div style={styles.carImageBox}>
        <img
          src={carImage}
          style={styles.carImage}
        />
      </div>

      <div style={styles.teamName}>{teamName}</div>
    </div>
  );
};

function abbreviateLastName(lastname: string): string {
  // Remove non-letter characters and convert to uppercase
  const cleanName = lastname.replace(/[^a-zA-Z]/g, '').toUpperCase();

  if (cleanName.length >= 3) {
    return cleanName.slice(0, 3);
  } else {
    // Pad with last character if too short
    const padChar = cleanName.charAt(cleanName.length - 1) || 'X'; // Fallback to 'X'
    return (cleanName + padChar.repeat(3)).slice(0, 3);
  }
}

// Define a type for the style object to enable inline styles safely
type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  card: {
    color: '#fff',
    fontFamily: "'Orbitron', sans-serif",
    width: '20rem',
    margin: '0 auto',
    borderRadius: '.5rem',
    overflow: 'hidden',
    border: '.1rem solid #aaaaaaff',
    lineHeight: 'normal',
  },
  header: {
    display: 'grid',
    gridTemplate: '3rem / 4rem 12rem 3.5rem',
    alignItems: 'top',
    color: '#000',
    justifyContent: 'space-between',
    minHeight: '3rem',
    maxHeight: '3rem',
  },
  numberBox: {
    display: 'flex',
    backgroundColor: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
  },
  number: {
    display: 'flex',
    fontSize: '24pt',
    width: '100%',
    margin: 'auto',
    justifyContent: 'center',
  },
  driverInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  nameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '.25rem',
  },
  driverNameShort: {
    fontSize: '20pt',
    fontWeight: '600',
    lineHeight: '.5rem',
  },
  driverName: {
    fontSize: '9pt',
    fontWeight: 'bold',
  },
  flag: {
    width: '2rem',
    minHeight: '1.4rem',
    objectFit: 'cover',
    border: '.1rem solid #ccc',
    display: 'block',
  },
  topImages: {
    display: 'flex',
    gap: '1rem',
    margin: '.2rem 0',
  },
  logoImg: {
    maxHeight: '.5rem',
  },
  championshipLogoBox: {
    display: 'flex',
    backgroundColor: 'black',
  },
  logoImage: {
    display: 'flex',
    height: '.35rem',
    margin: 'auto',
  },
  carImageBox: {
    textAlign: 'center',
  },
  carImage: {
    width: '95%',
    margin: '1rem auto 0',
  },
  teamLogoImageBox: {
    display: 'flex',
    justifyContent: 'center',
    width: '4rem',
    margin: '.65rem auto',
  },
  teamLogoImage: {
    height: 'auto',
    width: '1.85rem',
  },
  teamName: {
    textAlign: 'center',
    fontSize: '10pt',
    fontWeight: 'bold',
    padding: '.5rem 0',
    backgroundColor: '#000',
    color: '#fff',
  },
};

export default CarCard;
