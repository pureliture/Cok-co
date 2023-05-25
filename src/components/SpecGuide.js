import { React, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import './styles/SpecGuide.css';

const SpecGuide = ({ isOpen, toggleDrawer }) => {
  return (
    <div style={{ width: '360px', display: 'flex', margin: 'auto' }}>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        lockBackgroundScroll="true"
        className="spec_guide_drawer"
        style={{
          width: '360px',
          height: '100%',
          overflowY: 'scroll',
        }}
      >
        <div
          style={{ width: '360px', height: '36px', backgroundColor: '#1A1A1A' }}
        >
          <img
            src="/cross.png"
            style={{ width: '36px', height: '36px' }}
            onClick={toggleDrawer}
          />
        </div>
        <img
          src="/07_Detail Spec Guide.png"
          style={{ width: '360px', height: '4780px' }}
        />
      </Drawer>
    </div>
  );
};

export default SpecGuide;
