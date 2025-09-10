import React from 'react';

type SidebarProps = {
  title: string;
};

const SpotterSidebar: React.FC<SidebarProps> = (params) => {
  const {
    title,
  } = params;

  return(
    <div style={styles.spotterSidebar}>
      <span>{title}</span>
      <span>Championship entry list</span>
    </div>
  );
};

// Define a type for the style object to enable inline styles safely
type Styles = {
  [key: string]: React.CSSProperties;
};

const styles: Styles = {
  spotterSidebar: {
    color: '#fff',
    backgroundColor: '#000',
    fontFamily: "'Orbitron', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    padding: '2rem',
    lineHeight: 'normal',
    fontSize: '24pt',
  },
  championshipTitle: {
  }
};

export default SpotterSidebar;
